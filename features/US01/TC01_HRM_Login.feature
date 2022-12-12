@us01
Feature: US01 - Orange HRM Login

  @tc01
  Scenario Outline: TC01 - Login with valid credentials
    Given launch the application
    And verify the login page
    When enters the credentials as "<username>" and "<password>"
    And clicks on login button
    Then verify the dashboard page

    Examples:
      | username | password |
      | Admin    | admin123 |