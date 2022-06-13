it('learning assertions', function () {
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()

    cy.get('#query-btn')
        .should('contain', 'Button') //should-contain
        .should('have.class', 'query-btn')
        .should('be.visible')
        .should('be disabled')

    //Explicit assertions
    //expect
    expect(true).to.be.true
    let name = 'Ram'
    expect(name).to.be.equal('Ranjan')

    //assert

    assert.equal(4, 5, 'Not Equal')


})


