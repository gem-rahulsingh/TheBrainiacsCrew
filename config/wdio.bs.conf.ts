import { config } from "../wdio.conf"
import report from "@wdio/allure-reporter"
import { BROWSERSTACK_ACCESS_KEY, BROWSERSTACK_USERNAME } from "../cred"
const os = require("os")

/**
 * Cognfig file for running test cases on BrowserStack.
 * Install - npm i -D @wdio/browserstack-service
 * use "user" - BS_User
 * use "key" - BS_Key
 * user "services" - ['browserstack']
 */


config.user = BROWSERSTACK_USERNAME

config.key = BROWSERSTACK_ACCESS_KEY

config.specs = [
    './features/US02/TC07*.feature',
    './features/US02/TC08*.feature'
]


/** For Cross browsing  */
config.capabilities = [
    {
        maxInstances: 4,
        browserName: 'chrome',
        acceptInsecureCerts: true
    },
    {
        maxInstances: 4,
        browserName: 'firefox',
        acceptInsecureCerts: true
    },
    {
        maxInstances: 4,
        browserName: 'safari',
        acceptInsecureCerts: true
    }
],

    // config.capabilities = {
    //     'bstack:options': {
    //         buildName: 'browserstack-build-1'
    //     }
    // },

//     commonCapabilities: {
//     buildName: 'browserstack-build-1'
// }
// },
// maxInstances: 10
// };
// },


/** For specfic OS */
// config.capabilities = [
//     {
//         browserName: 'Safari',
//         browserVersion: '14.1',  // or 'latest'
//         'bstack:options': {
//             os: 'OS X',
//             osVersion: 'Big Sur'
//         },
//         maxInstances: 4,
//         acceptInsecureCerts: true,
//     }
// ]


/** Browser stack service */
config.services = [
    ['browserstack',
        {
            // BrowserStack’s Local Testing feature connects with test suites pointing to your localhost URL
            browserstackLocal: true,
            preferScenarioName: true,
            forcedStop: true
        }
    ]
]

config.afterFeature = function (uri, feature) {
    let platform = ""
    report.addEnvironment("Environment", "Test")
    report.addEnvironment("Browser", "Chrome")
    report.addEnvironment("Service", "Browser Stack")

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
