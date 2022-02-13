/// <reference types="cypress" />

it('vytvorenie zoznamu a karty', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy="add-list-input"]')
    .type('Potraviny')

  cy.contains('Add list')
    .click()

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('chlieb{enter}')

});

it.only('označenie boardu hviezdičkou', () => {

  cy.visit('/')

  cy.get('[data-cy="star"]')
    .eq(0)
    .click({force: true})

})
