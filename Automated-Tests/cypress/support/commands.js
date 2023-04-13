/*
* @description this command can be used to navigate the application using the navbar
* @param {string} buttonName - the text of the button that you want to click one
*/
Cypress.Commands.add("navbar", (buttonName) => {
   return cy.get('.navbar-collapse').find('a').contains(buttonName).click()
})

Cypress.Commands.add("getBySel", (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args)
})