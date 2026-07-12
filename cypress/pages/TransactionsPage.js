class TransactionsPage {
  visit() {
    cy.visit("/transactions");
  }

  search(terme) {
    cy.get('[data-testid="transaction-search"]')
      .clear()
      .type(terme);
  }

  filterByType(type) {
    cy.get('[data-testid="transaction-filter-type"]')
      .select(type);
  }

  filterByStatus(status) {
    cy.get('[data-testid="transaction-filter-status"]')
      .select(status);
  }

  reset() {
    cy.get('[data-testid="transaction-reset-filters"]')
      .click();
  }

  list() {
    return cy.get('[data-testid="transaction-list"]');
  }

  items() {
    return cy.get('[data-testid^="transaction-item-"]');
  }

  amounts() {
    return cy.get('[data-testid^="transaction-amount-"]');
  }

  emptyState() {
    return cy.get('[data-testid="transaction-empty-state"]');
  }

  hasEmptyState() {
    return cy.get("body").then(($body) => {
      return $body.find('[data-testid="transaction-empty-state"]').length > 0;
    });
  }

  firstItem() {
    return this.items().first();
  }

  detail() {
    return cy.get('[data-testid="transaction-detail"]');
  }

  detailAmount() {
    return cy.get('[data-testid="transaction-detail-amount"]');
  }

  detailSender() {
    return cy.get('[data-testid="transaction-detail-sender"]');
  }

  detailStatus() {
    return cy.get('[data-testid="transaction-detail-status"]');
  }

  pendingStatus() {
    return cy.contains("En attente");
  }
}

export default new TransactionsPage();