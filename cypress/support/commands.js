// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "@testing-library/cypress/add-commands";
import "cypress-waitfor";
const event = new (require("../page-objects/event-page-object"))();

Cypress.Commands.add("getSubmissions", () => {
  cy.get(event.totalSubmissions)
    .eq(5)
    .then((returnedObject) => {
      let totalSubmissionCount = returnedObject.text().split(" ")[0];
      return cy.wrap(totalSubmissionCount);
    });
});
