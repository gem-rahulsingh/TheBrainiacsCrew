import { config } from "../wdio.conf"
import report from "@wdio/allure-reporter"
import { SAUCE_ACCESS_KEY, SAUCE_USERNAME } from "../cred"
const os = require("os")

/** https://saucelabs.com/platform/platform-configurator#/  */

/**
 * Cognfig file for running test cases on SauceLab.
 * Install - npm i -D @wdio/sauce-service
 * use "user" - SL_User
 * use "key" - SL_Key
 * user "services" - ['sauce']
 */


config.user = SAUCE_USERNAME

config.key = SAUCE_ACCESS_KEY

config.region = "eu" // or 'eu' or 'apac'

config.specs = [
    './features/US02/*.feature'
]


/** For Cross browsing  */
config.capabilities = [
    {
        maxInstances: 4,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        browserVersion: 'latest',
        platformName: 'Windows 10',
        'sauce:options': {
            build: 'test-build-chrome',
        },
    },
    {
        maxInstances: 4,
        browserName: 'firefox',
        acceptInsecureCerts: true,
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            build: 'test-build-firefox',
        },
    },
    {
        maxInstances: 4,
        browserName: 'safari',
        platformName: 'macOS 12',
        browserVersion: '16',
        acceptInsecureCerts: true,
        'sauce:options': {
            build: 'test-build-safari',
        },
    }
],


    /** Browser stack service */
    config.services = [
        ['sauce',
            {
                sauceConnect: true,
            },
        ]
    ]

config.afterFeature = function (uri, feature) {
    let platform = ""
    report.addEnvironment("Environment", "Test")
    report.addEnvironment("Browser", "Chrome")
    report.addEnvironment("Service", "Sauce Lab")

    if (process.platform === "win32")
        platform = "Windows"
    if (process.platform === "linux")
        platform = "Linux"
    if (process.platform === "darwin")
        platform = "MacOS"

    report.addEnvironment("Platform", platform)
    report.addEnvironment("Run By", os.userInfo().username)

}

exports.config = config
