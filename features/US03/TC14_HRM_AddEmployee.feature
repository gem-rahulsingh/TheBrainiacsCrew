@us03
Feature: US03 - Orange HRM Add Employee

    @tc14
    Scenario Outline: TC14 - Add Employee with empty last name
        Given launch the application
        And login with valid credentials as "<username>" and "<password>"
        When navigate to PIM section
        And select Add Employee option
        Then enter the employee details as "<firstName>" "<middleName>" and "<lastName>"
        And enter the employee ID as "<employeeId>"
        And click on save button to add
        And should get the error message for lastName as "<error_message>"

        Examples:
            | username | password | firstName | middleName | lastName | employeeId | error_message |
            | Admin    | admin123 | First04   | Middle04   |          | FML04      | Required      |