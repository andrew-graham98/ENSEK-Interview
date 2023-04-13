Here is the repository for the ENSEK Remote software Tester Exercise </br >
This repo is broken into 2 section:
 - Test documentation
 - Automated Tests


## Test Automation
This is the folder containing all of the cypress tests

##### Setup
one inside the Automated Tests folder run the command `npm install` to download all required packages
which are just Cypress and Cypress-mochaawsome-reporter

##### Running
The test can be run in 2 ways, headless with the command `npm run test` which will run all specs in the e2e folder </br>
And `npm run cypress` which will open the cypress runner so that you are able to see what the tests are doing when they run

##### Reporting
Once the test are run you can find a html report in the folder cypress/reports/html/index.html </br>
This is a html report for the results of the tests that make it easier to view and share to stakeholders

##### Notes
There is currently one failing test, this is as I wanted to write a test for a bit of functionality that i was confident of how it work </br>
The login test will currently fail due to an issue with the site but is there and should pass once the issue is fixed.

## Test Documentation
 This folder contains the Test plan and all relevant documents that support it such as test cases/ bugs
 
##### Test Plan
A consise plan of the test approach taken when testing this application, this is a cut down version a full size test plane omitting sections such as NFRs and intigrations tests as they are not applicable for this test application.

##### Test Charter
Due to a lack of requirements an exploratory approach was taken to perform the initial manual testing of the application, this charter contains the test notes of the test session including notes on current functionality and issues with the app

##### Defect Log
Any issues found whilst testing where recorded in this log with the following infomation: Title, Expected behaviour, Actual behaviour, severity, Steps to reproduce and the version tested on. These bug also included a screenshot where applicable of the defect 

##### Test cases
From manual test I created some key test cases for the system in the Gerkin syntax to base the automated tests off of, these were also run against the application and the results of the test cases also record in this document
There are also stored as a CSV, in case they need to be opened not in Excel
