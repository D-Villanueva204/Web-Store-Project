# Dominique Villanueva Architecture Document for Sprint 3

Sprint 3 would introduce many refactoring and implementation of new components in order to use
hook-service-repository layouts for our project. Outlined below is what I've implemented 
and why they were implemented in this fashion.

## Parts

Parts were extremely limited in Sprint 2. In order for my colleagues to have more access to our json data, I created some pretty limited 
components called generalSelector and generalTypeGenerator which just grabbed a random part or looped through one of the json files until the name matched the component.
Even when creating an interface, it was still kind of tedious to use. 

So, what was required was a massive overhaul of Parts, PartTypes, and a more user and developer friendly repository and services for obtaining product info. 

### productRepository

Previously, I had embedded links to the json files in PartTypes. What productRepository does is act as a gateway to any sort of
data manipulation or creation. There is a singleton object called partData which holds multiple arrays of their different PC parts, sorted in their own category.
<br>
Upon running, the data is initialized through looping through the different json files and converting the data entries into their own
Part data types, then pushing that converted entry into its respective array.

## productRepository - fetchAllParts()

Returns the singleton 'partData' containing the part arrays. I left it sparse in terms of validation, and my colleagues wanted to have their services use access the part data in this fashion. It is used mostly for looking through the data as a whole where an entry may not be have a type assigned or is in the original Part type.

## productRepository - addType()

Adds the respective Part towards their partData array. No validation. These will be placeholders for when we integrate actual databases to our project. They are not presently used. 

## productRepository - getTypeByID()

Returns the respective data array by type. Originally set to be a service. I attempted to make this into a service, but I realized that doing it as a service would most likely be too heavy on API calls in the future and I didn't want to use a key-value
pair data type for partData that would overcomplicate my colleague's services that use fetchAllParts().

## productRepository - updateStock()

Takes a Part object, and updates the stock value based on the amount argument given.
For Update and Delete operations, my colleagues and I decided not to make any delete functions as it would be more useful to keep
entries for archival purposes, and stores would often use a different SKU rather than update the product directly. So the only
update function is only to update stock.

### productService

Czedrick and I had split duties for productService. After refactoring the Part and PartType data types, generalSelector and generalGenerator needed to be refactored. He wanted to create some services as his page was heavy on those components, and I opted
to let him make a few as he needed for his services. I opted to make one that would make generalSelector
more efficient.

## productService - getByName()

Returns a Part based on name and type given. This is mostly just to replace the behaviour of generalSelector with an easier to use
service that could be used elsewhere for my colleagues.

### Sidebar

The Sidebar was our shared-state component last Sprint. After an analysis, it was clear I would still need to do some prop-drilling.
My architecture consists of:
    - sidebarRepository
    - sidebarService
    - useCart (Hook)
    - sidebar (Component)

It is to represent and show the items added to the shopping cart before purchase.
Its resource is made from CartItem objects, which are meant to be compatible with Part objects.

We will go over how this pipeline works.

## sidebarRepository

Basic CRUD operations for the Sidebar data. The singleton is always initialized with some basic CartItems.
In the future, I want it to initialize based on the User's individual CartItem array, so they can access
their saved items in their cart through a different computer.

## sidebarRepository - removeCartItem()

Decrements quantity if item exists, if quantity is 1, then removes the item.
Even though there is business logic, I wanted to ensure that the item was not removed entirely by accident if a user
was intending to remove one item. It is to be used in the Cart page.

## sidebarService - addItem()

Service for addCartItem repository. Adds validations to check if there are 10 items, checks if the cartItem corresponds to an existing Part, and increments the quantity if the CartItem is in cart rather than add a new entry. Otherwise, this converts a Part into a CartItem if the item isn't in the cart, and returns it.

This service is used as part of a function in the useCart Hook.

## sidebarService - fetchItems() and clearItems()

These services are here to act as service functions for the fetchAllItems and clearCart repositories. These do not need
any validations, and are here for convenience so that the corresponding repository functions do not need to be called.

## sidebarService - removeItem()

Wrapper function for removeCartItem in repository. Adds validation to ensure that item exists in cart, then calls removeCartItem.
Used in the useCart hook. 

## sidebarService - getTotal()

Wrapper function to retrieve total from all item's prices in cart. Used in useCart to calculate total on initalization.
Meant for use in CartPage.

## useCart()

This is the hook. It's primarily used by the BuyButton to addItems to cart, and used via prop drilling in Sidebar to show items in the cart, as well as refreshing its state to show updates.

Originally, I did not expect the use of prop-drilling, I was not sure about the use of state, but my colleagues and I concluded that the project isn't big enough to need the use of Context. I do wish in the future to refactor it to use Context once individual
carts are implemented. Its primary function is to take the state of the cart away from App.tsx for now.


