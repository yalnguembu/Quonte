/// <reference types="cypress" />

import { NOTE_ITEM } from "../../src/utils/enum";

export const useCypressCommands = () => {
  const login = (email: string, password: string): void => {
    cy.get('[data-test="menu-item-sign-in"] >').click();
    cy.get('[data-test="email-input"]')
      .type(email)
      .get('[data-test="password-input"] input')
      .type(password);

    stubLogin();
    stubVerifyAccesToken();
    cy.get('[data-test="submit-button"]').click();
    cy.wait("@login");
    cy.wait("@verify-access-token");
  };

  interface User {
    username: string;
    email: string;
    password: string;
  }

  const signUp = (user: User): void => {
    cy.viewport(1920, 1080);

    cy.visit("/");
    cy.get('[data-test="email-input"]').type(user.email);
    cy.get('[data-test="username-input"]').type(user.username);
    cy.get('[data-test="password-input"]').type(user.password);

    cy.get('[data-test="submit-button"]').click();
  };

  const stubLogin = () => {
    cy.intercept(
      {
        method: "POST",
        url: "/auth/signin",
      },
      {
        statusCode: 200,
        body: {
          id: "f9ad088c-746f-4f25-893b-fd74e9ca4b46",
          email: "admin@quonte.io",
          username: "mazeking",
          accessToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY5YWQwODhjLTc0NmYtNGYyNS04OTNiLWZkNzRlOWNhNGI0NiIsImVtYWlsIjoiYWRtaW5AcXVvbnRlLmlvIiwicm9sZSI6ImNsaWVudCIsImlhdCI6MTY5MDYyODMzMCwiZXhwIjoxNjkxODM3OTMwfQ.GRhxwruKFGNS2WqxdjQ3SEI94vbds0JTLaIDC1J6S_M",
          role: "client",
        },
      }
    ).as("login");
  };

  const stubSinUp = () => {
    cy.intercept(
      {
        method: "POST",
        url: "/auth/signup",
      },
      {
        statusCode: 201,
        body: {
          id: "f9ad088c-746f-4f25-893b-fd74e9ca4b46",
          email: "admin@quonte.io",
          username: "mazeking",
          accessToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY5YWQwODhjLTc0NmYtNGYyNS04OTNiLWZkNzRlOWNhNGI0NiIsImVtYWlsIjoiYWRtaW5AcXVvbnRlLmlvIiwicm9sZSI6ImNsaWVudCIsImlhdCI6MTY5MDYxNzIzNywiZXhwIjoxNjkxODI2ODM3fQ.BqULvEwrWfwQ69EBbnXziNkbwlehfcabwLG8FNcaap0",
          role: "client",
        },
      }
    ).as("sign-up");
  };

  const stubVerifyAccesToken = () => {
    cy.intercept(
      {
        method: "POST",
        url: "/auth/verify-access-token",
      },
      {
        statusCode: 200,
        body: {
          id: "f9ad088c-746f-4f25-893b-fd74e9ca4b46",
          email: "admin@quonte.io",
          username: "mazeking",
          accessToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY5YWQwODhjLTc0NmYtNGYyNS04OTNiLWZkNzRlOWNhNGI0NiIsImVtYWlsIjoiYWRtaW5AcXVvbnRlLmlvIiwicm9sZSI6ImNsaWVudCIsImlhdCI6MTY5MDYyODMzMCwiZXhwIjoxNjkxODM3OTMwfQ.GRhxwruKFGNS2WqxdjQ3SEI94vbds0JTLaIDC1J6S_M",
          role: "client",
        },
      }
    ).as("verify-access-token");
  };

  type Tag = {
    id: string;
    title: string;
    description?: string;
  };

  const stubTagsList = (ownerId: string, tags: Tag[]) => {
    cy.intercept(
      {
        method: "GET",
        url: `/users/${ownerId}/tags`,
      },
      {
        statusCode: 200,
        body: tags,
      }
    ).as("tags-list");
  };

  const stubEmptyTagsList = (ownerId: string) => {
    cy.intercept(
      {
        method: "GET",
        url: `/users/${ownerId}/tags`,
      },
      {
        statusCode: 200,
        body: [],
      }
    ).as("empty-tags-list");
  };

  const assertTagEntriesHas = (row: Tag): void => {
    cy.get('[data-test="tags-section"]').within(() => assertTagHas(row));
  };

  const assertTagHas = (tag: Tag): void => {
    cy.get(`[data-test="tag-item-${tag.id}"] [data-test="tag-title"]`).should(
      "have.text",
      tag.title
    );
    !!tag.description &&
      cy
        .get(`[data-test="tag-item-${tag.id}"] [data-test="tag-description"]`)
        .should("have.text", tag.description);
  };

  const stubTagCreation = (data: Tag) => {
    cy.intercept(
      {
        method: "POST",
        url: `/tags`,
      },
      {
        statusCode: 201,
        body: data,
      }
    ).as("tag-creation");
  };

  interface Note {
    id: string;
    creationDate: string;
    content: string;
    title: string;
    tags: Tag[];
  }

  const stubNotesList = (ownerId: string, notes: Note[]) => {
    cy.intercept(
      {
        method: "GET",
        url: `/users/${ownerId}/notes`,
      },
      {
        statusCode: 200,
        body: notes,
      }
    ).as("notes-list");
  };

  const stubNoteDetails = (note: Note) => {
    cy.intercept(
      {
        method: "GET",
        url: `/notes/${note.id}`,
      },
      {
        statusCode: 200,
        body: note,
      }
    ).as("note-details");
  };

  const assertNoteEntriesHas = (
    row: Note,
    type: NOTE_ITEM = NOTE_ITEM.CARD
  ): void => {
    cy.get(`[data-test="note-item-${row.id}"]`).within(() => {
      cy.get('[data-test="note-title"]').should("contain.text", row.title);
      cy.get('[data-test="note-creationDate"]').should(
        "contain.text",
        row.creationDate
      );

      if (type === NOTE_ITEM.CARD)
        cy.get('[data-test="note-content"]').should(
          "contain.text",
          row.content
        );

      cy.get('[data-test="note-tags"]').within(() => {
        row.tags.forEach((tag) => assertTagHas(tag));
      });
    });
  };

  const assertNoteDetailsHas = (
    row: Note,
    type: NOTE_ITEM = NOTE_ITEM.CARD
  ): void => {
    cy.get(`[data-test="note-item-${row.id}"]`).within(() => {
      cy.get('[data-test="note-title"]').should("contain.text", row.title);
      cy.get('[data-test="note-creationDate"]').should(
        "contain.text",
        row.creationDate
      );

      if (type === NOTE_ITEM.CARD)
        cy.get('[data-test="note-content"]').should(
          "contain.text",
          row.content
        );

      cy.get('[data-test="note-tags"]').within(() => {
        row.tags.forEach((tag) => assertTagHas(tag));
      });
    });
  };

  const stubNoteCreation = (note: Note) => {
    const tags = note.tags.map((tag) => tag.id);
    cy.intercept(
      {
        method: "POST",
        url: `/notes`,
      },
      {
        statusCode: 201,
        body: {
          id: note.id,
          title: note.title,
          content: note.content,
          tags,
        },
      }
    ).as("note-creation");
  };

  const stubEmptyNotesList = (ownerId: string) => {
    cy.intercept(
      {
        method: "GET",
        url: `/users/${ownerId}/notes`,
      },
      {
        statusCode: 200,
        body: [],
      }
    ).as("empty-notes-list");
  };

  const goToMenu = (menu: string) => {
    cy.get(
      ` [data-test="navbar-left-content"] [data-test="menu-item-${menu}"]`
    ).click();
  };

  return {
    login,
    signUp,
    stubLogin,
    stubSinUp,
    stubTagsList,
    stubEmptyTagsList,
    assertTagEntriesHas,
    assertTagHas,
    stubTagCreation,
    stubNotesList,
    assertNoteEntriesHas,
    stubEmptyNotesList,
    stubNoteCreation,
    stubVerifyAccesToken,
    goToMenu,
    stubNoteDetails,
    assertNoteDetailsHas,
  };
};
