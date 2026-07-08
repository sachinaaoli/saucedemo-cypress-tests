class InventoryPage {

    inventoryItems = '.inventory_item'
    shoppingCart = '.shopping_cart_link'
    shoppingCartBadge = '.shopping_cart_badge'
    addBackpackBtn = '[data-test="add-to-cart-sauce-labs-backpack"]'
    removeBackpackBtn = '[data-test="remove-sauce-labs-backpack"]'
    sortDropdown = '[data-test="product-sort-container"]'

    verifyProductsVisible() {
        cy.get(this.inventoryItems).should('have.length', 6)
    }

    addBackpackToCart() {
        cy.get(this.addBackpackBtn).click()
    }

    removeBackpackFromCart() {
        cy.get(this.removeBackpackBtn).click()
    }

    verifyCartBadge(count) {
        cy.get(this.shoppingCartBadge).should('have.text', count)
    }

    openCart() {
        cy.get(this.shoppingCart).click()
    }

    sortBy(option) {
        cy.get(this.sortDropdown).select(option)
    }

}

export default InventoryPage