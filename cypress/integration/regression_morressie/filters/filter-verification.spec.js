const event = new (require("../../../page-objects/event-page-object"))();
const loginSignup =
  new (require("../../../page-objects/login-signup-page-object"))();
const testData = require("../../../fixtures/testData.json");

describe("Verification of Filter Functionality", function () {
  before(function () {
    cy.visit("/");
    cy.get(event.gotItButton).click();
  });

  afterEach(function () {
    cy.findByText("Clear all filters").click();
    cy.get(event.closeFilterPanel).click();
  });

  it("Verify Filter Button Opens Right Panel", function () {
    cy.findByText("Add filter").click();
    cy.get(event.filterRightPanel).should("be.visible");
    cy.findByText("Presentation filters").should("be.visible");
  });

  it("Verify Search Submisison-> Keyword", function () {
    cy.get(event.filterButton).should("have.text", "Add filter");
    cy.wait(2000);
    cy.get(event.filterButton).click();
    cy.get(event.keywordCheckbox).eq(0).click();
    cy.get(event.filtersSelectedCount).eq(0).should("have.text", "1");
    cy.get(event.filterButton).should("have.text", "Filters (1)");
    cy.get(event.keywordSubmissionCount)
      .eq(3)
      .then(function (returnedObject) {
        let text = returnedObject.text().replace(")", "").replace("(", "");
        cy.getSubmissions().then(function (returnedSubmission) {
          returnedSubmission = returnedSubmission.replace(",", "");
          expect(returnedSubmission).to.be.eq(text);
        });
      });
  });

  it.only("Verify Search Submisison-> Author", function () {
    cy.get(event.filterButton).should("have.text", "Add filter");
    cy.wait(2000);
    cy.get(event.filterButton).click();
    cy.get(event.filtersList).eq(1).click();
    cy.get(event.keywordCheckbox).eq(11).click();
    cy.get(event.keywordCheckbox)
      .eq(11)
      .then((returnedObject) => {
        let selectedFilterText = returnedObject.text().split("(")[0];
        cy.get(event.selectedFilter).should("have.text", selectedFilterText);
        cy.get(event.submissionDetails).contains(selectedFilterText);

        cy.get(event.filtersSelectedCount).eq(0).should("have.text", "1");
        cy.get(event.filterButton).should("have.text", "Filters (1)");
        cy.get(event.keywordSubmissionCount)
          .eq(55)
          .then(function (returnedObject) {
            let text = returnedObject.text().replace(")", "").replace("(", "");
            cy.getSubmissions().then(function (returnedSubmission) {
              returnedSubmission = returnedSubmission.replace(",", "");
              expect(returnedSubmission).to.be.eq(text);
            });
          });
      });
  });

  it("Verify Filter Search Bar->Keyword", function () {
    cy.get(event.filterButton).should("have.text", "Add filter");
    cy.wait(2000);
    cy.get(event.filterButton).click();
    cy.get(event.searchKeywordField).type(
      "chemistry techniques analytical {enter}"
    );
    cy.wait(2000);
    cy.get(event.searchedKeywordResult)
      .eq(0)
      .should("have.text", "chemistry techniques, analytical");
  });
});
