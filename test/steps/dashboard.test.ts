import { Then, When } from "@wdio/cucumber-framework";
import { DASHBOARD_PAGE_TITLE, PIM_PAGE_TITLE } from "../constants/constants";
import dashboardPage from "../pages/dashboard.page";

Then(/^verify the dashboard page$/, async () => {
    await dashboardPage.verifyPageHeader(DASHBOARD_PAGE_TITLE)
    console.log("Verifying page");
    
});

When(/^navigate to PIM section$/, async() => {
    await dashboardPage.selectSectionPIM();
    await dashboardPage.verifyPageHeader(PIM_PAGE_TITLE)
});