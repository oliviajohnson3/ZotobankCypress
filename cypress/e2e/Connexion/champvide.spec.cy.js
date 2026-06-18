describe("Robustesse de la connexion - champs vides", () => {
  it("affiche un message de validation et reste sur /login lorsqu'on clique sur Se connecter sans saisir d'identifiants", () => {

    cy.visit("/login")

    // Action
    cy.get('[data-testid="signin-submit"]').click()

    // Vérification : le champ utilisateur est invalide
    cy.get('[data-testid="signin-username"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false
      expect($input[0].validationMessage)
        .to.equal("Veuillez renseigner ce champ.")
    })

    // Vérification : l'utilisateur reste sur la page de connexion
    cy.url().should("include", "/login")
  })
})