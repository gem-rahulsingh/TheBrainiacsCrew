import { clickOn, getElementText, open, typeText, verifyEquals, verifyTitle } from "../../utils/actionUtils"
import { FORGOT_PASSWORD_PAGE_TITLE, FORGOT_PASSWORD_SUCCESS_PAGE_TITLE, LOGIN_PAGE_TITLE, PAGE_TITLE } from "../constants/constants"

class LoginPage {

    /** Page Locators */
    private get label_loginTitle(): Promise<WebdriverIO.Element> {
        return $("//h5[contains(@class,'login-title')]")
    }

    private get input_username(): Promise<WebdriverIO.Element> {
        return $("//input[@name='username']")
    }

    private get input_password(): Promise<WebdriverIO.Element> {
        return $("//input[@name='password']")
    }

    private get button_login(): Promise<WebdriverIO.Element> {
        return $("//button[contains(@class,'login-button')]")
    }

    private get label_required(): Promise<WebdriverIO.ElementArray> {
        return $$("//span[contains(@class,'error-message')]")
    }

    private get alert_invalidCredentials(): Promise<WebdriverIO.Element> {
        return $("//p[contains(@class,'alert')]")
    }

    private get link_forgetPassword(): Promise<WebdriverIO.Element> {
        return $(".orangehrm-login-forgot")
    }

    private get label_forgetPasswordTitle(): Promise<WebdriverIO.Element> {
        return $("//h6[contains(@class,'forgot-password-title')]")
    }

    private get input_resetPageUsername(): Promise<WebdriverIO.Element> {
        return $("//input[@name='username']")
    }

    private get button_cancelPassword(): Promise<WebdriverIO.Element> {
        return $("//button[contains(@class,'cancel')]")
    }

    private get button_resetPassword(): Promise<WebdriverIO.Element> {
        return $("//button[contains(@class,'reset')]")
    }

    private get label_successForgetPasswordTitle(): Promise<WebdriverIO.Element> {
        return $("//h6[contains(@class,'forgot-password-title')]")
    }


    /** Page Actions */
    async launchApplication(){
        await open()
    }

    async verifyPageTitle() {
        await verifyTitle(PAGE_TITLE)
    }

    async verifyLoginTitle() {
        await verifyEquals(await getElementText(this.label_loginTitle), LOGIN_PAGE_TITLE, "Login Page Title")
    }

    async enterCredentials(username: string, password: string) {
        await typeText(this.input_username, username, "Username")
        await typeText(this.input_password, password, "Password")
    }

    async clickLoginButton() {
        await clickOn(this.button_login, "Login")
    }

    async verifyUsernameRequiredMessage(message: string) {
        await verifyEquals(await getElementText(this.label_required[0]), message, "Required Message")
    }

    async verifyPasswordRequiredMessage(message: string) {
        await verifyEquals(await getElementText(this.label_required[0]), message, "Required Message")
    }

    async verifyBothRequiredMessage(message: string) {
        await verifyEquals(await getElementText(this.label_required[0]), message, "Required Message")
        await verifyEquals(await getElementText(this.label_required[1]), message, "Required Message")
    }

    async verifyAlertMessage(message: string) {
        let alertMsg = await getElementText(this.alert_invalidCredentials)
        await verifyEquals(alertMsg, message, "Alert Message")
    }

    async clickForgotPasswordLink() {
        await clickOn(this.link_forgetPassword, "Forgot Password")
    }

    async verifyResetPasswordTitle() {
        await verifyEquals(await getElementText(this.label_forgetPasswordTitle), FORGOT_PASSWORD_PAGE_TITLE, "Forgot Password Title")
    }

    async verifyResetPasswordSuccessTitle() {
        await verifyEquals(await getElementText(this.label_successForgetPasswordTitle), FORGOT_PASSWORD_SUCCESS_PAGE_TITLE, "Success Forgot Password Title")
    }

    async enterUsernameForReset(username: string) {
        await typeText(this.input_resetPageUsername, username, "Username")
    }

    async clickResetButton() {
        await clickOn(this.button_resetPassword, "Reset")
    }

    async clickCancelButton() {
        await clickOn(this.button_cancelPassword, "Cancel")
    }

    async loginWithValidCredentials(username: string, password: string) {
        await this.verifyLoginTitle()
        await this.enterCredentials(username, password)
        await this.clickLoginButton()
    }

}
export default new LoginPage()