describe("Robustesse de la connexion - gestion des espaces", () => {
  it("refuse la connexion lorsque le nom d'utilisateur contient des espaces", () => {

    cy.visit("/login")

    // Un espace avant et après le nom d'utilisateur
    cy.get('[data-testid="signin-username"]').type(" johndoe ")
    cy.get('[data-testid="signin-password"]').type("s3cret")
    cy.get('[data-testid="signin-submit"]').click()

    // L'utilisateur reste sur la page de connexion
    cy.url().should("include", "/login")

    // Le message d'erreur est affiché
    cy.get('[data-testid="signin-error"]')
      .should("be.visible")
      .and("contain.text", "Nom d'utilisateur ou mot de passe incorrect")
  })
})