describe("Navigation - inscription", () => {
  it("redirige vers la page d'inscription lorsqu'on clique sur S'inscrivez-vous", () => {

    cy.visit("/login")

    cy.get('[data-testid="signup-link"]').click()

    // Vérifier l'URL d'arrivée
    cy.url().should("include", "/signup")

    // Vérifier que la page d'inscription est affichée
    cy.contains("Créez votre compte").should("be.visible")

  })
})