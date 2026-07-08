import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('Checkout Tests', () => {

    const login = new LoginPage()
    const inventory = new InventoryPage()
    const cart = new CartPage()
    const checkout = new CheckoutPage()

    let users

    before(() => {
        cy.fixture('users').then((data) => {
            users = data
        })
    })

    beforeEach(() => {

        login.visit()

        cy.login(
            users.standardUser.username,
            users.standardUser.password
        )

        inventory.addBackpackToCart()
        inventory.openCart()
        cart.clickCheckout()

    })

    it('should complete checkout successfully', () => {

        checkout.fillInformation(
            'Sachina',
            'Oli',
            '44600'
        )

        checkout.clickContinue()

        cy.url().should('include', '/checkout-step-two.html')

        checkout.clickFinish()

        checkout.verifyOrderComplete()

    })

    it('should return to products page', () => {

        checkout.fillInformation(
            'Sachina',
            'Oli',
            '44600'
        )

        checkout.clickContinue()
        checkout.clickFinish()
        checkout.backHome()

        cy.url().should('include', '/inventory.html')

    })

})