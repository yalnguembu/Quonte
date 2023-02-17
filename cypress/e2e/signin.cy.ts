// https://docs.cypress.io/api/introduction/api.html

describe("SignIn", () => {
  beforeEach(() => {
    cy.viewport("macbook-11");
    cy.visit("/");
  });

  it("should visits the app root url", () => {
    cy.visit("/");
  });

  it("should have the correct first title", () => {
    cy.get("h2").should("contain", "Sign In");
  });

  it("should have the correct second title", () => {
    cy.get("h1").should("contain", "Bespace");
  });

  it("should have the email input", () => {
    cy.get('[data-test="email-input"] label').should("contain", "Email");
  });

  it("should have the password input", () => {
    cy.get('[data-test="password-input"] label').should("contain", "Password");
  });

  // it.skip("visits the app root url", () => {
  //   cy.get("h1").should("contain", "Bespace");
  //   cy.get("h2").should("contain", "Sign In");
  //   cy.get('[data-test="email-input"] input').type("admin@bespace.com");
  //   cy.get('[data-test="password-input"] input').type("123");
  //   // cy.get('[data-test="submit-button"] button').click();
  //   // cy.get("h1").should("contain", "You are welcome");
  // });
});
