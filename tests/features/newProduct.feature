Feature: Connect to administration
    As an admin
    I should be able to create a new product

    Scenario: Connect to administration
        Given I go to "http://localhost:3004"
        When I click button "addproduct" to add product
        And I insert text "Hand Spinner" in name input
        And I insert text "Ça tourne vite et c'est à la mode, qu'est-ce-que tu attends ? ACHETE !" in description input
        And I click category dropdown list "categories"
        And I choose a category option "category-option"
        And I click brand dropdown list "brands"
        And I choose a brand option "brand-option"
        And I click button "valid" to valid
        Then I should be able go to "http://localhost:3004/#!/"
