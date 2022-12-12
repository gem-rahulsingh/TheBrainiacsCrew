@us02
Feature: US02 - Orange HRM Forget Password

    @tc09
    Scenario Outline: TC09 - Forget password without username
        Given launch the application
        And verify the login page
        When click on forget password link
        And verify the reset password page
        And click on reset password button
        Then should get the error message for username as "<error_message>"

        Examples:
            | error_message |
            | Required      |