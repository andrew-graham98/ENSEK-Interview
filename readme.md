Here is the repository for the ENSEK Remote software Tester Exercise </br >
This repo is broken into two sections:
- Test documentation
- Automated Tests


## Test Automation
This is the folder containing all of the Cypress tests

##### Setup
one inside the Automated Tests folder, run the command `npm install` to download all required packages
which are just Cypress and Cypress-mochaawsome-reporter

##### Running
The tests can be run in 2 ways, headless with the command `npm run test`, which will run all specs in the e2e folder </br>
And `npm run cypress`, which will open the cypress runner so that you can see what the tests are doing when they run

##### Reporting
Once the tests have run, you can find an HTML report in the folder cypress/reports/html/index.html </br>
This is an HTML report for the results of the tests that make it easier to view and share with stakeholders.

##### Notes
There is currently one failing test; this is because I wanted to write a test for a bit of functionality that I was confident of how it works </br>
The login test will currently fail due to an issue with the site, but it is there and should pass once the issue is fixed.

## Test Documentation
This folder contains the Test plan and all relevant documents that support it, such as test cases/ bugs.

##### Test Plan
A concise plan of the test approach was taken when testing this application. This is a cut-down version of a full-size test plane, omitting sections such as NFRs and integration tests as they are not applicable to this test application.

##### Test Charter
Due to a lack of requirements, an exploratory approach was taken to perform the initial manual testing of the application. This charter contains the test notes of the test session, including notes on current functionality and issues with the app.

##### Defect Log
Any issues found whilst testing were recorded in this log with the following information: Title, Expected behaviour, Actual behaviour, severity, Steps to reproduce and the version tested on. These bugs also included a screenshot, where applicable, of the defect.

##### Test cases
From the manual tests, I created some key test cases for the system in the Gerkin syntax to base the automated tests on, these were also run against the application, and the results of the test cases also record in this document.
There are also stored as a CSV, in case they need to be opened, not in Excel.
