const loginSignup = function () {
  this.body = "body";
  this.loginSignupPageHeading = ".ReactModalPortal h2";
  this.closeTab = ".ReactModalPortal svg";
  // Login
  this.loginEmail = "[data-test-id='SIGNIN_EMAIL']";
  this.loginPassword = "[data-test-id='SIGNIN_PASSWORD']";
  this.loginButton = "[data-test-id='SIGNIN_SUBMIT']";

  //Signup
  this.signupEmail = "[data-test-id='FORWARDER_EMAIL']";
  this.nextButton = "[data-test-id='FORWARDER_SUBMIT']";
};

module.exports = loginSignup;
