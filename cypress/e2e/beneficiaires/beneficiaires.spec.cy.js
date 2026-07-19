import beneficiairesPage from "../../pages/BeneficiairesPage";

describe("Bénéficiaires - ZotoBank", () => {

  beforeEach(function () {
    cy.fixture("users").as("user");
  });

  beforeEach(function () {
    cy.login(this.user.username, this.user.password);
    beneficiairesPage.visit();
  });

  it("affiche la page et contient au moins un bénéficiaire", () => {
    cy.allure()
    .tag("smoke", "beneficiaires")
    .severity("critical").epic("Bénéficiaires")
    .story("Affichage de la page bénéficiaires")
    .description("Vérifie que la page des bénéficiaires est accessible et contient au moins un bénéficiaire");
    
    cy.url().should("include", "/beneficiaries");

    beneficiairesPage.addButton()
      .should("be.visible")
      .and("contain", "Ajouter un bénéficiaire");

    beneficiairesPage.labels()
      .should("have.length.greaterThan", 0);
  });

  it("ouvre le formulaire d'ajout d'un bénéficiaire", () => {
    cy.allure()
      .tag("regression", "beneficiaires")
      .severity("normal").epic("Bénéficiaires")
      .story("Ajout d'un bénéficiaire")
      .description("Vérifie que le formulaire d'ajout de bénéficiaire peut être ouvert");
    beneficiairesPage.openAddForm();

    beneficiairesPage.usernameInput()
      .should("be.visible");

    beneficiairesPage.labelInput()
      .should("be.visible");

    beneficiairesPage.submitButton()
      .should("be.visible");
  });

  it("affiche une erreur pour un nom d'utilisateur inexistant", () => {
    cy.allure()
      .tag("regression", "beneficiaires")
      .severity("critical").epic("Bénéficiaires")
      .story("Validation du formulaire d'ajout de bénéficiaire")
      .description("Vérifie que l'erreur est affichée pour un utilisateur inexistant");

    beneficiairesPage.labels().then(($beneficiairesAvant) => {
      const nombreAvant = $beneficiairesAvant.length;

      beneficiairesPage.openAddForm();

      beneficiairesPage.fillUsername("utilisateur_inexistant_cypress");
      beneficiairesPage.fillLabel("Test Cypress");

      beneficiairesPage.submit();

      beneficiairesPage.invalidUsernameMessage()
        .should("be.visible")
        .and("contain", "Aucun utilisateur");

      beneficiairesPage.labels()
        .should("have.length", nombreAvant);
    });

  });

});