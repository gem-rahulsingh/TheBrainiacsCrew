@us03
Feature: US03 - Orange HRM Add Employee

    @tc11
    Scenario Outline: TC11 - Add Employee with Valid Details
        Given launch the application
        And login with valid credentials as "<username>" and "<password>"
        When navigate to PIM section
        And select Add Employee option
        Then enter the employee details as "<firstName>" "<middleName>" and "<lastName>"
        And enter the employee ID as "<employeeId>"
        And click on save button to add
        And should display the notification with message "<success_message>"

        Examples:
            | username | password | firstName | middleName | lastName | employeeId | success_message    |
            | Admin    | admin123 | First01   | Middle01   | Last01   | FML01      | Successfully Saved |