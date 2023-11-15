import { useCypressCommands } from "../utils/common";
const { login, stubNotesList } = useCypressCommands();
import { notes } from "../utils/data";

describe("Profile", () => {
  const userId = "f9ad088c-746f-4f25-893b-fd74e9ca4b46";

  beforeEach(() => {
    console.clear();
    cy.visit("/");
    login("admin@quonte.io", "Password123");
    cy.get(
      '[data-test="navbar-center-content"] [data-test="profile-button"]'
    ).click();
    stubNotesList(userId, notes);
  });

  it("should have the awaited message whe the user doesn't have tags", () => {
    cy.get('[data-test="user-profile"] h2').should("have.text", "Profile");
  });
});
