
module.exports = {
    url: "www.ons.gov.uk",
    elements: {
        searchBar: '#nav-search',
        searchBtn: '#nav-search-submit'

    },
    commands: [{
        searchWithText: function (searchText) {

            return this.setValue('@searchBar', searchText).click('@searchBtn')

        }
    }]
}