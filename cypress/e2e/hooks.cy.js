describe('hooks tests',()=>{
    before(() => {
        cy.visit('commands/querying')
        cy.log('opening the https://example.cypress.io website')
        cy.log('This is a before hook in the describe block')
      })
      
      beforeEach(() => {
        // root-level hook
        // runs before every test block
        cy.log('before each hook in the describe block')
      })
      afterEach(()=>{
        cy.log('after each hook')
      })
      after(()=>{
        cy.log('after hook is executed')
      })
    
      it('my first test',()=> {
        cy.log('this is first testcase')
      })
      it('my second test',()=>{
        cy.log('this is second testcase')

      })
      it('my third test',()=>{
        cy.log('this is third testcase')

      })
      it('my fourth test',()=>{
        cy.log('this is fourth testcase')

      })

})