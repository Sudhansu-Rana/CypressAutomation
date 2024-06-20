describe('My first test suite',()=>{
    it('My first test case',()=>{
        cy.visit('/')
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.get('h1').should('contain','Querying')

        /* ==== Generated with Cypress Studio ==== */
        cy.get('#query-btn').click();
        cy.get('#query-btn').should('have.text', '\n                Button\n              ');
        cy.get('.first').should('have.text', 'apples');
        cy.get('#inputName').should('be.enabled');
        /* ==== End Cypress Studio ==== */
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('My studio testcase on Utilities', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/');
        cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').click();
        cy.get('h1').should('be.visible');
        cy.get('.banner > .container').click();
        cy.get('.container > p > a').should('be.visible');
        cy.get('.list-group > :nth-child(1)').should('have.text', '\n                5\n                Watches\n              ');
        cy.get('.list-group > :nth-child(2)').should('have.text', '\n                14\n                Sweaters\n              ');
        cy.get('.list-group > :nth-child(3)').should('have.text', '\n                22\n                Scarves\n              ');
        cy.get('.list-group > :nth-child(3)').should('be.visible');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('My studio testcase on cypressApi', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/');
        cy.get('#navbar > :nth-child(1) > :nth-child(3) > a').click();
        cy.get('h1').click();
        cy.get('h1').should('be.visible');
        cy.get('h1').should('have.text', 'Cypress API');
        cy.get('.banner > .container').click();
        cy.get('.container > p').should('be.visible');
        cy.get('.container > p').should('have.text', 'Examples of uses of the Cypress API, for a full reference, go to docs.cypress.io\n      ');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('My studio testcase on Git', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/');
        cy.get('.pull-right > li > a').click();
        /* ==== End Cypress Studio ==== */
    });
})