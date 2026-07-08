class CheckoutPage {

    firstName = '[data-test="firstName"]'
    lastName = '[data-test="lastName"]'
    postalCode = '[data-test="postalCode"]'
    continueButton = '[data-test="continue"]'
    finishButton = '[data-test="finish"]'
    backHomeButton = '[data-test="back-to-products"]'
    completeHeader = '.complete-header'

    fillInformation(first, last, zip) {
        cy.get(this.firstName).type(first)
        cy.get(this.lastName).type(last)
        cy.get(this.postalCode).type(zip)
    }

    clickContinue() {
        cy.get(this.continueButton).click()
    }

    clickFinish() {
        cy.get(this.finishButton).click()
    }

    verifyOrderComplete() {
        cy.get(this.completeHeader)
            .should('have.text', 'Thank you for your order!')
    }

    backHome() {
        cy.get(this.backHomeButton).click()
    }

}

export default CheckoutPage