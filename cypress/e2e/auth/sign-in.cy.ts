import { useCypressCommands } from "../../utils/common";
const { stubLogin } = useCypressCommands();
describe("Sigin page", () => {
  beforeEach(() => {
    cy.viewport(1024, 600);
    cy.visit("/");
    cy.get('[data-test="menu-item-sign-in"] >').click();
  });

  it("should signin successfully", () => {
    cy.get('[data-test="email-input"]')
      .type("admin@quonte.io")
      .get('[data-test="password-input"] input')
      .type("Password123");

    stubLogin();
    cy.get('[data-test="submit-button"]').click();
    cy.wait("@login").should(({ request }) => {
      expect(request.body.email).to.equal("admin@quonte.io");
      expect(request.body.password).to.equal("Password123");
    });

    cy.get("h2").should("contain", "Hello ");
  });
});
