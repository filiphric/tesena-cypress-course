/// <reference types="cypress" />

it('vytvorenie novej karty', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('mlieko{enter}')
  
});

it('board neobsahuje listy', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy=list]')
    .should('not.exist')
  
});

it('odstránenie listu', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy="list-options"]')
    .click()

  cy.get('[data-cy="delete-list"]')
    .click()

});