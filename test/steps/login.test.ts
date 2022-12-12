import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";

Given(/^launch the application$/, async () => {
    await loginPage.launchApplication()
    await loginPage.verifyPageTitle();
});

Given(/^verify the login page$/, async () => {
    await loginPage.verifyLoginTitle();
});

When(/^enters the credentials as "([^"]*)" and "([^"]*)"$/, async (username: string, password: string) => {
    await loginPage.enterCredentials(username, password)
});

When(/^clicks on login button$/, async () => {
    await loginPage.clickLoginButton()
});

Then(/^should get the error message for password as "([^"]*)"$/, async (message: string) => {
    await loginPage.verifyPasswordRequiredMessage(message)
});

Then(/^should get the error message for username as "([^"]*)"$/, async (message: string) => {
    await loginPage.verifyUsernameRequiredMessage(message)
});

Then(/^should get the error message for both as "([^"]*)"$/, async (message: string) => {
    await loginPage.verifyBothRequiredMessage(message)
});

Then(/^should get the error message for invalid credentials as "([^"]*)"$/, async (message: string) => {
    await loginPage.verifyAlertMessage(message)
});

When(/^click on forget password link$/, async () => {
    await loginPage.clickForgotPasswordLink()
});

When(/^verify the reset password page$/, async () => {
    await loginPage.verifyResetPasswordTitle()
});

When(/^enters the details as "([^"]*)"$/, async (username: string) => {
    await loginPage.enterUsernameForReset(username)
});

When(/^click on reset password button$/, async () => {
    await loginPage.clickResetButton()
});

Then(/^verify the success reset message$/, async () => {
    await loginPage.verifyResetPasswordSuccessTitle()
});

Then(/^click on cancel button$/, async () => {
    await loginPage.clickCancelButton()
});

Given(/^login with valid credentials as "([^"]*)" and "([^"]*)"$/, async(username: string, password: string) => {
    await loginPage.loginWithValidCredentials(username, password)
});