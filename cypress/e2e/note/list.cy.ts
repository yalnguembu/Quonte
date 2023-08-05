import { useCypressCommands } from "../../utils/common";
const {
  login,
  stubEmptyNotesList,
  stubNotesList,
  assertNoteEntriesHas,
  goToMenu,
} = useCypressCommands();
import { notes } from "../../utils/data";

describe("Notes list page", () => {
  beforeEach(() => {
    console.clear();
    cy.visit("/");
    login("admin@quonte.io", "Password123");
    goToMenu("notes");
  });
  const userId = "f9ad088c-746f-4f25-893b-fd74e9ca4b46";

  it("should have the awaited message whe the user doesn't have notes", () => {
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

    assertNoteEntriesHas({
      id: notes[0].id,
      title: notes[0].title,
      content: notes[0].content,
      creationDate: "1 hours ago",
      tags: notes[0].tags,
    });
    assertNoteEntriesHas({
      id: notes[1].id,
      title: notes[1].title,
      content: notes[1].content,
      creationDate: "58 minutes ago",
      tags: notes[1].tags,
    });
    assertNoteEntriesHas({
      id: notes[2].id,
      title: notes[2].title,
      content: notes[2].content,
      creationDate: "35 minutes ago",
      tags: notes[2].tags,
    });
    assertNoteEntriesHas({
      id: notes[3].id,
      title: notes[3].title,
      content: notes[3].content,
      creationDate: "24 minutes ago",
      tags: notes[3].tags,
    });
  });
});
