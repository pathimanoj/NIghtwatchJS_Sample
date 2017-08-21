const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')
const {
    randonNumber
} = require('../../page_objects/utils')


defineSupportCode(({Given, Then, When, After, Before, registerHandler}) => {

    // Before every feature instantiate the client session - open the browser
    // client - browser object
    Before(function (scenario) {
        return client.init()
    });

    Given(/^I am on the ONS Homepage$/, function () {
        return client
            .assert.containsText('body', 'A to Z of statistical bulletins')
            .waitForElementVisible('body', 1000)

    });

    When(/^I search for (.*) dataset$/, function (searchText) {
        this.homePage = client.page.homePage();
        return this.homePage.searchWithText(searchText);
    });

    When(/^I select (.*) dataset from search results$/, function (searchText) {
        this.searchResultsPage = client.page.searchResultsPage();
        return this.searchResultsPage.selectSearchResult(searchText);

    });

    Then(/^I should be on the CPI dataset landing page$/, function () {

        this.dataSetPage = client.page.dataSetPage();
        return this.dataSetPage.verifyDatasetTitle();
    })


    //After every feature, end the client session - close the browser
    After(function (scenario) {
        return client.end();
    });

})

