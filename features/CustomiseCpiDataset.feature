Feature: Customise CPI dataset

  @cpi
  Scenario: Navigate to the CPI dataset page

    Given I am on the ONS Homepage
    When I search for CPI dataset
    And I select CPI dataset from search results
    Then I should be on the CPI dataset landing page