describe("Robustesse de la connexion - sensibilité à la casse", () => {
  it("refuse la connexion avec JOHNDOE et le bon mot de passe", () => {

    cy.visit("/login")

    cy.get('[data-testid="signin-username"]').type("JOHNDOE")
    cy.get('[data-testid="signin-password"]').type("s3cret")
    cy.get('[data-testid="signin-submit"]').click()

    // L'utilisateur reste sur la page de connexion
    cy.url().should("include", "/login")

    // Le message d'erreur est affiché
    cy.get('[data-testid="signin-error"]')
      .should("be.visible")
      .and("have.text", "Nom d'utilisateur ou mot de passe incorrect")
  })
})