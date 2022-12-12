@us03
Feature: US03 - Orange HRM Add Employee

    @tc13
    Scenario Outline: TC13 - Add Employee with empty middle name
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
            | Admin    | admin123 | First03   |            | Last03   | FML03      | Successfully Saved |