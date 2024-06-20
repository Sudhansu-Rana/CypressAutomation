describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a')
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should('contain','Utilities')
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').click()
    cy.get('#navbar > :nth-child(1) > :nth-child(3) > a').should('have.text','Cypress API')
    
  })
})