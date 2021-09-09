const event = new (require("../../../page-objects/event-page-object"))();
const loginSignup =
  new (require("../../../page-objects/login-signup-page-object"))();

describe("Verification After Landing On Event Page", () => {
  before(() => {
    cy.visit("/");
    cy.get(event.gotItButton).click();
  });

  it("Verify User lands on event page successfully", () => {
    //Header
    cy.get(event.logo).should("be.visible");
    cy.get(event.icon).should("be.visible");
    cy.findByText("Login").should("exist");
    cy.findByText("Signup").should("exist");
    // Body
    cy.findByText("Hosted by").should("exist");
    cy.findByText("Add filter").should("exist");
    cy.findByText("American Chemical Society").should("exist");
    cy.get(event.paperName).should("be.visible");
    cy.get(event.paperName).should("have.length", 24);
    // Pagnination-Footer
    cy.findByText("Next").should("exist");
    cy.get(event.pagination).should("be.visible");
    cy.get(event.pagination).should("have.length", 10);
  });

  it("Login Button Should be Interactable", () => {
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

  it("Signup Button Should be Interactable", () => {
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
