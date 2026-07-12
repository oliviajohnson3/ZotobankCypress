describe("Robustesse de la connexion - sensibilité à la casse", () => {

  beforeEach(function () {
    cy.fixture("users").as("user");
    cy.visit("/login");
  });

  it("refuse la connexion avec JOHNDOE et le bon mot de passe", function () {

    cy.get('[data-testid="signin-username"]')
      .type(this.user.username.toUpperCase());

    cy.get('[data-testid="signin-password"]')
      .type(this.user.password);

    cy.get('[data-testid="signin-submit"]')
      .click();

    // L'utilisateur reste sur la page de connexion
    cy.url()
      .should("include", "/login");

    // Le message d'erreur est affiché
    cy.get('[data-testid="signin-error"]')
      .should("be.visible")
      .and("have.text", "Nom d'utilisateur ou mot de passe incorrect");
  });

});