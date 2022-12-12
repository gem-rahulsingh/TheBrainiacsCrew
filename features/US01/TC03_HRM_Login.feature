@us01
Feature: US01 - Orange HRM Login

  @tc03
  Scenario Outline: TC03 - Login with empty username
    Given launch the application
    And verify the login page
    When enters the credentials as "<username>" and "<password>"
    And clicks on login button
    Then should get the error message for username as "<error_message>"

    Examples:
      | username | password | error_message |
      |          | admin123 | Required      |