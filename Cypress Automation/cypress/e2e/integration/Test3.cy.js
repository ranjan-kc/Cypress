class LoginPage {
    navigate() {
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    }

    enterEmail(username) {
        cy.get('[id=Email]').clear()
        cy.get('[id=Email]').type(username);
        return this
    }

}