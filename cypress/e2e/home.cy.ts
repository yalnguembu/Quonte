// https://docs.cypress.io/api/introduction/api.html

describe("HomeView", () => {
  beforeEach(() => {
    cy.viewport("macbook-11");
  });

  it("should visits the app root url", () => {
    cy.visit("/");
  });
  it("should loggin", () => {
    cy.visit("/");
    cy.get('[data-test="email-input"] input').type("admin@bespace.com");
    cy.get('[data-test="password-input"] input').type("123");
    cy.get('[data-test="submit-button"] button').click();
    cy.get("h1").should("contain", "You are welcome");
  });
  it("visits see the welcome message after he loggin ", () => {
    cy.visit("/");
    cy.get('[data-test="email-input"] input').type("admin@bespace.com");
    cy.get('[data-test="password-input"] input').type("123");
    cy.get('[data-test="submit-button"] button').click();
    cy.get("h1").should("contain", "You are welcome");
  });
});
