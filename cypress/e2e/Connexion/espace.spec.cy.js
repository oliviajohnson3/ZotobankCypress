describe("Robustesse de la connexion - gestion des espaces", () => {

  beforeEach(function () {
    cy.fixture("users").as("user");
    cy.visit("/login");
  });

  it("refuse la connexion lorsque le nom d'utilisateur contient des espaces", function () {

    // Un espace avant et après le nom d'utilisateur
    cy.get('[data-testid="signin-username"]')
      .type(` ${this.user.username} `);

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
      .and("contain.text", "Nom d'utilisateur ou mot de passe incorrect");

  });

});