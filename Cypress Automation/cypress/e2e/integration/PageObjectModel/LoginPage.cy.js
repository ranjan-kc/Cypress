class LoginPage {
    navigate() {
        cy.visit('https://bajra-todo-app.netlify.app/')
    }

    /* enterEmail(username) {
         cy.get('[id=Email]').clear()
         cy.get('[id=Email]').type(username);
         return this
     }*/

    //Instead of writing the cy.get() command twice in the above code, we can simply loop them with the dot operator.

    enterEmail(username) {
        cy.get('[id=Email]')
            .clear()
            .type(username);
        return this
    }

    enterPassword(pswd) {
        cy.get('[id=Password]')
            .clear()
            .type(pswd)
        return this
    }
    submit() {
        cy.get('[type=submit]').click()
    }

}
export default LoginPage