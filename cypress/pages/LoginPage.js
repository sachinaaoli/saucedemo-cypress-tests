class LoginPage {

    usernameInput = '[data-test="username"]'
    passwordInput = '[data-test="password"]'
    loginButton = '[data-test="login-button"]'
    errorMessage = '[data-test="error"]'

    visit() {
        cy.visit('https://www.saucedemo.com/')
    }

    login(username, password) {

        cy.get(this.usernameInput).clear()

        if (username !== '') {
            cy.get(this.usernameInput).type(username)
        }

        cy.get(this.passwordInput).clear()

        if (password !== '') {
            cy.get(this.passwordInput).type(password)
        }

        cy.get(this.loginButton).click()
    }

    verifyLoginSuccess() {
        cy.url().should('include', '/inventory.html')
        cy.get('.title').should('have.text', 'Products')
    }

    verifyError(message) {
        cy.get(this.errorMessage)
            .should('be.visible')
            .and('contain', message)
    }

}

export default LoginPage