/**
 * Created by manojpathi on 09/08/2017.
 */
/**
 * Created by manojpathi on 08/08/2017.
 */
module.exports = {

    elements: {
        datasetChecbox: '#checkbox-dataset',
        searchBtn: '#nav-search-submit'
    },
    commands: [{
        searchWithText: function (searchText) {
            return this.setValue('@searchBar', searchText).click('@searchBtn');
        }
    }]
}