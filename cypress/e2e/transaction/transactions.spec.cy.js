import transactionsPage from "../../pages/TransactionsPage";

describe("Transactions - ZotoBank", () => {
  beforeEach(() => {
    cy.login("johndoe", "s3cret");
    transactionsPage.visit();
  });

  it("affiche la liste des transactions après connexion", () => {
    cy.url().should("include", "/transactions");

    transactionsPage.list()
      .should("be.visible");

    transactionsPage.items()
      .should("have.length.greaterThan", 0);
  });

  it("affiche un état vide quand la recherche ne donne aucun résultat", () => {
    transactionsPage.search("toto");

    transactionsPage.emptyState()
      .should("be.visible")
      .and("contain", "Aucune transaction trouvée");

    transactionsPage.items()
      .should("have.length", 0);
  });

  it("filtre les transactions envoyées puis réinitialise la liste", () => {
    transactionsPage.items().then(($transactionsAvant) => {
      const nombreAvantFiltre = $transactionsAvant.length;

      transactionsPage.filterByType("sent");

      transactionsPage.items()
        .should("have.length.lessThan", nombreAvantFiltre);

      transactionsPage.amounts()
        .first()
        .should("contain", "-");

      transactionsPage.reset();

      transactionsPage.items()
        .should("have.length", nombreAvantFiltre);
    });
  });

  it("affiche un état vide quand on combine le filtre envoyés et une recherche sans résultat", () => {
    transactionsPage.filterByType("sent");
    transactionsPage.search("toto");

    transactionsPage.emptyState()
      .should("be.visible")
      .and("contain", "Aucune transaction trouvée");

    transactionsPage.items()
      .should("have.length", 0);
  });

  it("ouvre le détail d'une transaction depuis la liste", () => {
    transactionsPage.firstItem()
      .click();

    transactionsPage.detail()
      .should("be.visible");

    transactionsPage.detailAmount()
      .should("be.visible");

    transactionsPage.detailSender()
      .should("be.visible");

    transactionsPage.detailStatus()
      .should("be.visible");
  });

  it("filtre les transactions reçues et vérifie que les montants sont positifs", () => {
    transactionsPage.items().then(($transactionsAvant) => {
      const nombreAvantFiltre = $transactionsAvant.length;

      transactionsPage.filterByType("received");

      transactionsPage.items()
        .should("have.length.lessThan", nombreAvantFiltre);

      transactionsPage.amounts()
        .each(($amount) => {
          cy.wrap($amount).should("contain", "+");
        });
    });
  });

  it("réduit la liste quand on recherche un terme présent", () => {
    transactionsPage.items().then(($transactionsAvant) => {
      const nombreAvantRecherche = $transactionsAvant.length;

      transactionsPage.search("Jane");

      transactionsPage.items()
        .should("have.length.greaterThan", 0)
        .and("have.length.lessThan", nombreAvantRecherche);
    });
  });

  it("retrouve toutes les transactions après réinitialisation des filtres", () => {
    transactionsPage.items().then(($transactionsAvant) => {
      const nombreAvantFiltre = $transactionsAvant.length;

      transactionsPage.filterByType("sent");

      transactionsPage.items()
        .should("have.length.lessThan", nombreAvantFiltre);

      transactionsPage.reset();

      transactionsPage.items()
        .should("have.length", nombreAvantFiltre);
    });
  });

  it("filtre les transactions en attente ou affiche un état vide", () => {
    transactionsPage.filterByStatus("pending");

    transactionsPage.hasEmptyState().then((etatVidePresent) => {
      if (etatVidePresent) {
        transactionsPage.emptyState()
          .should("be.visible")
          .and("contain", "Aucune transaction trouvée");
      } else {
        transactionsPage.items()
          .should("have.length.greaterThan", 0);

        transactionsPage.pendingStatus()
          .should("be.visible");
      }
    });
  });
});