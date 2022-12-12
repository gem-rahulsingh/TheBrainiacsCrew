@us02
Feature: US02 - Orange HRM Forget Password

    @tc10
    Scenario: TC10 - Forget password cancel button
        Given launch the application
        And verify the login page
        When click on forget password link
        And verify the reset password page
        Then click on cancel button
        And verify the login page