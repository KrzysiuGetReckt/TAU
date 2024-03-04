
Feature: Menu Navigation

    As a user, I want to be able to navigate through the site using the menu links to various pages.

    Scenario Outline: Navigating through the main menu options from the home page
        Given the browser is at the "Home" page
        And the title of the page should be "My Shop"
        When  the user clicks on the "<menuOption>" menu option in the menu
        Then  the title of the page should be "<pageTitle>"
    
    Examples: 
        | menuOption    | pageTitle             |
        | Women         | Women - My Shop       |
        | Dresses       | Dresses - My Shop     |
        | T-shirts      | T-shirts - My Shop    |
        