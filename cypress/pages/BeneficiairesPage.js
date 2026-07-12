class BeneficiairesPage {
  visit() {
    cy.visit("/beneficiaries");
  }

  openAddForm() {
    cy.get('[data-testid="beneficiary-new"]')
      .click();
  }

  fillUsername(username) {
    cy.get('[data-testid="beneficiary-username-input"]')
      .clear()
      .type(username);
  }

  fillLabel(label) {
    cy.get('[data-testid="beneficiary-label-input"]')
      .clear()
      .type(label);
  }

  submit() {
    cy.get('[data-testid="beneficiary-submit"]')
      .click();
  }

  addButton() {
    return cy.get('[data-testid="beneficiary-new"]');
  }

  usernameInput() {
    return cy.get('[data-testid="beneficiary-username-input"]');
  }

  labelInput() {
    return cy.get('[data-testid="beneficiary-label-input"]');
  }

  submitButton() {
    return cy.get('[data-testid="beneficiary-submit"]');
  }

  labels() {
    return cy.get(
      '[data-testid^="beneficiary-label-"]:not([data-testid="beneficiary-label-input"])'
    );
  }

  deleteButtons() {
    return cy.get('[data-testid^="beneficiary-delete-"]');
  }

  invalidUsernameMessage() {
    return cy.contains("Aucun utilisateur avec ce nom d'utilisateur");
  }
}

export default new BeneficiairesPage();