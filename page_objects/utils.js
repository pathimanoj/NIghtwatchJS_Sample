/**
 * Created by manojpathi on 08/08/2017.
 */

function generateRandomNumber() {
    return Math.random() * (10000 - 1) + 1;
}

module.exports = {
    generateRandomNumber
}
