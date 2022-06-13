/// <reference types="Cypress" />

describe('My first Test', function () {
    it('My Second case', function () {
        cy.visit ("https://www.google.com/");
        cy.get('.gLFyf').clear().type("Mango");
        cy.get('.gNO89b').first().click();
    })

})


