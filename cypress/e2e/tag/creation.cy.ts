import { useCypressCommands } from "../../utils/common";
const { login, stubTagCreation, goToMenu, stubTagsList, assertTagHas } =
  useCypressCommands();
import { tags } from "../../utils/data";
import { Tag } from "../../../src/domain/Tag";

describe("Tag creation", () => {
  beforeEach(() => {
    console.clear();
    cy.visit("/");
    login("admin@quonte.io", "Password123");
    stubTagsList(userId, tags);
    goToMenu("tags");
  });
  const userId = "f9ad088c-746f-4f25-893b-fd74e9ca4b46";
  const tag = new Tag({
    id: "893b-f9ad088c-4f25-c93b-fd74e9c34b4a",
    title: "Test title",
    description: "Test description",
  });

  it("should create tag when we filled all fields and click on the create button", () => {
    stubTagCreation(tag);
    cy.get('[data-test="open-tag-creation-nodal"]').click();

    fieldTag({
      title: tag.title,
      description: tag.description,
    });

    cy.get(
      '[data-test="tag-creation-modal"] [data-test="tag-creation-button"]'
    ).click();

    stubTagsList(userId, [...tags, tag.baseTag]);
    cy.wait("@tag-creation").should(({ request }) => {
      expect(request.body).to.deep.equal({
        title: tag.title,
        description: tag.description,
      });
    });

    cy.clock();
    cy.tick(3000);

    cy.wait("@tags-list");

    assertTagHas(tag);
  });
});

const fieldTag = (tag: Pick<Tag, "title" | "description">) => {
  cy.get('[data-test="tag-title-input"]')
    .type(tag.title)
    .get('[data-test="tag-description-input"]')
    .type(tag.description);
};
