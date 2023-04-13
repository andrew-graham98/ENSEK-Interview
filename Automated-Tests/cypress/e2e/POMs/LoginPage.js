export class LoginPage{
    // --------------- Locators ----------------

    getEmailInput = () => cy.get('#Email')
    getPasswordInput = () => cy.get('#Password')
    getLoginButton = () => cy.get('input[value="Log in"]')
    getEmailError = () => cy.get('#Email-error')
    getPasswordError = () => cy.get('#Password-error')
    // -------------- Methods ------------------

    login(username, password){
        this.getEmailInput().type(username)
        this.getPasswordInput().type(password)
        this.getLoginButton().click()
    }
}
