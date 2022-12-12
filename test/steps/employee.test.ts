import { Given, When, Then } from "@wdio/cucumber-framework";
import { FILTER_NO_RECORD } from "../constants/constants";
import employeePage from "../pages/employee.page";

When(/^select Add Employee option$/, async () => {
    await employeePage.clickAddEmployeeOption()
});

Then(/^enter the employee details as "([^"]*)" "([^"]*)" and "([^"]*)"$/, async (firstName: string, middleName: string, lastname: string) => {
    await employeePage.fillEmployeeName(firstName, middleName, lastname)
});

Then(/^enter the employee ID as "([^"]*)"$/, async (employeeId: string) => {
    await employeePage.fillEmployeeId(employeeId)
});

Then(/^click on save button to add$/, async () => {
    await employeePage.clickSaveButton()
});

Then(/^should display the notification with message "([^"]*)"$/, async (message: string) => {
    await employeePage.verifyNotificationMessage(message)
});

Then(/^should get the error message for firstName as "([^"]*)"$/, async (message: string) => {
    await employeePage.verifyFirstNameRequiredMessage(message)
});

Then(/^should get the error message for lastName as "([^"]*)"$/, async (message: string) => {
    await employeePage.verifyLastNameRequiredMessage(message)
});

Then(/^should get the error messages for firstName and lastName as "([^"]*)"$/, async (message: string) => {
    await employeePage.verifyBothRequiredMessage(message)
});

Then(/^click on cancel button to cancel$/, async () => {
    await employeePage.clickCancelButton()
});

Then(/^should navigate to Employee List Page$/, async () => {
    await employeePage.navigateToEmployeeListPage()
});

When(/^select Employee List option$/, async () => {
    await employeePage.clickEmployeeListOption()
});

When(/^verify the Employee List filter$/, async () => {
    await employeePage.verifyEmployeeListFilter()
});

Then(/^enter the employee ID as "([^"]*)" in employee information section$/, async (employeeId: string) => {
    await employeePage.enterEmployeeIdForSearch(employeeId)
});

Then(/^enter the search value  as "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" in employee information section$/, async (employeeName: string, employeeId: string, employeeStatus: string, include: string, supervisorName: string, jobTitle: string, subUnit: string) => {
    await employeePage.enterFilterValuesTosearch(employeeName, employeeId, employeeStatus, include, supervisorName, jobTitle, subUnit)
});


Then(/^click on search button to search$/, async () => {
    await employeePage.clickFilterSearchButton()
});

Then(/^should display the search result$/, async () => {
    await employeePage.verifySearchResultUsingEmployeeId()
});


Then(/^verify notification if no record found$/, async () => {
    await employeePage.verifyNotificationMessage(FILTER_NO_RECORD)
});
