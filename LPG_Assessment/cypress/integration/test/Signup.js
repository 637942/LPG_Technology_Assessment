const data = require("../../fixtures/data");
import PageObjects from "./PageObjects";
import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";

When("I enter the invalid email address", () => {
  PageObjects.scrollbottom();
  PageObjects.emailId().type(data.invalidemail);
  PageObjects.wait();
});

And("I Click on submit", () => {
  PageObjects.signupBtn().click();
  PageObjects.wait();
});

Then(
  "I should get an error message at the bottom of the email text box",
  () => {
    PageObjects.emailError().should("contain", data.emailerror);
    PageObjects.wait();
  }
);

When("I enter valid email address", () => {
  PageObjects.scrollbottom();
  PageObjects.emailId().type(data.validemail);
  PageObjects.wait();
});

And("I click on submit without selecting the privacy policy checkbox", () => {
  PageObjects.signupBtn().click();
  PageObjects.wait();
});

Then("I should see an error message {string}", (errortxt) => {
  PageObjects.policyError().should("contain", errortxt);
  PageObjects.wait();
});

When("I check the checkbox with privacy policy", () => {
  PageObjects.policyCheckbox().click();
  PageObjects.wait();
});

Then("I should see the popup window", () => {
  PageObjects.signupPopup().should("contain", data.thanksmsg);
  PageObjects.closeThanksPopup().click();
});
