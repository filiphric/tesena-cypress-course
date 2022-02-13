/// <reference types="cypress" />

Cypress.Commands.add('dataCy', (selector) => {

  cy.get(`[data-cy=${selector}]`)

})

beforeEach( () => {

  cy.request('POST', '/api/reset')
  cy.request('POST', '/api/boards', { name: 'new board' })
    .its('body.id')
    .as('boardId')

})

it('vytvorenie nového listu a novej karty', function() {

  cy.visit(`/board/${this.boardId}`)

  cy.dataCy('add-list-input')
    .type('Potraviny{enter}')

  cy.dataCy('new-card')
    .click()

  cy.dataCy('new-card-input')
    .type('mlieko{enter}')
  
});