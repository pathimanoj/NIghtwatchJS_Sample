/**
 * Created by manojpathi on 09/08/2017.
 */
/**
 * Created by manojpathi on 08/08/2017.
 */
var driver = require('selenium-webdriver');

module.exports = {


    elements: {
        datasetChecbox: '#checkbox-dataset',
        searchBtn: '#nav-search-submit',
        datasetsCheckbox: '#checkbox-dataset',
        searchResults: '.search-results',
        firstCpiSearchResult: '.search-results__title>a>strong',
        allResultsTab: '.tab__link.tab__link--active'
    },
    commands: [{

        selectSearchResult: function (searchText) {
            return this.click('@datasetsCheckbox').click('@firstCpiSearchResult')


        }
    }]
}