# Architecture Document
## Favourites Hook
### What does this hook do?
My favourites custom hook is to handle the state of the favourites page. It holds the favourites array in state so that any item that will be added will be put into that array. I also added an error string so that when an error does occur in the favourites page, i can reuse this hook to display that message anywhere I want. I also have a handleToggleFavourite that will run once a user clicks the favourites button and checking it by their ID. The useEffect loads the favourites list once the component is used. 

### How did you decide what logic to include in that implementation? How does that correctly separate solution concerns?
Since the hook is responsible for connecting the service to the page, it uses the React State and useEffect but does not contain any business logic at all. It just handles the changes made to the state and the errors that are caught with the try/catch in the hook and stores it into the errors state. 

### Where is the hook used?
This hook is being used in the favouritesPage and the favouritesButton. In the favouritesPage, it uses favourites and error to display the list of favourites and their corresponding errors. In the favouritesButton,m it uses favourites, error and handleToggleFavourite to check an items favourite status and displays the correct button depending on its status.

## Repository
### What does this repository do?
The favourites repository is accessing the manipulating the mock database that I created with 11 mock data entries. It has CRUD operations such as getFavourites to retrieve all favourited items, getFavouriteById to retrieve a single item by its ID, createFavourites to add a new item to the list and deleteFavourites that toggles an items favourited boolean to false. 

### How did you decide what logic to include?
Since the repository is supposed to handle the data, I kept this goal in mind. The repo only finds items, throws errors if they are not found and does the action. It does not make actions for when and why. The services is what makes the decision of which function to call based on state. For example, createFavourites just pushes a new items and throws an error if it already exists.

### Where is this repository used?
This repository is used in the favouritesService component where the service calls the repo functions to access and modify the data.

## Services
### What does this service do?
The favouritesService handles all the business logic of the favourites page. It has two functions, getFavourites which fetches all favourites and toggleFavourite which tells the components where to add or remove the favourite based on its favourited boolean value.

### How did you decide what logic to include?
Since the services is where business logic is handled, I made the toggleFavourite function to retrieve the item by ID and check if it is already favourited. If it is favoourited, it calls the deleteFavourites function and if not, it calls the createFavourites function. The decision making belongs to the service because since the service is supposed to handle business logic, repos should only do actions and hooks only manage state. 

### Where is this service used?
The service is used by the hook useFavourites. The hook calls the getFavourites to load the list into state and uses toggleFavourite when a user wants to add or remove a favourite item. Components do not access the service directly, just the hook. 