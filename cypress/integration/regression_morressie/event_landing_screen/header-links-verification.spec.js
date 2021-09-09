const event = new (require("../../../page-objects/event-page-object"))();
const loginSignup =
  new (require("../../../page-objects/login-signup-page-object"))();

describe("Verification of Link Provided In Header Are Interactable", () => {
  before(() => {
    cy.visit("/");
    cy.get(event.gotItButton).click();
  });

  it("Verify Author Benefit Page", () => {
    cy.get(event.logo).should("be.visible");
    cy.get(event.icon).should("be.visible");
    cy.findByText("Login").should("exist");
    cy.findByText("Signup").should("exist");
  });

  it("Verify Sci Meeting Page", () => {
    cy.findByText("Login").should("exist").click();
    cy.get(loginSignup.body)
      .eq(0)
      .should("have.class", "ReactModal__Body--open");
    cy.get(loginSignup.loginSignupPageHeading).should(
      "have.text",
      "Sign in or create your account"
    );
    cy.get(loginSignup.loginEmail).should("be.visible");
    cy.get(loginSignup.loginEmail).should("have.value", "");

    cy.get(loginSignup.loginPassword).should("be.visible");
    cy.get(loginSignup.loginPassword).should("have.value", "");
    cy.get(loginSignup.closeTab).eq(0).click({ force: true });
    cy.get(loginSignup.body)
      .eq(0)
      .should("not.have.class", "ReactModal__Body--open");
  });

  it("Verify Frequently Asked Questions Page", () => {
    cy.findByText("Signup").should("exist").click();
    cy.get(loginSignup.body)
      .eq(0)
      .should("have.class", "ReactModal__Body--open");
    cy.get(loginSignup.loginSignupPageHeading).should(
      "have.text",
      "Sign in or create your account"
    );
    cy.get(loginSignup.signupEmail).should("be.visible");
    cy.get(loginSignup.signupEmail).should("have.value", "");
    cy.get(loginSignup.closeTab).eq(0).click({ force: true });
    cy.get(loginSignup.body)
      .eq(0)
      .should("not.have.class", "ReactModal__Body--open");
  });
});
