Feature: Update a product
    As an admin
    I should be able to update a product

    Scenario: Update a product
        Given I go to "http://localhost:3004"
        When I insert text "Hand Spinner" in search input
        And I click button "update" to choose a product
        And I insert text "Finalement, la mode est passée, n'achete pas !" in description input
        And I click button "update" to update
        Then I should be able go to "http://localhost:3004/#!/"
