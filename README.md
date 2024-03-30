# Weather-App
Weather is react app that is displaying the forecasted weather for the next 5 days

# Table of contents
* General info
* Technologies
* Setup

# General info
This project takes 2 endpoints and after that it will display the current weather and the forecast for upcoming day on the first page. After click on weather cards on first page you will be redirected to different page with the weather displayed for the current day by hours.

# Technologies
For the creation of this project I have used javascript library  React, html and css.
For state management redux from @reduxjs/toolkit. For routing I have used react-router-dom.
For the tests I have used vites with jest, cypress.


# Setup
To run the project first you need to install node on your computer and after that to run these commands with cmd or git bash.

```bash
git clone https://github.com/dzlatarov/Weather-App.git
cd Weather-App/client/weather-app/
npm install
npm run dev
```
To run the test you need this command for vitest
```bash
npm test
```
and it will run the test in the console.
For cypress you have to run this command
```bash
npx cypress open
```
And cypress will open a portal with two option E2E Testing or Component Testing.
You have to choose E2E Testing and to choose on which browser you want to run it and press Start E2E Testing.
Tha browser that you chose will open and there is already created file initialTest.cy.js. When you click it the test will start.
