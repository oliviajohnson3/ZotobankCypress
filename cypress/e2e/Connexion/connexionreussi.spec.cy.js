// renseigner le nom d'utilisateur et le mot de passe corrects pour se connecter avec succès
describe("Connexion réussie - ZotoBank", () => {
  it("redirige vers /dashboard après une connexion réussie", () => {
    cy.visit("/login")
    cy.get('[data-testid="signin-username"]').type("johndoe")
    cy.get('[data-testid="signin-password"]').type("s3cret")
    cy.get('[data-testid="signin-submit"]').click()
    cy.url().should("include", "/dashboard")
  })
})