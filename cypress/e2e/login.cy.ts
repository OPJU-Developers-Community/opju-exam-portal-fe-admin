describe('Test Login', () => { 
    it("Should login and redirect to / with network access", ()=> {
        /**
         * 1. Visit Login page.
         * 2. Get email field, password field & type email and password.
         * 3. Get login button & click login button.
         * 4. Visit dashboard page.
         * 5. Check the link text on the dashboard that is Dashboard.
         */

        // 1. Visit Login page
        cy.visit("/login")

        // 2. Get email field, password field & type email and password.
        cy.get('[data-test="login-input-field"]').find("input").type("Patricia@yopmail.com")
        cy.get('[data-test="login-password-field"]').find("input").type("Patricia@123")

        // 3. Get login button & click login button
        cy.get('[data-test="login-button"]').click()

        // 4. Visit dashboard page
        cy.url().should('eq', Cypress.config().baseUrl + '/');

        // 5. Check the link text on the dashboard that is Dashboard
        cy.get('[data-test="dashboard-route"]').should('have.text', "Dashboard").pause()

    })

    it("Should show a error message without network access", ()=> {
        /**
         * 1. Stub the login API endpoint to simulate a successful login response.
         * 2. Visit Login page.
         * 3. Get email field, password field & type email and password.
         * 4. Get login button & click login button.
         * 5. Wait for the login API request to complete.
         * 6. Check is there any Error toast message showing or not.
         */

        // 1. Stub the login API endpoint to simulate a successful login response
        cy.intercept('POST', 'http://localhost:8000/api/admin/login', { forceNetworkError: false }).as('loginRequest');

        // 2. Visit Login page
        cy.visit("/login")

        // 3. Get email field, password field & type email and password.
        cy.get('[data-test="login-input-field"]').find("input").type("Patricia@yopmail.com")
        cy.get('[data-test="login-password-field"]').find("input").type("Patricia@123")

        // 4. Get login button & click login button
        cy.get('[data-test="login-button"]').click()
        
        // 5. Wait for the login API request to complete
        cy.wait('@loginRequest');

        // 6. Check is there any Error toast message showing or not.
        cy.contains("Error")

    })
 })