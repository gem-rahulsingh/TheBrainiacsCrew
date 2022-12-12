@us03
Feature: US03 - Orange HRM Add Employee

  @tc16
  Scenario Outline: TC16 - Add Employee with cancel button
    Given launch the application
    And login with valid credentials as "<username>" and "<password>"
    When navigate to PIM section
    And select Add Employee option
    Then enter the employee details as "<firstName>" "<middleName>" and "<lastName>"
    And click on cancel button to cancel
    And should navigate to Employee List Page

    Examples:
      | username | password | firstName | middleName | lastName |
      | Admin    | admin123 | First     | Middle     | Last     |