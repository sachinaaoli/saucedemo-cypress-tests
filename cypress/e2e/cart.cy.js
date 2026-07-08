import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'

describe('Cart Tests', () => {

    const login = new LoginPage()
    const inventory = new InventoryPage()
    const cart = new CartPage()

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

    })

    it('should display one item in cart', () => {

        cart.verifyCartHasOneItem()

    })

    it('should remove item from cart', () => {

        cart.removeItem()

        cart.verifyCartIsEmpty()

    })

    it('should continue shopping', () => {

        cart.continueShopping()

        cy.url().should('include', '/inventory.html')

    })

    it('should navigate to checkout page', () => {

        cart.clickCheckout()

        cy.url().should('include', '/checkout-step-one.html')

    })

})