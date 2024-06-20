describe("Cypress.io features validation",()=>{
    beforeEach(()=>{
        cy.visit(" ")
    })
    it("Querying features validation",()=>{
        cy.get(".dropdown-toggle").should('be.visible')
        cy.get(".dropdown-toggle").click()
        cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(1)>a").should('be.visible')
        cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(1)>a").should('have.text','Querying')
        cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(1)>a").click()

        cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
        cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Querying')
        cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
        cy.get("body>div:nth-of-type(1)>div>p").contains('Examples of querying for DOM elements in Cypress, for a full reference of commands, go to')
    })
    // it("Traversal features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(2)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(2)>a").should('have.text','Traversal')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(2)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Traversal')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')

    // })
    // it("Actions features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(3)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(3)>a").should('have.text','Actions')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(3)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Actions')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')


    // })
    // it("Window features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(4)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(4)>a").should('have.text','Window')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(4)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Window')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')


    // })
    // it("Viewport features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(5)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(5)>a").should('have.text','Viewport')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(5)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Viewport')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')


    // })
    // it("Location features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(6)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(6)>a").should('have.text','Location')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(6)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Location')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')


    // })
    // it("Navigation features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(7)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(7)>a").should('have.text','Navigation')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(7)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Navigation')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')


    // })
    // it("Assertions features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(8)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(8)>a").should('have.text','Assertions')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(8)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Assertions')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')


    // })
    // it("Misc features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(9)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(9)>a").should('have.text','Misc')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(9)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Misc')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')


    // })
    // it("Connectors features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(10)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(10)>a").should('have.text','Connectors')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(10)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Connectors')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')


    // })
    // it("Aliasing features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(11)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(11)>a").should('have.text','Aliasing')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(11)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Aliasing')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')


    // })
    // it("Waiting features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(12)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(12)>a").should('have.text','Waiting')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(12)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Waiting')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')


    // })
    // it("Network Requests features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(13)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(13)>a").should('have.text','Network Requests')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(13)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Network Requests')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')


    // })
    // it("Files features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(14)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(14)>a").should('have.text','Files')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(14)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Files')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')


    // })
    // it("Storage features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(15)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(15)>a").should('have.text','Storage')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(15)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Storage')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')


    // })
    // it("Cookies features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(16)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(16)>a").should('have.text','Cookies')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(16)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Cookies')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')


    // })
    // it("Spies, Stubs & Clocks features validation",()=>{
    //     cy.get(".dropdown-toggle").should('be.visible')
    //     cy.get(".dropdown-toggle").click()
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(17)>a").should('be.visible')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(17)>a").should('have.text','Spies, Stubs & Clocks')
    //     cy.get("body>nav>div>div:nth-of-type(2)>ul:nth-of-type(1)>li:nth-of-type(1)>ul>li:nth-of-type(17)>a").click()

    //     cy.get("body>div:nth-of-type(1)>div>h1").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>h1").should('have.text','Spies, Stubs & Clocks')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('be.visible')
    //     cy.get("body>div:nth-of-type(1)>div>p").should('contain','Examples of traversing DOM elements in Cypress, for a full reference of commands, go to ')


    // })





    /* ==== Test Created with Cypress Studio ==== */
    it('assignment.cy.js', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.container > p').should('have.text', 'This is an example app used to showcase Cypress.io End-to-End (E2E) testing. For a full reference of our documentation, go to docs.cypress.io\n      ');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('assignment.cy.js', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(1) > a').click();
        cy.get('.container > p').should('have.text', '\n          Examples of querying for DOM elements in Cypress, for a full reference\n          of commands, go to\n          docs.cypress.io\n          and read\n          Selecting Elements: Best Practices Guide\n        ');
        /* ==== End Cypress Studio ==== */
    });
})