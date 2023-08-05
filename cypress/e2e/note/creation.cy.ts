import { useCypressCommands } from "../../utils/common";
const {
  login,
  stubNoteCreation,
  goToMenu,
  stubNotesList,
  stubTagsList,
  stubNoteDetails,
} = useCypressCommands();
import { notes, tags } from "../../utils/data";
import { Note } from "../../../src/domain/Note";

describe("Note creation", () => {
  beforeEach(() => {
    console.clear();
    cy.visit("/");
    login("admin@quonte.io", "Password123");
    stubNotesList(userId, notes);
    stubTagsList(userId, tags);
    goToMenu("notes");
  });
  const userId = "f9ad088c-746f-4f25-893b-fd74e9ca4b46";
  const note = new Note({
    title: "Test title",
    content: "Test content",
    id: "f9ad088c-746f-4f25-893b-fd74e9ca4b46",
    tags: [
      {
        id: "746f-f9ad088c-4f25-893b-fd74e9ca4b4a",
        title: "tag test 1",
      },
      {
        id: "fd74e9ca4b4a-f9ad088c-4f25-893b-fd74e9ca4b4a",
        title: "tag test 2",
      },
    ],
  });
  const tagsForVerification = note.tags.map((tag) => tag.id);

  it("should create note when we filled all fields and click on the create button", () => {
    stubNoteCreation(note);
    cy.get('[data-test="open-note-creation-nodal"]').click();
    fieldNote(note);

    cy.get(
      '[data-test="note-creation-modal"] [data-test="tag-creation-button"]'
    ).click();
    stubNoteDetails(note.baseNote);

    cy.wait("@note-creation").should(({ request }) => {
      expect(request.body).to.deep.equal({
        title: note.title,
        content: note.content,
        tags: tagsForVerification,
      });
    });

    cy.clock();
    cy.tick(3000);

    cy.url().should("contain", `/notes/${note.id}`);
  });
});

const fieldNote = (note: Note): void => {
  cy.get('[data-test="title"]')
    .type(note.title)
    .get('[data-test="content"]')
    .type(note.content);
  fieldTagInput([
    "746f-f9ad088c-4f25-893b-fd74e9ca4b4a",
    "fd74e9ca4b4a-f9ad088c-4f25-893b-fd74e9ca4b4a",
  ]);
};

const fieldTagInput = (tags: string[]): void => {
  tags.forEach((tag) => {
    cy.get('[data-test="toogle-tags-list-button"]')
      .click()
      .get(`[data-test="tags-list"] [data-test="tag-item-${tag}"]`)
      .click();
  });
};
