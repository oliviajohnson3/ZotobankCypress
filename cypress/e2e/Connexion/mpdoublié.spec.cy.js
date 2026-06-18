describe("Navigation - mot de passe oublié", () => {
  it("redirige vers la page de réinitialisation lorsqu'on clique sur Mot de passe oublié", () => {

    cy.visit("/login")

    cy.get('[data-testid="forgot-password-link"]').click()

    // Vérifier l'URL d'arrivée
    cy.url().should("include", "/forgot-password")

    // Vérifier que la page de réinitialisation est affichée
    cy.contains("Réinitialiser votre mot de passe")
      .should("be.visible")

  })
})