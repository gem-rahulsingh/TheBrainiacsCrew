import { clickOn, getElementText, sizeOf, typeText, verifyAttributeContains, verifyEquals } from "../../utils/actionUtils"
import { FILTER_NO_RECORD, FILTER_PAGE_TITLE } from "../constants/constants"

class EmployeePage {

    /** Page Locators */
    private get button_addEmployee(): Promise<WebdriverIO.Element> {
        return $("//li/a[text()='Add Employee']")
    }

    private get button_visited_addEmployee(): Promise<WebdriverIO.Element> {
        return $("//li/a[text()='Add Employee']//parent::li")
    }

    private get button_employeeList(): Promise<WebdriverIO.Element> {
        return $("//li/a[text()='Employee List']")
    }

    private get button_visited_employeeList(): Promise<WebdriverIO.Element> {
        return $("//li/a[text()='Employee List']//parent::li")
    }

    private get input_firstName(): Promise<WebdriverIO.Element> {
        return $("//input[@name='firstName']")
    }

    private get input_middleName(): Promise<WebdriverIO.Element> {
        return $("//input[@name='middleName']")
    }

    private get input_lastName(): Promise<WebdriverIO.Element> {
        return $("//input[@name='lastName']")
    }

    private get input_employeeId(): Promise<WebdriverIO.Element> {
        return $("//div[@class='orangehrm-employee-form']/div/div[2]//input")
    }

    private get button_save(): Promise<WebdriverIO.Element> {
        return $("//button[text()=' Save ']")
    }

    private get button_cancel(): Promise<WebdriverIO.Element> {
        return $("//button[text()=' Cancel ']")
    }

    private get toast_message(): Promise<WebdriverIO.Element> {
        return $("//p[contains(@class,'toast-message')]")
    }

    private get label_required(): Promise<WebdriverIO.ElementArray> {
        return $$("//span[contains(@class,'error-message')]")
    }

    private get label_filterHeader(): Promise<WebdriverIO.Element> {
        return $("//h5[contains(@class,'filter-title')]")
    }

    private get input_filterEmployeeName(): Promise<WebdriverIO.Element> {
        return $("(//div[contains(@class,'table-filter-area')]//input)[1]")
    }

    private get input_filterEmployeeId(): Promise<WebdriverIO.Element> {
        return $("(//div[contains(@class,'table-filter-area')]//input)[2]")
    }

    private get select_filterEmploymentStatus(): Promise<WebdriverIO.Element> {
        return $("(//div[contains(@class,'table-filter-area')]//div[contains(@class,'select-wrapper')])[1]")
    }

    private get select_filterInclude(): Promise<WebdriverIO.Element> {
        return $("(//div[contains(@class,'table-filter-area')]//div[contains(@class,'select-wrapper')])[2]")
    }

    private get input_filterSupervisorName(): Promise<WebdriverIO.Element> {
        return $("(//div[contains(@class,'table-filter-area')]//input)[3]")
    }

    private get select_filterJobTitle(): Promise<WebdriverIO.Element> {
        return $("(//div[contains(@class,'table-filter-area')]//div[contains(@class,'select-wrapper')])[3]")
    }

    private get select_filterSubUnit(): Promise<WebdriverIO.Element> {
        return $("(//div[contains(@class,'table-filter-area')]//div[contains(@class,'select-wrapper')])[4]")
    }

    private get button_filterSearch(): Promise<WebdriverIO.Element> {
        return $("//button[text()=' Search ']")
    }

    private get button_filterReset(): Promise<WebdriverIO.Element> {
        return $("//button[text()=' Reset ']")
    }

    private get label_filterResultHeader(): Promise<WebdriverIO.Element> {
        return $("//div[contains(@class,'orangehrm-vertical')]/span")
    }

    private get table_filterRow(): Promise<WebdriverIO.ElementArray> {
        return $$("//div[@class='oxd-table-card']")
    }

    private get table_filterCell(): Promise<WebdriverIO.ElementArray> {
        return $$("//div[contains(@class,'table-cell')]")
    }

    private get options_selectFilter(): Promise<WebdriverIO.ElementArray> {
        return $$("//div[@role='listbox']/div/span")
    }

    private get button_listPagination(): Promise<WebdriverIO.ElementArray> {
        return $$("//button[contains(@class,'pagination')]")
    }

    /** Page Actions */
    async clickAddEmployeeOption() {
        await clickOn(this.button_addEmployee, "Add Employee")
        await verifyAttributeContains(this.button_visited_addEmployee, "class", "visited")
    }

    async clickEmployeeListOption() {
        await clickOn(this.button_employeeList, "Add Employee")
        await verifyAttributeContains(this.button_visited_employeeList, "class", "visited")
    }

