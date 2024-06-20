describe('Html tags suite',()=>{
    it('Html tag class',()=>{
        cy.visit('')
        cy.get('h2').should('be.visible')
        cy.get('h2').eq(0).should('be.visible')
        cy.get('h2').eq(1).should('be.visible')
        cy.get('h2').eq(2).should('be.visible')
    }) 
})