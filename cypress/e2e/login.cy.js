import LoginPage from '../pages/LoginPage'

describe('Login Tests', () => {

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

    it('Valid Login', () => {

        login.login(
            users.standardUser.username,
            users.standardUser.password
        )

        login.verifyLoginSuccess()

    })

    it('Invalid Login', () => {

        login.login(
            users.invalidUser.username,
            users.invalidUser.password
        )

        login.verifyError('Username and password do not match')

    })

    it('Locked User', () => {

        login.login(
            users.lockedUser.username,
            users.lockedUser.password
        )

        login.verifyError('Sorry, this user has been locked out.')

    })

    it('Empty Username', () => {

        login.login(
            '',
            'secret_sauce'
        )

        login.verifyError('Username is required')

    })

    it('Empty Password', () => {

        login.login(
            'standard_user',
            ''
        )

        login.verifyError('Password is required')

    })

})