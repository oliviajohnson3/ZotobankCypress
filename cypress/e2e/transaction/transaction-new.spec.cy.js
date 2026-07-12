describe("Nouvelle transaction - ZotoBank", () => {
  beforeEach(() => {
    cy.login("johndoe", "s3cret");

    cy.visit("/transactions/new");
  });

  it("désactive le bouton Envoyer le paiement tant qu'il n'y a pas de destinataire", () => {
    cy.get('[data-testid="new-transaction-type-payment"]')
      .click();

    cy.get('[data-testid="new-transaction-submit"]')
      .should("be.disabled");
  });

  it("affiche la modale de confirmation avec le bon destinataire et le bon montant", () => {
    cy.get('[data-testid="new-transaction-type-payment"]')
      .click();

    cy.get('[data-testid="new-transaction-user-search"]')
      .type("jane");

    cy.get('[data-testid="new-transaction-user-list"]')
      .contains("Jane Smith")
      .click();

    cy.get('[data-testid="new-transaction-amount"]')
      .type("25");

    cy.get('[data-testid="new-transaction-submit"]')
      .click();

    cy.get('[data-testid="new-transaction-confirm-modal"]')
      .should("be.visible");

    cy.get('[data-testid="confirm-receiver"]')
      .should("contain", "Jane Smith");

    cy.get('[data-testid="confirm-amount"]')
      .should("contain", "25");
  });

  it("ferme la modale quand on annule sans envoyer la transaction", () => {
    cy.get('[data-testid="new-transaction-type-payment"]')
      .click();

    cy.get('[data-testid="new-transaction-user-search"]')
      .type("jane");

    cy.get('[data-testid="new-transaction-user-list"]')
      .contains("Jane Smith")
      .click();

    cy.get('[data-testid="new-transaction-amount"]')
      .type("25");

    cy.get('[data-testid="new-transaction-submit"]')
      .click();

    cy.get('[data-testid="new-transaction-confirm-modal"]')
      .should("be.visible");

    cy.get('[data-testid="new-transaction-confirm-cancel"]')
      .click();

    cy.get('[data-testid="new-transaction-confirm-modal"]')
      .should("not.exist");

    cy.get('[data-testid="new-transaction-submit"]')
      .should("be.visible");

    cy.get('[data-testid="new-transaction-success"]')
      .should("not.exist");
  });
});