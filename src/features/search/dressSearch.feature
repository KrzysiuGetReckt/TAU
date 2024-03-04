
Feature: Dress Search

    As a user, I want to search for a particular dress type so I can buy one.

    Background: 
        Given the browser is at the "Home" page
        And the title of the page should be "My Shop"

    Scenario Outline: Search for a type that does not exist
        When the user searches for "floral"
        Then a no results error message is shown
        And no product is shown

    Scenario Outline: Searh for a type that exists
        When the user searches for "printed"
        Then product is shown
        And the product results is related to "printed"