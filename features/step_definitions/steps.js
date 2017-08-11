/**
 * Created by manojpathi on 08/08/2017.
 */
// require('apickli-gherkin')
const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')
const {
    bpaUrl,
    generateRandomDate,
    createBooking
} = require('../../page_objects/utils')


defineSupportCode(({Given, Then, When, After, Before, registerHandler}) => {

    // Before every feature instantiate the client session - open the browser
    // client - browser object
    Before(function (scenario) {
        return client.init();
    });


    Given(/^I am on the ONS Homepage$/, function () {

        client.assert.containsText('body', 'A to Z of statistical bulletins')
    });

    When(/^I search for (.*) dataset$/, function (seacrhText) {
        this.homePage = client.page.homePage();
        this.homePage.searchWithText(seacrhText);
    });

    When(/^I select CPI dataset from search results$/, function () {

    });

    Then(/^I should be on the CPI dataset landing page$/, function () {

    })


    //After every feature, end the client session - close the browser
    After(function (scenario) {
        return client.end();
    });

})

