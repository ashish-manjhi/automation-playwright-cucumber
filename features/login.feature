Feature: E2E Login

    @tc-0001
    Scenario: TC-0001 Test the login functionality
        Given I navigate to the login page
        When I am logged in as User
        Then I see successful login message