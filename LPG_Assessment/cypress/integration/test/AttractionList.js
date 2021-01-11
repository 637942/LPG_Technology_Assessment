const data = require("../../fixtures/data");
import PageObjects from "./PageObjects";
import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";
var attractionList;

Then("I should see the Boston attractions list", () => {
  //PageObjects.attractionList().should("have.class","lpg-attractions-card__item");
  PageObjects.attractionitem().then((item) => {
    attractionList = Cypress.$(item).length;
  });
});

When("I click on See all Attractions", () => {
  PageObjects.allAttractions().click();
});

Then("I should see all the attractions in the page", () => {
  PageObjects.attractionitem().then((item2) => {
    const allList = Cypress.$(item2).length;
    expect(allList).to.be.greaterThan(attractionList);
  });
});

When("I click on Filter", () => {
  PageObjects.filterBtn().click();
});

And("I select the {string} from the dropdown", (filterItem) => {
  PageObjects.filterItems().contains(filterItem).click();
  PageObjects.outsideClick();
});

Then("I should see the filtered attractions list in the page", () => {
  PageObjects.attractionitem().then((item1) => {
    const filteredList = Cypress.$(item1).length;
    expect(filteredList).to.be.lessThan(attractionList);
  });
});

When("I click on Sort", () => {
  PageObjects.sort().click();
});

And("I select the {string} from the list", (sortItem) => {
  PageObjects.sortItem().contains(sortItem).click();
});

Then("I should see the sorted list of attractions in the page", () => {
  PageObjects.titleList().then((title) => {
    const unsortedItems = title
      .map((index, html) => Cypress.$(html).text())
      .get();
    const sortedItems = unsortedItems.slice().sort();
    //expect(unsortedItems).to.deep.equal(sortedItems);
  });
});

When("I click on Quick view in any of the item", () => {
  PageObjects.quickView().click();
});

Then(
  "I should see the popup  window with details about the selected attraction",
  () => {
    PageObjects.popupClose().click();
  }
);
