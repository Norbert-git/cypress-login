// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginToApplication", () => {
  const loginInfo = {
    userName: "standard_user",
    password: "secret_sauce",
  }

  cy.visit("/")
  cy.get("#user-name").type(loginInfo.userName)
  cy.get("#password").type(loginInfo.password)
  cy.get("#login-button").click()
})

Cypress.Commands.add("lockedOutUser", () => {
  const loginInfo = {
    lockedOutUser: "locked_out_user",
    password: "secret_sauce",
  }

  cy.visit("/")
  cy.get("#user-name").type(loginInfo.lockedOutUser)
  cy.get("#password").type(loginInfo.password)
  cy.get("#login-button").click()
  cy.get("h3").should(
    "have.text",
    "Epic sadface: Sorry, this user has been locked out."
  )
})

Cypress.Commands.add("wrongUserName", () => {
  const loginInfo = {
    userName: "standard_userrrr",
    password: "secret_sauce",
  }

  cy.visit("/")
  cy.get("#user-name").type(loginInfo.userName)
  cy.get("#password").type(loginInfo.password)
  cy.get("#login-button").click()
  cy.get("h3").should(
    "have.text",
    "Epic sadface: Username and password do not match any user in this service"
  )
})
Cypress.Commands.add("wrongPassword", () => {
  const loginInfo = {
    userName: "standard_user",
    password: "secret_sauceeeee",
  }

  cy.visit("/")
  cy.get("#user-name").type(loginInfo.userName)
  cy.get("#password").type(loginInfo.password)
  cy.get("#login-button").click()
  cy.get("h3").should(
    "have.text",
    "Epic sadface: Username and password do not match any user in this service"
  )
})
