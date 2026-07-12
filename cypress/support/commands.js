Cypress.Commands.add("login", (username, password) => {
  cy.visit("/login");

  cy.get('[data-testid="signin-username"]').type(username);
  cy.get('[data-testid="signin-password"]').type(password);
  cy.get('[data-testid="signin-submit"]').click();

  // Vérifie que la connexion est réussie
  cy.url().should("include", "/dashboard");
});