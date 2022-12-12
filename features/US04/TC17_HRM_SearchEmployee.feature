@us04
Feature: US04 - Orange HRM Search Employee

    @tc17
    Scenario Outline: TC17 - Search Employee using Emp Id
        Given launch the application
        And login with valid credentials as "<username>" and "<password>"
        When navigate to PIM section
        And select Employee List option
        And verify the Employee List filter
        Then enter the employee ID as "<employeeId>" in employee information section
        And click on search button to search
        And should display the search result

        Examples:
            | username | password | employeeId |
            | Admin    | admin123 | 0002       |