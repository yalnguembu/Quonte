import { useCypressCommands } from "../utils/common";
const {
  login,
  stubEmptyTagsList,
  stubTagsList,
  assertTagEntriesHas,
  stubEmptyNotesList,
  stubNotesList,
  assertNoteEntriesHas,
} = useCypressCommands();
import { capitalizeWholeText } from "../../src/utils/string";
import { notes, tags } from "../utils/data";

describe("Home page app", () => {
  const userId = "f9ad088c-746f-4f25-893b-fd74e9ca4b46";

  beforeEach(() => {
    cy.clock(new Date("2023-07-29T09:48:52.917Z"));
    cy.visit("/");
  });

  describe("tags", () => {
    it("should have the awaited message whe the user doesn't have tags", () => {
      stubEmptyTagsList(userId);

      login("admin@quonte.io", "Password123");
      cy.get('[data-test="tags-section"] h2').should("have.text", "Tags");
      cy.get('[data-test="tags-section"] h4').should(
        "contain.text",
        " See your most frequently used tags "
      );

      cy.wait("@empty-tags-list");
      cy.get('[data-test="empty-tags"] > h3').should(
        "contain.text",
        "No tags yet created! Please crate tags"
      );
    });

    it("should have the awaited tags in the tags sections", () => {
      stubTagsList(userId, tags);
      login("admin@quonte.io", "Password123");

      cy.wait("@tags-list");

      assertTagEntriesHas({
        id: tags[0].id,
        title: capitalizeWholeText(tags[0].title),
      });
      assertTagEntriesHas({
        id: tags[1].id,
        title: capitalizeWholeText(tags[1].title),
      });
      assertTagEntriesHas({
        id: tags[2].id,
        title: capitalizeWholeText(tags[2].title),
      });
      assertTagEntriesHas({
        id: tags[3].id,
        title: capitalizeWholeText(tags[3].title),
      });
    });
  });

  describe("notes", () => {
    it("should have the awaited message whe the user doesn't have notes", () => {
      stubEmptyNotesList(userId);
      login("admin@quonte.io", "Password123");

      cy.get('[data-test="notes-section"] h2').should("have.text", "Notes");
      cy.get('[data-test="notes-section"] h4').should(
        "contain.text",
        "Here is what you recently wrote"
      );

      cy.wait("@empty-notes-list");
      cy.get('[data-test="empty-notes"] h3').should(
        "contain.text",
        "No Note yet created! click up the for crate new note"
      );
    });

    it.only("should have the awaited notes in the notes sections", () => {
      stubNotesList(userId, notes);
      stubTagsList(userId, tags);
      login("admin@quonte.io", "Password123");

      cy.wait("@tags-list");
      cy.wait("@notes-list");

      assertNoteEntriesHas({
        id: notes[0].id,
        title: notes[0].title,
        content: notes[0].content,
        creationDate: "just now",
        tags: notes[0].tags,
      });
      assertNoteEntriesHas({
        id: notes[1].id,
        title: notes[1].title,
        content: notes[1].content,
        creationDate: "4 minutes ago",
        tags: notes[1].tags,
      });
      assertNoteEntriesHas({
        id: notes[2].id,
        title: notes[2].title,
        content: notes[2].content,
        creationDate: "6 hours ago",
        tags: notes[2].tags,
      });
      assertNoteEntriesHas({
        id: notes[3].id,
        title: notes[3].title,
        content: notes[3].content,
        creationDate: "1 days ago",
        tags: notes[3].tags,
      });
    });
  });
});
