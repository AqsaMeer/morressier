const event = new (require("../../../page-objects/event-page-object"))();
const testData = require("../../../fixtures/testData.json");

describe("Verification External Link Are Interactable", function () {
  before(function () {
    cy.visit("/");
    cy.get(event.gotItButton).click();
  });

  it("Verify Author Benefit Link", function () {
    cy.get(event.links)
      .eq(0)
      .should("have.text", testData.externalLinksData.authorBenefits);
    cy.get(event.links)
      .eq(0)
      .should(
        "have.attr",
        "href",
        testData.externalLinksData.authorBenefitsLinks
      );
  });
  it("Verify Sci Meeting Link", function () {
    cy.get(event.links)
      .eq(1)
      .should("have.text", testData.externalLinksData.sciMeetings);
    cy.get(event.links)
      .eq(1)
      .should("have.attr", "href", testData.externalLinksData.sciMeetingLinks);
  });
  it("Verify Author Benefit Page", function () {
    cy.get(event.links)
      .eq(2)
      .should("have.text", testData.externalLinksData.frequentQuestions);
    cy.get(event.links)
      .eq(2)
      .should(
        "have.attr",
        "href",
        testData.externalLinksData.frequentQuestionsLinks
      );
  });
});
