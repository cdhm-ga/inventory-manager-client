# Power Inventory API

API Repo: https://github.com/cdhm-ga/inventory-manager-api

Production Application: https://cdhm-ga.github.io/inventory-manager-client/

Heroku Application: https://shielded-springs-26271.herokuapp.com

## API Documentation:

### Application Description
What is Power Inventory and how is it powered?

Power Inventory is a new, computerized way to track your store’s inventory. It allows you to select items from a NoSQL database and update the quantity on hand, instantly and electronically.

Your store will have an account that is secured by username and password access. Once you sign in, you are ready to make updates.

The first time you use Power Inventory, you will have to add all items in your current inventory each as a New Item.
Click on “New Item.”
In the box that appears, click on your item from the dropdown menu and enter the quantity in the Quantity field.
If you already have items in Power Inventory, you can either delete them or update their quantity. Within the Power Table, click next to an item to select “Remove” or “Update.”

### Technology

- Powered by HTML5 and SCSS
- Powered by Bootstrap
- Powered by Handlebars.js
- Powered by javaScript
- Powered by jQuery
- Powered by AJAX


### Wireframes

Hosted on imgur: https://imgur.com/a/H6SdtnL

### User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create an item.
- As a signed in user, I would like to update my item.
- As a signed in user, I would like to delete my item.
- As a signed in user, I would like to see all items.
- As a signed in user, I would like to see the quantity and price of each item.

### Planning, Process, and Problem Solving

#### Planning

PowerHaus began work on this app with planning the data structure’s form. With an initial idea of having only one collection other than Users, we soon realized that an efficient way to prevent replication of documents within a user’s inventory might necessitate an additional collection.

Adding a Storefront Items table allowed the app to reference a “static” database of warehouse items that the Storefront Items would reference. This would prevent errors introduced by entering a new item, as the only fields allowed to be updated would be Quantity, a Storefront Item-stored value.

#### Process

- First, meet all initial user stories
    - Write an api with routes to support the proper Create, Read, Update,
Delete functions on the necessary resources.
    - Write a client front-end capable of sending requests to these routes.
- Then, bring the user interface up to the latest DOS standards
    - Utilize all 16 colors.
Process
Utilizing the Agile workflow structure, our team distributed Power along these general roles:
  -  Back-End Maestro
  -  Front-End Maestro
  -  Quality Assurance Maven
  -  Scrum Master

#### Problem-solving

When used along with our adopted workflow of pair programming, separating front and
back end concerns allowed two pairs to work on two sections of the project at the same
time without introducing merge conflicts. One exception would be when we performed a
“Power Murge”: a deliberate concurrent effort on the same files that would be resolved
upon merging by accepting both sets of changes. (The Power Murge only works if the two
pairs work on separate functions within those files — in this case, on client calls to
different api routes).

### Known Issues

TBD
