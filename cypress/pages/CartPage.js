class CartPage {

    cartItem = '.cart_item'
    checkoutButton = '[data-test="checkout"]'
    continueShoppingButton = '[data-test="continue-shopping"]'
    removeBackpackButton = '[data-test="remove-sauce-labs-backpack"]'

    verifyCartHasOneItem() {
        cy.get(this.cartItem).should('have.length', 1)
    }

    clickCheckout() {
        cy.get(this.checkoutButton).click()
    }

    continueShopping() {
        cy.get(this.continueShoppingButton).click()
    }

    removeItem() {
        cy.get(this.removeBackpackButton).click()
    }

    verifyCartIsEmpty() {
        cy.get(this.cartItem).should('not.exist')
    }

}

export default CartPage