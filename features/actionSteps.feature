Feature: ssome tests

  Background:
    Given I Enable protractor synchronization
    When I wait 5 seconds

  @smoke
  Scenario: Verify HOME page
    When I should be on "Home" page

  Scenario: Verify Travels Extras list
    When I click "MainMenu > PlanMenu" element
    Then Element "MainMenu > DropDowngMenu" should be visible
    Then TRAVEL EXTRAS list "MainMenu > DropDownColumnTravelExtras" contains values:
      | Bags Made Simple        |
      | Car hire                |
      | Ryanair Rooms           |
      | Fast Track              |
      | Travel Insurance        |
      | Gift Vouchers           |
      | Holidays                |
      | Parking                 |
      | Priority & 2 Cabin Bags |
      | Ryanair Tickets         |
      | Seats                   |
      | Transfers               |
    Then EXPLORE list "MainMenu > DropDownColumnExplore" contains values:
      | Search for flights   |
      | Search Ryanair Rooms |
      | Fare Finder          |
      | Route map            |
      | Destinations         |
      | Try Somewhere New    |

  @smoke
  Scenario Outline: Verify Main Menu count of items in list
    When I click "MainMenu > PlanMenu" element
    And Count of "MainMenu > <Dropdown Items>" elements should be equal "<Number of Items>"
    Examples:
      | Dropdown Items             | Number of Items |
      | DropDownColumnTravelExtras | 12              |
      | DropDownColumnExplore      | 6               |

  Scenario Outline: Verify header
    When I click "MainMenu > PlanMenu" element
    Then Element "MainMenu > <Dropdown Items>" should be clickable
    When I click "MainMenu > <Dropdown Items>" element
    Examples:
      | Dropdown Items |
      | FireFinderLink |
      | PlusLink       |