    async fillEmployeeName(firstName: string, middleName: string, lastName: string) {
        await typeText(this.input_firstName, firstName, "FirstName")
        await typeText(this.input_middleName, middleName, "MiddleName")
        await typeText(this.input_lastName, lastName, "LastName")
    }

    async fillEmployeeId(employeeId: string) {
        await typeText(this.input_employeeId, employeeId, "EmployeeId")
    }

    async clickSaveButton() {
        await clickOn(this.button_save, "Save")
    }

    async clickCancelButton() {
        await clickOn(this.button_cancel, "Cancel")
    }

    async verifyNotificationMessage(message: string) {
        await browser.pause(1000)
        await verifyEquals(await getElementText(this.toast_message), message, "Notification Message")
    }

    async verifyFirstNameRequiredMessage(message: string) {
        await verifyEquals(await getElementText(this.label_required[0]), message, "Required Message")
    }

    async verifyLastNameRequiredMessage(message: string) {
        await verifyEquals(await getElementText(this.label_required[0]), message, "Required Message")
    }

    async verifyBothRequiredMessage(message: string) {
        await verifyEquals(await getElementText(this.label_required[0]), message, "Required Message")
        await verifyEquals(await getElementText(this.label_required[1]), message, "Required Message")
    }

    async navigateToEmployeeListPage() {
        await verifyAttributeContains(this.button_visited_employeeList, "class", "visited")
    }

    async verifyEmployeeListFilter() {
        await verifyEquals(await getElementText(this.label_filterHeader), FILTER_PAGE_TITLE, "Filter Title")
    }

    async enterEmployeeIdForSearch(employeeId: string) {
        await typeText(this.input_filterEmployeeId, employeeId, "Employee Id")
    }

    async enterEmployeeNameForSearch(employeeName: string) {
        await typeText(this.input_filterEmployeeName, employeeName, "Employee Name")
    }

    async selectEmploymentStatusForSearch(employmentStatus: string) {
        // TODO - implement later
        await typeText(this.select_filterEmploymentStatus, employmentStatus, "Employment Status")
    }

    async selectIncludeForSearch(include: string) {
        // TODO - implement later
        await typeText(this.select_filterInclude, include, "Include")
    }

    async enterSupervisorNameForSearch(supervisorName: string) {
        await typeText(this.input_filterSupervisorName, supervisorName, "Supervisor Name")
    }

    async selectJobTitleForSearch(jobTitle: string) {
        // TODO - implement later
        await typeText(this.select_filterJobTitle, jobTitle, "Job Title")
    }

    async selectSubUnitForSearch(subUnit: string) {
        // TODO - implement later
        await typeText(this.select_filterSubUnit, subUnit, "Sub Unit")
    }

    async enterFilterValuesTosearch(employeeName: string, employeeId: string, employeeStatus: string, include: string, supervisorName: string, jobTitle: string, subUnit: string) {
        if (employeeName !== "")
            await this.enterEmployeeNameForSearch(employeeName)
        if (employeeId !== "")
            await this.enterEmployeeIdForSearch(employeeId)   
        if (employeeStatus !== "")
            await this.selectEmploymentStatusForSearch(employeeStatus)
        if (include !== "")
            await this.selectIncludeForSearch(include)
        if (supervisorName !== "")
            await this.enterSupervisorNameForSearch(supervisorName)
        if (jobTitle !== "")
            await this.selectJobTitleForSearch(jobTitle)
        if (subUnit !== "")
            await this.selectSubUnitForSearch(subUnit)                 
    }

    async clickFilterSearchButton() {
        await clickOn(this.button_filterSearch, "Search")
    }

    async clickFilterResetButton() {
        await clickOn(this.button_filterReset, "Reset")
    }

    async getFilterSearchCount(): Promise<string> {
        let text: string = await getElementText(this.label_filterResultHeader)
        return text === FILTER_NO_RECORD ? "0" : text.substring(1, text.indexOf(")"))
    }

    async verifySearchCount() {
        let count: number = Number(this.getFilterSearchCount())
        let page: number = await sizeOf(this.button_listPagination)
        console.log("Records found - " + count)
        if (page > 1)
            count = 50
        await verifyEquals(count, await sizeOf(this.table_filterRow), "Table Rows Count")
    }

    async verifySearchResultUsingEmployeeId() {
        if (await this.getFilterSearchCount() === "0") {
            await verifyEquals(await getElementText(this.label_filterResultHeader), FILTER_NO_RECORD, "Filter Restult Header")
        } else {
            let cells: Promise<WebdriverIO.ElementArray> = this.table_filterCell
            let size: number = await sizeOf(cells)
            let start: number = 1

            for (let index: number = start; index < size; index = index + 10) {
                let actual: string = await getElementText(cells[index])
                console.log("Find EmpId - " + actual);
            }
        }
    }
}
export default new EmployeePage();