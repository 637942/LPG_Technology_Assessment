class PageObjects {
  static getURL() {
    cy.visit("/");
    cy.clearCookies();
  }

  static getHeaderText() {
    return cy.get(".cart-product-stack--dropdown__title");
  }

  static checkout() {
    return cy.get(".lc-cart__purchase").contains("Checkout");
  }

  static price() {
    return cy.get(".formatted-price");
  }

  static passType() {
    return cy.get("select.form-control");
  }

  static adultSelection() {
    return cy.get(
      ":nth-child(3) > .lc-cart__item-amount-wrapper > .lc-cart__item-amount > [data-testid=cartItemIncrease]"
    );
  }

  static childSelection() {
    return cy.get(
      ":nth-child(4) > .lc-cart__item-amount-wrapper > .lc-cart__item-amount > [data-testid=cartItemIncrease]"
    );
  }
  static wait() {
    return cy.wait(3000);
  }

  static cartIcon() {
    return cy.get(".cart-icon__icon").find(".cart-icon__icon-counter");
  }

  static reviewPage() {
    return cy.get(".content--title");
  }

  static UrlValidation() {
    return cy.url();
  }

  static attractionList() {
    return cy.get(".lpg-attractions-card__wrapper").eq(0);
  }

  static attractionitem() {
    return cy.get("li.lpg-attractions-card__item");
  }

  static allAttractions(){
    return cy.get('.read-more-button').find('.lc-font__regular');
  }

  static filterBtn() {
    return cy.get(".lpg-attractions-product-filter__filter-button");
  }

  static filterItems() {
    return cy.get(".lpg-attractions-filter__filter-content-tags-checkbox");
  }

  static outsideClick() {
    return cy.get(".region.region-content").click({ force: true });
  }

  static sort() {
    return cy.get(".lpg-attractions-product-filter__sort-button");
  }

  static sortItem() {
    return cy.get(
      ".lpg-attractions-filter__filter-content-tags > :nth-child(3) > label"
    );
  }

  static titleList() {
    return cy.get(".lpg-attractions-card__title");
  }

  static quickView() {
    return cy.get(".lpg-attractions-card__footer--quickview").eq(1);
  }

  static popupClose() {
    return cy.get(".md-close");
  }

  static menuItem1() {
    return cy.get(".secondary-menu--item").contains("How it works");
  }

  static scrollbottom() {
    return cy.scrollTo("bottom");
  }

  static emailId() {
    return cy.get("#edit-email--3");
  }

  static signupBtn() {
    return cy.get("#edit-actions-submit--3");
  }

  static emailError() {
    return cy.get(".form-item--error-message").eq(0);
  }
  static policyError() {
    return cy.get(".form-item--error-message").eq(0);
  }

  static policyCheckbox() {
    return cy.get("#edit-subscription--3");
  }

  static signupPopup() {
    return cy.get(".slide-in--content--header.confirmation-header");
  }

  static closeThanksPopup() {
    return cy.get(
      ".block-content-wrapper > .slide-in--wrapper > .slide-in--actions--close"
    );
  }
}

export default PageObjects;
