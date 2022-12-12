@us01
Feature: US01 - Orange HRM Login

  @tc04
  Scenario Outline: TC04 - Login with empty username and password
    Given launch the application
    And verify the login page
    When enters the credentials as "<username>" and "<password>"
    And clicks on login button
    Then should get the error message for both as "<error_message>"

    Examples:
      | username | password | error_message |
      |          |          | Required      |