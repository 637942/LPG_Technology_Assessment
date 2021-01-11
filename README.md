# LPG_Technical_Assessment

I have created the BDD framework with Cypress for the All-inclusive page and the scripts are there in the folder LPG_Assessment.For that I have derived some high level manual test scenarios LPG_Assessment_Test_Scenarios and automated most of the scenarios.

### PRE-REQUISITES ###

The only pre-requisite to run the scripts is to have npm and Node.js installed in your machine. 

### To Run Scripts ###

After clonning the repo.

Open a terminal, go to the root of this repo and

```
cd LPG_Assessment
npm install cypress --save-dev  
npm run cy:open  // To open the cypress
npm run cy:run   // To run the scripts in headless mode - electron browser
npm run cy:headrun  // To run the scripts in headed electron browser
npm run cy:chromerun  //To run the scripts in chrome browser
npm run cy:dashboard // To run the scripts and get the cypress dashboard for test reports

```
