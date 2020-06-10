Feature: Verify Adactin Login Page

  Scenario Outline: To verify user able to login in Adactin website
    Given User is on the Adactin Login Page
    When User enters "<username>" and "<password>"Standard
    And User clicks on Login button
    Then User logged in and verify welcome message

    Examples: 
      | username            | password  |
      | Testaarthiramky5555 | test@1234 |

  Scenario Outline: Verify user selects the details and navigates to Search result page
    Given User is on the Search Hotel Page
    When User selects "<location>", "<hotel>", "<roomtype>", "<noOfRooms>", "<adultsPerRoom>" and "<childrenPerRoom>"
    And User clicks on Search Page
    Then User navigates to Select User Page
    When User selects from the search result
    And User clicks on Continue button
    Then User navigates to Book a Hotel Page

    Examples: 
      | location | hotel          | roomtype | noOfRooms | adultsPerRoom | childrenPerRoom |
      | Sydney   | Hotel Sunshine | Standard |         1 |             2 |               1 |

  Scenario Outline: 
    Given User is on the Book Hotel Page
    When User enters or selects "<firstname>", "<lastname>", "<billingAddress>", "<creditCardNo>","<creditCardType>","<ExpiryMonth>", "<ExpiryYear>" and "<cvvNumber>"
    And User clicks on Book Now button
    Then User navigates to Booking Confirmation Page and OrderID is generated

    Examples: 
      | firstname | lastname | billingAddress  | creditCardNo     | creditCardType | ExpiryMonth | ExpiryYear | cvvNumber |
      | Aarthi    | Vinod    | C33 TVH Rozalia | 2345678909875432 | VISA           | March       |       2022 |      6754 |
