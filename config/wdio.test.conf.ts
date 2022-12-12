import { config } from "../wdio.conf"
import report from "@wdio/allure-reporter"
const os = require("os")

config.specs = [
    './features/US02/*.feature'
]

config.reporters = ['spec',
    [
        'allure', {
            outputDir: 'allure-results-test',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: true,
        }
    ]],

    config.afterFeature = function (uri, feature) {
        let platform = ""
        report.addEnvironment("Environment", "Test")
        report.addEnvironment("Browser", "Chrome")

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