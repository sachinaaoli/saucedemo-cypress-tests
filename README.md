# SauceDemo Cypress Automation Framework

## Project Overview

This project is an end-to-end test automation framework for the SauceDemo web application. It is built using Cypress and JavaScript following the Page Object Model (POM) design pattern.

## Tech Stack

- Cypress
- JavaScript
- Node.js
- Page Object Model (POM)
- Git
- GitHub

## Project Structure

```
cypress/
├── e2e/
│   ├── login.cy.js
│   ├── inventory.cy.js
│   ├── cart.cy.js
│   ├── checkout.cy.js
│   └── logout.cy.js
│
├── fixtures/
│   └── users.json
│
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
└── support/
    ├── commands.js
    └── e2e.js
```

## Test Scenarios

### Login
- Valid login
- Invalid login
- Locked user login
- Empty username
- Empty password

### Inventory
- Verify products are displayed
- Add product to cart
- Remove product from cart

### Cart
- Verify cart items
- Remove item from cart
- Continue shopping
- Navigate to checkout

### Checkout
- Complete checkout successfully
- Return to products page

### Logout
- Logout successfully

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/saucedemo-cypress-tests.git
```

Install dependencies:

```bash
npm install
```

Open Cypress:

```bash
npx cypress open
```

Run tests in headless mode:

```bash
npx cypress run
```

## Design Pattern

- Page Object Model (POM)
- Fixtures
- Custom Commands
- Reusable Test Methods

## Author

Sachina Oli