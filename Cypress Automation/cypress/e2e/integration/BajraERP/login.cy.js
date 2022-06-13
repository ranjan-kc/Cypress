describe('My first Test', function () {
    it('URL Test', function () {
        //test step
        cy.visit ("https://www.bajratechnologies.com/web/login");
        
        cy.get("#login").type("ranjan.kc@bajratechnologies.com");
        cy.get("#password").type("ranjan");
        cy.get(".btn").click();


    })

    describe ("Reset Password", function(){
        it("", function(){
            cy.visit ("https://www.bajratechnologies.com/web/login");
            cy.get(".justify-content-between > a").click();
        })
    
    })

})