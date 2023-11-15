import { useCypressCommands } from "../../utils/common";
const {
  login,
  stubEmptyNotesList,
  stubNotesList,
  assertNoteEntriesHas,
  stubNoteDetails,
  goToMenu,
} = useCypressCommands();
import { notes } from "../../utils/data";

describe("Notes Details", () => {
  beforeEach(() => {
    console.clear();
    cy.visit("/");
    login("admin@quonte.io", "Password123");
    goToMenu("notes");
  });
  const userId = "f9ad088c-746f-4f25-893b-fd74e9ca4b46";

  it.skip("should have the awaited message whe the user doesn't have notes", () => {
    stubEmptyNotesList(userId);

    cy.get('[data-test="list-header"] h1').should("have.text", "Notes");

    cy.wait("@empty-notes-list");
    cy.get('[data-test="empty-notes-list"] p').should(
      "contain.text",
      "It seem like there is no note please click here for create one."
    );
  });

  it("should have the awaited tags in the tags sections", () => {
    stubNotesList(userId, notes);
    cy.wait("@notes-list");
    stubNoteDetails(notes[0]);
    cy.get(
      `[data-test="notes-grid"] [data-test="note-item-${notes[0].id}"]`
    ).click();

    assertNoteEntriesHas({
      id: notes[0].id,
      title: notes[0].title,
      content: notes[0].content,
      creationDate: "1 hours ago",
      tags: notes[0].tags,
    });
  });
});
