import {LoginPage} from "../POMs/LoginPage";
import {loginDetails} from "../../fixtures/loginDetails";

describe('Login Page Tests', ()=>{
    const loginPage = new LoginPage()
    beforeEach(()=>{
        cy.visit('/')
        cy.get('#loginLink').click()
    })
    // set the page load timeout to 10 seconds to fail the login test whilst it times out
    it('Should be able to login',{pageLoadTimeout: 10000},()=>{
        loginPage.login(loginDetails.name, loginDetails.password)
        //Test will fail here,
        // unable to determine what to assert as login function is broken
        cy.get('h2').should('not.contain.text','error')
    })
    it('should display validation message for incorrect email format',  () => {
        loginPage.login('NotARealEmail',loginDetails.password)
        loginPage.getEmailError().should('have.text','The Email field is not a valid e-mail address.')
    });
    it('should display validation message for empty fields',  () => {
        loginPage.getLoginButton().click()
        loginPage.getEmailError().should('have.text', 'The Email field is required.')
        loginPage.getPasswordError().should('have.text', 'The Password field is required.')
    });
})