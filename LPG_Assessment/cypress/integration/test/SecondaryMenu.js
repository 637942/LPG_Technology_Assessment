const data = require("../../fixtures/data");
import PageObjects from "./PageObjects";
import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";

When("I click on any link in the secondary menu", () => {
  PageObjects.menuItem1().click();
});

Then("I should able see the relevant Page for the selected item", () => {
  PageObjects.UrlValidation().should("include", "/how-it-works");
});
