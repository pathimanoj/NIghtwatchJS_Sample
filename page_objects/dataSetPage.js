module.exports = {


    elements: {
        datasetTitle: '.page-intro__title'
    },
    commands: [{
        verifyDatasetTitle: function () {

            return this.expect.element('@datasetTitle').text.to.contain('UK consumer price inflation: July 2017');

        }
    }]
}