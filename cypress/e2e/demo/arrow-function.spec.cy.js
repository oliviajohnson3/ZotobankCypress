describe("Piège des arrow functions", () => {

  beforeEach(function () {
    cy.fixture("users").as("user");
  });

  it("fonctionne avec une fonction classique", function () {

    cy.visit("/login");

    cy.get('[data-testid="signin-username"]')
      .type(this.user.username);

    cy.get('[data-testid="signin-password"]')
      .type(this.user.password);

    cy.get('[data-testid="signin-submit"]')
      .click();

    cy.url()
      .should("include", "/dashboard");

  });

});