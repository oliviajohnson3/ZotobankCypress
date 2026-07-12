import beneficiairesPage from "../../pages/BeneficiairesPage";

describe("Bénéficiaires - ZotoBank", () => {

  beforeEach(() => {
    cy.login("johndoe", "s3cret");
    beneficiairesPage.visit();
  });

  it("affiche la page et contient au moins un bénéficiaire", () => {
    cy.url().should("include", "/beneficiaries");

    beneficiairesPage.addButton()
      .should("be.visible")
      .and("contain", "Ajouter un bénéficiaire");

    beneficiairesPage.labels()
      .should("have.length.greaterThan", 0);
  });

  it("ouvre le formulaire d'ajout d'un bénéficiaire", () => {
    beneficiairesPage.openAddForm();

    beneficiairesPage.usernameInput()
      .should("be.visible");

    beneficiairesPage.labelInput()
      .should("be.visible");

    beneficiairesPage.submitButton()
      .should("be.visible");
  });

  it("affiche une erreur pour un nom d'utilisateur inexistant", () => {

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