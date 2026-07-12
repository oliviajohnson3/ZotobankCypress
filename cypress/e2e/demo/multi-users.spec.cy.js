describe("Gestion de plusieurs utilisateurs", () => {

  describe("Stratégie A - Objet nommé par rôle", () => {

    beforeEach(function () {
      cy.fixture("users-roles").as("users");
    });

    it("le compte principal voit le bénéficiaire dans sa liste", function () {
      cy.login(
        this.users.principal.username,
        this.users.principal.password
      );

      cy.visit("/beneficiaries");

      cy.contains(this.users.beneficiaire.username)
        .should("be.visible");
    });

  });

  describe("Stratégie B - Tableau d'utilisateurs", () => {

    it("retrouve le compte principal dans le tableau et se connecte", () => {
      cy.fixture("users-list").then((users) => {
        const principal = users.find(
          (user) => user.role === "principal"
        );

        cy.login(principal.username, principal.password);

        cy.visit("/dashboard");

        cy.location("pathname")
          .should("eq", "/dashboard");
      });
    });

    it("teste la connexion avec tous les utilisateurs", () => {
      cy.fixture("users-list").then((users) => {
        users.forEach((user) => {
          cy.login(user.username, user.password);

          cy.visit("/dashboard");

          cy.location("pathname")
            .should("eq", "/dashboard");
        });
      });
    });

  });

});