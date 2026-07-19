# 🚀 ZotoBank Cypress Automation

Projet d'automatisation de tests end-to-end réalisé avec **Cypress** dans le cadre de ma montée en compétences en automatisation des tests.

![Cypress](https://img.shields.io/badge/Cypress-15-green)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-passing-success)
![Allure](https://img.shields.io/badge/Allure-Report-blue)

L'objectif de ce projet est de mettre en œuvre les bonnes pratiques d'un framework Cypress moderne :

- Architecture Page Object Model
- Commandes personnalisées
- Fixtures
- Sessions Cypress
- Rapports Allure
- Intégration Continue avec GitHub Actions
- Publication automatique des rapports via GitHub Pages

---

# 📋 Technologies utilisées

- Cypress 15
- JavaScript
- Node.js
- Git & GitHub
- GitHub Actions
- Allure Report

---

# 📁 Structure du projet

```text
cypress/
│
├── e2e/
│   ├── Connexion/
│   ├── transaction/
│   ├── beneficiaires/
│   └── demo/
│
├── fixtures/
│   └── users.json
│
├── pages/
│   ├── TransactionsPage.js
│   └── BeneficiairesPage.js
│
└── support/
    ├── commands.js
    └── e2e.js
```

---

# ✅ Fonctionnalités automatisées

## Authentification

- Connexion réussie
- Champs obligatoires
- Sensibilité à la casse
- Gestion des espaces
- Navigation vers l'inscription

## Transactions

- Affichage de la liste
- Recherche
- Filtres
- Réinitialisation
- Consultation du détail
- Nouvelle transaction

## Bénéficiaires

- Consultation de la liste
- Ouverture du formulaire
- Gestion d'un utilisateur inexistant

---

# 🏗️ Bonnes pratiques mises en œuvre

- ✔ Page Object Model
- ✔ Commandes personnalisées (`cy.login()`)
- ✔ Fixtures (`users.json`)
- ✔ Gestion de plusieurs utilisateurs
- ✔ Utilisation de `cy.session()`
- ✔ Séparation des données de test
- ✔ Tests lisibles et maintenables

---

# ⚙️ Intégration Continue

Le projet utilise **GitHub Actions**.

À chaque `git push` :

1. Installation des dépendances
2. Vérification de la disponibilité de l'application
3. Exécution des tests Cypress
4. Génération du rapport Allure
5. Publication automatique sur GitHub Pages

---

# 📊 Rapport Allure

Le rapport est disponible ici :

👉 **https://oliviajohnson3.github.io/ZotobankCypress/**

---

# ▶️ Installation

```bash
npm install
```

---

# ▶️ Exécuter Cypress

Mode interactif

```bash
npx cypress open
```

Mode headless

```bash
npx cypress run
```

---

# 📈 Générer un rapport Allure en local

```bash
npx cypress run --env allure=true
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

---

# 👩‍💻 À propos

Projet réalisé par **Olivia Johnson**

QA Fonctionnelle Senior (10+ années d'expérience)

En cours de spécialisation en **QA Automation** avec Cypress et Playwright.