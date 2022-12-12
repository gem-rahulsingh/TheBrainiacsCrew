@us02
Feature: US02 - Orange HRM Forget Password

    @tc07
    Scenario Outline: TC07 - Forget password with valid username
        Given launch the application
        And verify the login page
        When click on forget password link
        And verify the reset password page
        And enters the details as "<username>"
        And click on reset password button
        Then verify the success reset message

        Examples:
            | username |
            | Admin    |