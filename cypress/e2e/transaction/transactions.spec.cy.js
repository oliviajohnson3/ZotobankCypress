describe("Transactions - ZotoBank", () => {

  beforeEach(() => {
    cy.visit("/login")

    cy.get('[data-testid="signin-username"]').type("johndoe")
    cy.get('[data-testid="signin-password"]').type("s3cret")
    cy.get('[data-testid="signin-submit"]').click()

    cy.url().should("include", "/dashboard")

    cy.visit("/transactions")
  })

  it("affiche la liste des transactions après connexion", () => {
    cy.url().should("include", "/transactions")

    cy.get('[data-testid="transaction-list"]')
      .should("be.visible")

    cy.get('[data-testid^="transaction-item-"]')
      .should("have.length.greaterThan", 0)
  })

  it("affiche un état vide quand la recherche ne donne aucun résultat", () => {
    cy.get('[data-testid="transaction-search"]').type("toto")

    cy.get('[data-testid="transaction-empty-state"]')
      .should("be.visible")
      .and("contain", "Aucune transaction trouvée")

    cy.get('[data-testid^="transaction-item-"]')
      .should("have.length", 0)
  })

  it("filtre les transactions envoyées puis réinitialise la liste", () => {

    cy.get('[data-testid^="transaction-item-"]').then(($transactionsAvant) => {

      const nombreAvantFiltre = $transactionsAvant.length

      cy.get('[data-testid="transaction-filter-type"]')
        .select("sent")

      cy.get('[data-testid^="transaction-item-"]')
        .should("have.length.lessThan", nombreAvantFiltre)

      cy.get('[data-testid^="transaction-amount-"]')
        .first()
        .should("contain", "-")

      cy.get('[data-testid="transaction-reset-filters"]')
        .click()

      cy.get('[data-testid^="transaction-item-"]')
        .should("have.length", nombreAvantFiltre)

    })
  })
  it("affiche un état vide quand on combine le filtre envoyés et une recherche sans résultat", () => {
  cy.get('[data-testid="transaction-filter-type"]')
    .select("sent")

  cy.get('[data-testid="transaction-search"]')
    .type("toto")

  cy.get('[data-testid="transaction-empty-state"]')
    .should("be.visible")
    .and("contain", "Aucune transaction trouvée")

  cy.get('[data-testid^="transaction-item-"]')
    .should("have.length", 0)
})

it("ouvre le détail d'une transaction depuis la liste", () => {
  cy.get('[data-testid^="transaction-item-"]')
    .first()
    .click()

  cy.get('[data-testid="transaction-detail"]')
    .should("be.visible")

  cy.get('[data-testid="transaction-detail-amount"]')
    .should("be.visible")

  cy.get('[data-testid="transaction-detail-sender"]')
    .should("be.visible")

  cy.get('[data-testid="transaction-detail-status"]')
    .should("be.visible")
})

})