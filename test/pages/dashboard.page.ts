import { clickOn, getElementText, verifyEquals } from "../../utils/actionUtils"


class DashboardPage {

    /** Page Locators */
    private get label_pageHeader(): Promise<WebdriverIO.Element> {
        return $("//h6[contains(@class,'header')]")
    }

    private get menu_PIM(): Promise<WebdriverIO.Element> {
        return $("//a[@class='oxd-main-menu-item']/span[text()='PIM']")
    }

    /** Page Actions */
    async verifyPageHeader(header: string){
        await verifyEquals(await getElementText(this.label_pageHeader), header, "Dashboard Page Header")
    }

    async selectSectionPIM() {
        await clickOn(this.menu_PIM, "PIM")
    }
}

export default new DashboardPage()