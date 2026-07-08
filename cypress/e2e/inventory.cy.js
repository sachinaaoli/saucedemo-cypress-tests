import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

describe('Inventory Tests', () => {

    const login = new LoginPage()
    const inventory = new InventoryPage()

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

    })

    it('should display six products', () => {

        inventory.verifyProductsVisible()

    })

    it('should add backpack to cart', () => {

        inventory.addBackpackToCart()

        inventory.verifyCartBadge('1')

    })

    it('should remove backpack from cart', () => {

        inventory.addBackpackToCart()

        inventory.removeBackpackFromCart()

        cy.get('.shopping_cart_badge').should('not.exist')

    })

})