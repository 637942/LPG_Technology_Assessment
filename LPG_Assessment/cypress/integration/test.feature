Feature: Validations in All-Inclusive Page

  Scenario: Adding all-inclusive pass and checkout
    Given I am in the Boston All inclusive page
    Then I should see the choose all-inclusive pass section with header text "Choose your All-Inclusive pass"
    And I should see the checkout button is disabled
    When I select the pass from the dropdown
    And I select the Number of adults
    And I select the number of child
    Then I should see checkout button is enabled
    And I should see the cart icon with counter value equal to the No of persons selected
    When I click on checkout
    Then I see review page should be displayed

  Scenario: Validating the Attractions using the Filters and sort
    Given I am in the Boston All inclusive page
    Then I should see the Boston attractions list
    When I click on See all Attractions
    Then I should see all the attractions in the page
    When I click on Filter
    And I select the "Most Popular" from the dropdown
    Then I should see the filtered attractions list in the page
    When I click on Sort
    And I select the "Z-A" from the list
    Then I should see the sorted list of attractions in the page
    When I click on Quick view in any of the item
    Then I should see the popup  window with details about the selected attraction

  Scenario: Secondary Menu Navigations
    Given I am in the Boston All inclusive page
    When I click on any link in the secondary menu
    Then I should able see the relevant Page for the selected item


  Scenario: Validations in signup sections with invalid email address
    Given I am in the Boston All inclusive page
    When I enter the invalid email address
    And I Click on submit
    Then I should get an error message at the bottom of the email text box

  Scenario: Validations in signup sections with valid email address
    Given I am in the Boston All inclusive page
    When I enter valid email address
    And I click on submit without selecting the privacy policy checkbox
    Then I should see an error message "Confirmation checkbox is required"
    
  Scenario: Verification of signup process with valid email address
    Given I am in the Boston All inclusive page
    When I enter valid email address
    When I check the checkbox with privacy policy
    And I Click on submit
    Then I should see the popup window







