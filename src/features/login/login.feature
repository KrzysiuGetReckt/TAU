Feature: Login
    As a user I want to be able to login to my account and access my account details.
    
    Scenario Outline: Attempting to login with valid credensials;
        Given the browser is at the "Login" page
        And the user is not logged in
        When the user tries to use "valid" credentials, "<email>" to login
        Then the title of the page should be "My account - My Shop"

        @test
        Examples:
            |email                              |
            |cucumberautomation_test@gmail.com  |

        @dev
        Examples:
            |email                              |
            |cucumberautomation_dev@gmail.com   |
        
        @int
        Examples:
            |email                              |
            |cucumberautomation_int@gmail.com   |

    @regression
    Scenario Outline: Attempting to login with valid email and invalid password;
        Given the browser is at the "Login" page
        And the user is not logged in
        When the user tries to use "invalid" credentials, "<email>" to login
        Then a alert is shown with the message "<Error>"

        Examples:
            |email                              | Error                             |
            |cucumberautomation_test@gmail.com  | Authentication failed.            |
            |Invalid1234                        | Invalid email address.            |
            |                                   | An email address required.        |