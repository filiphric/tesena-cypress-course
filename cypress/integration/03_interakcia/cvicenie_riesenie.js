/// <reference types="cypress" />

/*
  ⚠️ vytvor si nový board a vypracuj nasledujúce úlohy
  pomocou .only si môžeš spustiť jeden test
  ℹ️ medzi jednotlivými stavmi si budeš musieť aplikáciu vrátiť do pôvodného stavu
  pomocou klávesy F2 si otvor nástroje, ktoré Ti s tým pomôžu
*/

// úloha #1: vytvor si nový zoznam (list) vo svojom boarde
it('vytvorenie nového zoznamu', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy="add-list-input"]')
    .type('Potraviny{enter}')

});

// úloha #2: vytvor si novú kartu v zozname
it('vytvorenie novej karty', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('mlieko{enter}')

});

// challenge #3: premenovanie boardu
it('premenovanie boardu', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy="board-title"]')
    .clear()
    .type('Nakúpené{enter}')

});

// challenge #4: odstránenie boardu
it('odstránenie boardu', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy="board-options"]')
    .click()

  cy.get('[data-cy="delete-board"]')
    .click()

});

// challenge #5: otvor kartu a zmeň jej popis (description)
it('zmena popisu karty', () => {

  cy.visit('/board/987654321?card=56149928812')

  cy.get('[data-cy="card-description"]')
    .type('Spomenúť .clear() príkaz{enter}')

});

