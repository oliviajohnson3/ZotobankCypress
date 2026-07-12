Cypress.Commands.add("login", (username, password) => {
  cy.session(username, () => {
    cy.visit("/login");

    cy.get('[data-testid="signin-username"]')
      .type(username);

    cy.get('[data-testid="signin-password"]')
      .type(password);

    cy.get('[data-testid="signin-submit"]')
      .click();

    cy.location("pathname")
      .should("eq", "/dashboard");
  });
});