/// <reference types="cypress" />

beforeEach( () => {

  cy.request('POST', '/api/reset')
  cy.request('POST', '/api/boards', { name: 'new board' })
    .its('body.id')
    .as('boardId')

})

it('vytvorenie nového listu a novej karty', function() {

  cy.visit(`/board/${this.boardId}`)

  cy.get('[data-cy="add-list-input"]')
    .type('Potraviny{enter}')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('mlieko{enter}')
  
});