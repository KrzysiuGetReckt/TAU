Feature: Google searching

Scenario: Search from the search bar produces correct links
    Given A web browser is at the Google home page
    When The user enters "Cucumber" into the search bar
    Then Links related to "Cucumber" are shown on the results page