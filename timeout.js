const {defineSupportCode} = require('cucumber')

// similar to implicit wait in webdriver java
defineSupportCode(({setDefaultTimeout}) => {
    setDefaultTimeout(120 * 1000)
})
