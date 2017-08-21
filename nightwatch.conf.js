const seleniumServer = require('selenium-server')
const driver = require('selenium-webdriver')
const phantomjs = require('phantomjs-prebuilt')
const chromedriver = require('chromedriver')
const geckodriver = require('geckodriver')
const apiKli = require('apickli/apickli-gherkin')
var reporter = require('cucumber-html-reporter')
var allure = require("nightwatch-allure-adapter")

require('nightwatch-cucumber')({
    cucumberArgs: ['--require', 'timeout.js', '--require', 'features/step_definitions', '--format', 'pretty', '--format', 'json:reports_dir/cucumber.json', 'features']
})

var options = {
    theme: 'bootstrap',
    jsonDir: 'reports_dir',
    output: 'reports_dir/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: false
    // metadata: {
    //     "App Version":"0.3.2",
    //     "Test Environment": "STAGING",
    //     "Browser": "Chrome",
    //     "Platform": "Mac",
    //     "Parallel": "Scenarios",
    //     "Executed": "Local"
    // }
}

// reporter.generate(options);

module.exports = {
    reporter: allure.write,
    output_folder: 'reports_dir',
    custom_assertions_path: '',
    page_objects_path: 'page_objects',
    live_output: false,
    disable_colors: false,
    //globals_path: 'globalsModule',
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        host: '127.0.0.1',
        port: 6666
    },
    test_workers: {
        enabled: false,
        workers: "auto"
    },
    test_settings: {
        end_session_on_fail: false,
        skip_testcases_on_fail: false,

        default: {
            launch_url: 'https://www.ons.gov.uk/',
            selenium_port: 6666,
            selenium_host: '127.0.0.1',
            end_session_on_fail: false,
            skip_testcases_on_fail: false,
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: "reports_dir/screenshots"
            },
            desiredCapabilities: {
                browserName: 'phantomjs',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'phantomjs.binary.path': phantomjs.path
            }
        },
        chrome: {
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: false,
                path: "reports_dir/screenshots"
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            },
            selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path
                }
            }
        },
        firefox: {
            screenshots: {
                enabled: false,
                on_failure: true,
                on_error: false,
                path: "reports_dir/screenshots"
            },
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true
            },
            selenium: {
                cli_args: {
                    'webdriver.gecko.driver': geckodriver.path
                }
            }
        }
    }
}
