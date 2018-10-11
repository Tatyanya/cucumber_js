Feature: Main functionality

  Background:
    Given I Enable protractor synchronization
    When I wait 5 seconds

  Scenario: Verify Rooms Tab hover by mouse over
    Then Element "HomePage > RoomsHover" should be invisible
    When I hover mouse over "HomePage > RoomsTab"
    Then Element "HomePage > RoomsHover" should be visible

  Scenario: Verify Scroll to Itunes icon
    Then "HomePage > ItunesIcon" element should not be in viewport
    When I scroll to the "HomePage > ItunesIcon" element
    Then "HomePage > ItunesIcon" element should be in viewport
