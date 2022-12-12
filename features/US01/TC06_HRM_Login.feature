@us01
Feature: US01 - Orange HRM Login

  @tc06
  Scenario Outline: TC06 - Login with invalid username
    Given launch the application
    And verify the login page
    When enters the credentials as "<username>" and "<password>"
    And clicks on login button
    Then should get the error message for invalid credentials as "<error_message>"

    Examples:
      | username | password | error_message       |
      | Admin123 | admin123 | Invalid credentials |