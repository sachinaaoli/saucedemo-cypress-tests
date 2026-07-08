import LoginPage from '../pages/LoginPage'

describe('SauceDemo Login', () => {

    const login = new LoginPage()

    let users

    before(() => {
        cy.fixture('users').then((data) => {
            users = data
        })
    })

    beforeEach(() => {
        login.visit()
    })

    it('should login with valid credentials', () => {

        login.login(
            users.standardUser.username,
            users.standardUser.password
        )

        cy.url().should('include', '/inventory.html')

        cy.get('.title')
            .should('have.text', 'Products')

    })

})