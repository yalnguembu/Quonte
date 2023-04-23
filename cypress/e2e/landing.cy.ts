// https://docs.cypress.io/api/introduction/api.html

describe("HomeView", () => {
  beforeEach(() => {
    cy.viewport("macbook-11");
  });

  it("should visits the app root url", () => {
    cy.visit("/");
  });
});
