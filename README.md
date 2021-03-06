# vball-scrimmage
Manage weekly scrimmage games with friends.  The stack will be React, SASS, ES6.  With this iteration, it will be assumed there is no data persistence when the page is refreshed.

### Constraints
Active players: 8 <= players <= 12

### Functionality
This will be a single page app that will display a list of active players playing for the week and a list of inactive players in a separate section.
The user will be able to toggle a player to active/inactive by clicking an icon next to their name, as well as click on an edit button that will popup a box to edit the player name and status.

### Installation

requires [npm](https://nodejs.org/en/download/)

```
npm install
```

### Run the Applicatoin
```
npm start
```
http://localhost:8080

### Create styles
```
sass --watch css/styles.sass:public/css/styles.css
```

### Build Production App
```
npm run build
```

### Deploy to Heroku
 ```
 git push heroku master
 ```
