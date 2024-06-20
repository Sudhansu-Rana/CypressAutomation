describe("Locators and validation",()=>{

    it("Element validation", ()=>{

        cy.visit(" ")
        cy.get("body>div:nth-child(4)>div>div>ul>li:nth-child(1)>ul>li:nth-child(1)>a").click()
        cy.get("#querying:nth-child(1)>div:nth-child(1)>div>div>button").should('be.visible')
        cy.get("#querying:nth-child(1)>div:nth-child(1)>div>div>button").should('be.enabled')
        cy.get("#querying:nth-child(1)>div:nth-child(1)>div>div>button").should('have.id','query-btn')
        cy.get("#querying:nth-child(1)>div:nth-child(1)>div>div>button").should('have.class','query-btn btn btn-primary')
        cy.get("#querying:nth-child(1)>div:nth-child(1)>div>div>button").should('contain','Button')
        cy.get("#querying:nth-child(1)>div:nth-child(1)>div>div>button").should('have.text','Button')
        cy.get("#querying:nth-child(1)>div:nth-child(1)>div>div>button").click()
    })

    it("Element identification by using id and class name", ()=>{
        cy.visit(" ")
        cy.get("body>div:nth-child(4)>div>div>ul>li:first-of-type>ul>li:nth-of-type(1)>a").click()
        cy.get("input#inputName").should('be.visible')
        cy.get("input#inputName").should('be.enabled')
        cy.get("input#inputName").clear()
        cy.get("input#inputName").type('Sudhansu Kumar Rana')

        cy.get("input#inputEmail").should('be.visible')
        cy.get("input#inputEmail").should('be.enabled')
        cy.get("input#inputEmail").clear()
        cy.get("input#inputEmail").type('sudhansukumarrana@gmail.com')

        cy.get("input#inputPassword").should('be.visible')
        cy.get("input#inputPassword").should('be.enabled')
        cy.get("input#inputPassword").clear()
        cy.get("input#inputPassword").type('12345678')
    })

    it("Element identification by using contains,startwith,endswith", ()=>{
        cy.visit(" ")
        cy.get("body>div:nth-child(4)>div>div>ul>li:first-of-type>ul>li:nth-of-type(1)>a").click()
    
        cy.get("[id*=Name]").clear()
        cy.get("[id*=Name]").type('Rashmi Ranjita Mohapatra')

        cy.get("[id^=inputE]").clear()
        cy.get("[id^=inputE]").type('srashmi@gmail.com')

        cy.get("[id$=Password]").clear()
        cy.get("[id$=Password]").type('9160468878')
    })

    it("Element identification by using first-of-type,last-of-type,nth-of-type and nth-child", ()=>{
        cy.visit(" ")
        cy.get("body>div:nth-child(4)>div>div>ul>li:first-of-type>ul>li:nth-of-type(1)>a").click()
    })

    it("Element identification by using sibling", ()=>{
        cy.visit(" ")
        cy.get("body>div:nth-child(4)>div>div>ul>li:first-of-type>ul>li:nth-of-type(1)>a").click()

        cy.get("[id*=Name]").clear()
        cy.get("[id*=Name]").type('Himansu Kumar Rana')

        cy.get("[id^=inputE]").clear()
        cy.get("[id^=inputE]").type('himansu@gmail.com')

        cy.get("#inputEmail + input").clear()
        cy.get("#inputEmail + input").type('9160468878')
    })
})