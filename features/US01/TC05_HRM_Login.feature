@us01
Feature: US01 - Orange HRM Login

  @tc05
  Scenario Outline: TC05 - Login with invalid password
    Given launch the application
    And verify the login page
    When enters the credentials as "<username>" and "<password>"
    And clicks on login button
    Then should get the error message for invalid credentials as "<error_message>"

    Examples:
      | username | password | error_message       |
      | Admin    | admin    | Invalid credentials |