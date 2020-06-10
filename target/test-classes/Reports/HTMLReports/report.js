$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/AdactinWebsite.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Adactin Login Page",
  "description": "",
  "id": "verify-adactin-login-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "To verify user able to login in Adactin website",
  "description": "",
  "id": "verify-adactin-login-page;to-verify-user-able-to-login-in-adactin-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on the Adactin Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"Standard",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User logged in and verify welcome message",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "verify-adactin-login-page;to-verify-user-able-to-login-in-adactin-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "verify-adactin-login-page;to-verify-user-able-to-login-in-adactin-website;;1"
    },
    {
      "cells": [
        "Testaarthiramky5555",
        "test@1234"
      ],
      "line": 11,
      "id": "verify-adactin-login-page;to-verify-user-able-to-login-in-adactin-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "To verify user able to login in Adactin website",
  "description": "",
  "id": "verify-adactin-login-page;to-verify-user-able-to-login-in-adactin-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on the Adactin Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"Testaarthiramky5555\" and \"test@1234\"Standard",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User logged in and verify welcome message",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinLoginPageStep.user_is_on_the_Adactin_Login_Page()"
});
formatter.result({
  "duration": 46533712491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testaarthiramky5555",
      "offset": 13
    },
    {
      "val": "test@1234",
      "offset": 39
    }
  ],
  "location": "AdactinLoginPageStep.user_enters_and_Standard(String,String)"
});
formatter.result({
  "duration": 675302516,
  "status": "passed"
});
formatter.match({
  "location": "AdactinLoginPageStep.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3021650149,
  "status": "passed"
});
formatter.match({
  "location": "AdactinLoginPageStep.user_logged_in_and_verify_welcome_message()"
});
formatter.result({
  "duration": 25525566,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Verify user selects the details and navigates to Search result page",
  "description": "",
  "id": "verify-adactin-login-page;verify-user-selects-the-details-and-navigates-to-search-result-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User is on the Search Hotel Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User selects \"\u003clocation\u003e\", \"\u003chotel\u003e\", \"\u003croomtype\u003e\", \"\u003cnoOfRooms\u003e\", \"\u003cadultsPerRoom\u003e\" and \"\u003cchildrenPerRoom\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Search Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User navigates to Select User Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User selects from the search result",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User navigates to Book a Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "verify-adactin-login-page;verify-user-selects-the-details-and-navigates-to-search-result-page;",
  "rows": [
    {
      "cells": [
        "location",
        "hotel",
        "roomtype",
        "noOfRooms",
        "adultsPerRoom",
        "childrenPerRoom"
      ],
      "line": 23,
      "id": "verify-adactin-login-page;verify-user-selects-the-details-and-navigates-to-search-result-page;;1"
    },
    {
      "cells": [
        "Sydney",
        "Hotel Sunshine",
        "Standard",
        "1",
        "2",
        "1"
      ],
      "line": 24,
      "id": "verify-adactin-login-page;verify-user-selects-the-details-and-navigates-to-search-result-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Verify user selects the details and navigates to Search result page",
  "description": "",
  "id": "verify-adactin-login-page;verify-user-selects-the-details-and-navigates-to-search-result-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User is on the Search Hotel Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User selects \"Sydney\", \"Hotel Sunshine\", \"Standard\", \"1\", \"2\" and \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Search Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User navigates to Select User Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User selects from the search result",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User navigates to Book a Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinSearchPageStep.user_is_on_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 304558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 14
    },
    {
      "val": "Hotel Sunshine",
      "offset": 24
    },
    {
      "val": "Standard",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 54
    },
    {
      "val": "2",
      "offset": 59
    },
    {
      "val": "1",
      "offset": 67
    }
  ],
  "location": "AdactinSearchPageStep.user_selects_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1063172718,
  "status": "passed"
});
formatter.match({
  "location": "AdactinSearchPageStep.user_clicks_on_Search_Page()"
});
formatter.result({
  "duration": 1401041059,
  "status": "passed"
});
formatter.match({
  "location": "AdactinSearchPageStep.user_navigates_to_Select_User_Page()"
});
formatter.result({
  "duration": 173239,
  "status": "passed"
});
formatter.match({
  "location": "AdactinSearchPageStep.user_selects_from_the_search_result()"
});
formatter.result({
  "duration": 151708028,
  "status": "passed"
});
formatter.match({
  "location": "AdactinSearchPageStep.user_clicks_on_Continue_button()"
});
formatter.result({
  "duration": 1324653854,
  "status": "passed"
});
formatter.match({
  "location": "AdactinSearchPageStep.user_navigates_to_Book_a_Hotel_Page()"
});
formatter.result({
  "duration": 169817,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "",
  "description": "",
  "id": "verify-adactin-login-page;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "User is on the Book Hotel Page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User enters or selects \"\u003cfirstname\u003e\", \"\u003clastname\u003e\", \"\u003cbillingAddress\u003e\", \"\u003ccreditCardNo\u003e\",\"\u003ccreditCardType\u003e\",\"\u003cExpiryMonth\u003e\", \"\u003cExpiryYear\u003e\" and \"\u003ccvvNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User clicks on Book Now button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User navigates to Booking Confirmation Page and OrderID is generated",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "verify-adactin-login-page;;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "billingAddress",
        "creditCardNo",
        "creditCardType",
        "ExpiryMonth",
        "ExpiryYear",
        "cvvNumber"
      ],
      "line": 33,
      "id": "verify-adactin-login-page;;;1"
    },
    {
      "cells": [
        "Aarthi",
        "Vinod",
        "C33 TVH Rozalia",
        "2345678909875432",
        "VISA",
        "March",
        "2022",
        "6754"
      ],
      "line": 34,
      "id": "verify-adactin-login-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "",
  "description": "",
  "id": "verify-adactin-login-page;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "User is on the Book Hotel Page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User enters or selects \"Aarthi\", \"Vinod\", \"C33 TVH Rozalia\", \"2345678909875432\",\"VISA\",\"March\", \"2022\" and \"6754\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User clicks on Book Now button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User navigates to Booking Confirmation Page and OrderID is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinBookingPageStep.user_is_on_the_Book_Hotel_Page()"
});
formatter.result({
  "duration": 515012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aarthi",
      "offset": 24
    },
    {
      "val": "Vinod",
      "offset": 34
    },
    {
      "val": "C33 TVH Rozalia",
      "offset": 43
    },
    {
      "val": "2345678909875432",
      "offset": 62
    },
    {
      "val": "VISA",
      "offset": 81
    },
    {
      "val": "March",
      "offset": 88
    },
    {
      "val": "2022",
      "offset": 97
    },
    {
      "val": "6754",
      "offset": 108
    }
  ],
  "location": "AdactinBookingPageStep.user_enters_or_selects_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1924039262,
  "status": "passed"
});
formatter.match({
  "location": "AdactinBookingPageStep.user_clicks_on_Book_Now_button()"
});
formatter.result({
  "duration": 5127144472,
  "status": "passed"
});
formatter.match({
  "location": "AdactinBookingPageStep.user_navigates_to_Booking_Confirmation_Page_and_OrderID_is_generated()"
});
formatter.result({
  "duration": 1308841640,
  "status": "passed"
});
});