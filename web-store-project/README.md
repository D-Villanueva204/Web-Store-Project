# Web Store Project
## Team Members: Dominique Villaneuva, Joshua Robleza, Czedrick Marcelino
### User Stories:
1. As a user, I want to browse products by categories such as CPU, GPU, RAM, etc so I can find the products easily.
2. As a user, Once I select a product, I want to see the specifications of that product I have choosen with labels so I can understand the product better.
3. As a user, I want to add products to my shopping cart so I can purchase them later on once I have decided.

## Installation Guide:
Note, that these instructions are only for local installation only.
 
### Create Docker PostGresSQL Database
1. In the root folder, ensure that you have Docker installed. You may install [Docker Desktop] (https://www.docker.com/) to control your web-store-project container.
2. Type `docker compose up` to initialize your web-store-project container.
3. Make a note of the PostGresSQL Database URL as it will be required later. (Ex. postgresql://postgres:mypassword@localhost:5432/mydb)
 
## Create Clerk account and project
1. [Create an account with Clerk](clerk.com) and a Free Project
2. In the *Dashboard* navigate to *Developers/API Keys*
3. Copy the `PUBLIC` and `SECRET_KEY` values
 
## Add .envs
1. Create `apps/frontend/.env` and add:
```
VITE_CLERK_PUBLISHABLE_KEY=<clerk-publishable-key>
 
VITE_API_BASE_URL=http://localhost:3000
```
 
2. Create `apps/backend/.env` and add:
```
CLERK_PUBLISHABLE_KEY=<clerk-publishable-key>
 
CLERK_SECRET_KEY=<clerk-secret-key>
 
FRONTEND_URL=http://localhost:<your-localhost-port>
 
PORT=3000
 
DATABASE_URL=<local-postgres-db-url>
```
 
## Migrate and seed database
1. `cd <solution-root-directory>`
2. `npm run migrate:backend`
3. `cd backend`
4. `npx prisma db seed`
 
## Run the app
1. `cd <solution-root-directory>`
2. `npm run dev`


## Sprint 1
Create App Stylesheet and Style Guide: Joshua, Czedrick, Dominique
Header: Dominique
Shopping Cart: Joshua
Specifications of the product: Czederick
Vite Setup/Management: Dominique

## Sprint 2
Feature Page: Dominique (Main Page), Czedrick (Favourites and Product), Joshua (Cart)
Shared state across pages: Dominique
Multi-Page Navigation: Czedrick
Elemental Addition/Removal: Dominique, Czedrick, Joshus
Header Items are connected with Routes: Czedrick
Form Component: Dominique, Czedrick, Joshua
Browse products by label such as GPU, CPU, RAM, etc: Dominique
Sidebar: Dominique
Parts: Dominique

## Sprint 3:
Sidebar Component, Product Repository, Sidebar Repository, Sidebar Service, useCart, GeneralSelector refactor, GeneralGenerator refactor: Dominique <br>
Product Service: Czedrick <br>
New Component (Order) with new architecture, Order Repository/Service/Hook with Definitions, Order Test Data, Order Page: Joshua <br>
useFavourites hook, favouritesRepo, favouritesService, refactor favouritesButton, refactor favouritesPage: Czedrick

## Sprint 4
Orders(Backend and Frontend), Prisma Installation, Client Initialization - Joshua Robleza
Favourites Backend, Monorepo creation, Favourites Frontend : Czedrick
Products (Front End/Back End), Sidebar (Front End/ Back End), Vercel, Prisma Schema, Prisma Seed - Dominique

## Sprint 5:
Dominique:
    - SearchBar refactor
    - CSS refactor for MainPage, SideBar
    - CartItems session management
    - New SearchParts Repo, Service, Controller
    - Clerk Setup
    - User Prisma integration
    - User Service, Controller.
Favourites backend refactor with clerk, favourites front end refactor with clerk, added clerkMiddleWare to app.ts : Czedrick
Products (Front End/Back End), Sidebar (Front End/ Back End), Vercel, Prisma Schema, Prisma Seed - Dominique
Orders back-end refactor using Clerk, Orders front-end refactor using Clerk, added findOrCreateUser middleware to app.ts - Joshua Robleza
