import { useCypressCommands } from "../../utils/common";
const { login, stubEmptyTagsList, stubTagsList, assertTagHas, goToMenu } =
  useCypressCommands();
import { tags } from "../../utils/data";

describe("Tags list page", () => {
  beforeEach(() => {
    console.clear();
    cy.visit("/");
    login("admin@quonte.io", "Password123");
    goToMenu("tags");
  });
  const userId = "f9ad088c-746f-4f25-893b-fd74e9ca4b46";

  it("should have the awaited message whe the user doesn't have tags", () => {
    stubEmptyTagsList(userId);

    cy.get('[data-test="list-header"] h1').should("have.text", "Tags");

    cy.wait("@empty-tags-list");
    cy.get('[data-test="empty-tags-list"] p').should(
      "contain.text",
      "It seem like there is no tag please click here for create one."
    );
  });

  it("should have the awaited tags in the tags sections", () => {
    stubTagsList(userId, tags);

    cy.wait("@tags-list");

    assertTagHas({
      id: tags[0].id,
      title: tags[0].title,
      description: tags[0].description,
    });
    assertTagHas({
      id: tags[1].id,
      title: tags[1].title,
      description: tags[1].description,
    });
    assertTagHas({
      id: tags[2].id,
      title: tags[2].title,
      description: tags[2].description,
    });
    assertTagHas({
      id: tags[3].id,
      title: tags[3].title,
      description: tags[3].description,
    });
  });
});
