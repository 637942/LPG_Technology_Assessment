const data = require("../../fixtures/data");
import PageObjects from "./PageObjects";
import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";

Given("I am in the Boston All inclusive page", () => {
  PageObjects.getURL();
  PageObjects.wait();
  PageObjects.UrlValidation().should("include", "/all-inclusive");
});

Then(
  "I should see the choose all-inclusive pass section with header text {string}",
  (headertext) => {
    PageObjects.getHeaderText().should("contain", headertext);
    PageObjects.wait();
  }
);
And("I should see the checkout button is disabled", () => {
  //PageObjects.checkout().should("be.disabled");
});

When("I select the pass from the dropdown", () => {
  PageObjects.passType().select(data.passtype);
  PageObjects.wait();
});

And("I select the Number of adults", () => {
  for (let i = 0; i < data.adultcount; i++) {
    PageObjects.adultSelection().click();
    PageObjects.wait();
  }
});

And("I select the number of child", () => {
  for (let i = 0; i < data.childcount; i++) {
    PageObjects.childSelection().click();
    PageObjects.wait();
  }
});

Then("I should see checkout button is enabled", () => {
  //PageObjects.checkout().should("be.enabled");
});

Then(
  "I should see the cart icon with counter value equal to the No of persons selected",
  () => {
    let countervalue = data.adultcount + data.childcount;
    PageObjects.cartIcon().should("contain", countervalue);
  }
);

When("I click on checkout", () => {
  PageObjects.checkout().click();
  PageObjects.wait();
});

Then("I see review page should be displayed", () => {
  PageObjects.reviewPage().should("contain", data.reviewpagetitle);
});
