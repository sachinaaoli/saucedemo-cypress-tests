import LoginPage from '../pages/LoginPage'

describe('Logout Test', () => {

    const login = new LoginPage()

    let users

    before(() => {
        cy.fixture('users').then((data) => {
            users = data
        })
    })

    beforeEach(() => {

        login.visit()

        login.login(
            users.standardUser.username,
            users.standardUser.password
        )

    })

    it('should logout successfully', () => {

        cy.get('#react-burger-menu-btn').click()

        cy.get('#logout_sidebar_link').should('be.visible').click()

        cy.url().should('eq', 'https://www.saucedemo.com/')

    })

})