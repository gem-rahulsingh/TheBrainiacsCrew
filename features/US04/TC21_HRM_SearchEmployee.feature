@us04
Feature: US04 - Orange HRM Search Employee

    @tc21
    Scenario Outline: TC21 - Search Employee Verify Notification
        Given launch the application
        And login with valid credentials as "<username>" and "<password>"
        When navigate to PIM section
        And select Employee List option
        And verify the Employee List filter
        Then enter the search value  as "<employeeName>" "<employeeId>" "<employmentStatus>" "<include>" "<supervisorName>" "<jobTitle>" "<subUnit>" in employee information section
        And click on search button to search
        And verify notification if no record found

        Examples:
            | username | password | employeeName | employeeId | employmentStatus | include | supervisorName | jobTitle | subUnit |
            | Admin    | admin123 | Name         | 1234       |                  |         |                |          |         |