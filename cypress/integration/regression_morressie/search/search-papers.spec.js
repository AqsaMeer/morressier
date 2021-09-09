const event = new (require("../../../page-objects/event-page-object"))();
const loginSignup =
  new (require("../../../page-objects/login-signup-page-object"))();
const testData = require("../../../fixtures/testData.json");

describe("Verification of Search Functionality", function () {
  before(function () {
    cy.visit("/");
    cy.get(event.gotItButton).click();
  });

  afterEach(function () {
    cy.get(event.searchField).eq(1).clear();
  });

  it("Submission Count Should be Same Without Entering Any Value in Search Field", function () {
    cy.getSubmissions().then(function (totalSubmissionsBefore) {
      cy.get(event.searchField).eq(1).type("{enter}");
      cy.getSubmissions().then(function (totalSubmissionsAfter) {
        expect(totalSubmissionsBefore).to.be.eq(totalSubmissionsAfter);
      });
    });
  });
  it("Search With Complete Chemistry Paper Name", function () {
    cy.get(event.searchField)
      .eq(1)
      .type(testData.submissionData.completePaperName);
    cy.get(event.searchIcon).click();
    cy.wait(2000);
    cy.getSubmissions().then(function (returnedSubmission) {
      expect(returnedSubmission).to.be.eq("1");
    });
    cy.get(event.paperName).should(
      "have.text",
      testData.submissionData.completePaperName
    );
  });
  it("Search With Half Chemistry Paper Name", function () {
    cy.get(event.searchField).eq(1).type(testData.submissionData.halfPaperName);
    cy.get(event.searchIcon).click();
    cy.wait(2000);
    cy.getSubmissions().then(function (returnedSubmission) {
      expect(parseInt(returnedSubmission)).to.be.gt(1);
    });
    cy.get(event.paperName).contains(testData.submissionData.completePaperName);
  });
});
