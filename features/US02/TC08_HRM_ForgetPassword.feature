@us02
Feature: US02 - Orange HRM Forget Password

    @tc08
    Scenario Outline: TC08 - Forget password with invalid username
        Given launch the application
        And verify the login page
        When click on forget password link
        And verify the reset password page
        And enters the details as "<username>"
        And click on reset password button
        Then verify the success reset message

        Examples:
            | username |
            | Adminnn  |