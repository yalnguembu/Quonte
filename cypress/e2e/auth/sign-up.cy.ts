describe("Sigin page", () => {
  beforeEach(() => {
    cy.visit("/auth/sign-in");
  });

  it("should signin successfully", () => {
    cy.get('[data-test="email-input"]').type("user@quonte.io");
    cy.get('[data-test="password-input"]').type("Password123");

    cy.get('[data-test="submit-button"]').click();

    cy.get("#note-list").should("exist");
  });
});
