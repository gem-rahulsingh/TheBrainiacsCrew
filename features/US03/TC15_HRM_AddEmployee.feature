@us03
Feature: US03 - Orange HRM Add Employee

    @tc15
    Scenario Outline: TC15 - Add Employee with empty first name, middle name and last name
        Given launch the application
        And login with valid credentials as "<username>" and "<password>"
        When navigate to PIM section
        And select Add Employee option
        Then enter the employee details as "<firstName>" "<middleName>" and "<lastName>"
        And click on save button to add
        And should get the error messages for firstName and lastName as "<error_message>"

        Examples:
            | username | password | firstName | middleName | lastName | error_message |
            | Admin    | admin123 |           |            |          | Required      |