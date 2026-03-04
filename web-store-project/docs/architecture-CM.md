# Architecture Document
## Favourites Hook
### What does this hook do?
My favourites custom hook is to handle the state of the favourites page. It holds the favourites array in state so that any item that will be added will be put into that array. I also added an error string so that when an error does occur in the favourites page, i can reuse this hook to display that message anywhere I want. I also have a handleToggleFavourite that will run once a user clicks the favourites button and checking it by their ID. The useEffect loads the favourites list once the component is used. 

### How did you decide what logic to include in that implementation? How does that correctly separate solution concerns?
Since the hook is responsible for connecting the service to the page, it uses the React State and useEffect but does not contain any business logic at all. It just handles the changes made to the state and the errors that are caught with the try/catch in the hook and stores it into the errors state. 

### Where is the hook used?
This hook is being used in the favouritesPage and App.tsx. In the favouritesPage, it uses favourites and error to display the list of favourites and their corresponding errors. In the App.tsx we refactored the old state we had and just used the hook so that we can reuse this hook wherever we need it to be.

## Repository
### What does this repository do?
The favourites repository is accessing the manipulating the mock database that I created with 11 mock data entries. It has CRUD operations such as getFavourites to retrieve all favourited items, getFavouriteById to retrieve a single item by its ID and it also uses the getByID product service so that we can convert the product data into our favourites dataframe.

### How did you decide what logic to include?
Since the repository is supposed to handle the data, I kept this goal in mind. The repo only finds items, throws errors if they are not found and does the action. It does not make actions for when and why. The services is what makes the decision of which function to call based on state. For example, getFavouriteById just fetches the item with the matching ID and throws an error if it cannot find it.

### Where is this repository used?
This repository is used in the favouritesService component where the service calls the repo functions to access and modify the data.

## Services
### What does this service do?
This service looks for the item in the favourites and if it is found, it will be removed. If the item doesn't exist in the favourites list yet, it will grab it from the products and adds it to the favourites list.

### How did you decide what logic to include?
Since the service is responsible for making decisions, this is why we put toggleFavourite in our services so that it handles the business rules to check whether or not to add this item to our favourites or remove it. By doing this, this keeps every component separate from each other to do their jobs but still work in conjunction together smoothly.

### Where is this service used?
The service is used by the hook useFavourites. The hook calls the getFavourites to load the list into state and uses toggleFavourite when a user wants to add or remove a favourite item. Components do not access the service directly, just the hook. 