const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'co2oyb',
  
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
    },
    //specPattern: "**/*.feature"
  },
});


/*Cypress.env() // {login_url: '/login', products_url: '/products'}
Cypress.env('login_url') // '/login'
Cypress.env('products_url') // '/products'

CYPRESS_BASE_URL=https://staging.app.com cypress run */