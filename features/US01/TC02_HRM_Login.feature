@us01
Feature: US01 - Orange HRM Login

  @tc02
  Scenario Outline: TC02 - Login with empty password
    Given launch the application
    And verify the login page
    When enters the credentials as "<username>" and "<password>"
    And clicks on login button
    Then should get the error message for password as "<error_message>"

    Examples:
      | username | password | error_message |
      | Admin    |          | Required      |