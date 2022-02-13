/// <reference types="cypress" />

beforeEach( () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('bread{enter}')

})

it('vytvorenie karty', () => {

  

  cy.get('[data-cy="card"]')
    .should('be.visible')

})

it('overenie počtu kariet', () => {

  cy.get('[data-cy="new-card-input"]')
    .type('tomatoes{enter}')

  cy.get('[data-cy="card"]')
    .should('have.length', 2)

})

it('overenie stavu checkboxu', () => {

  cy.get('[data-cy="card-checkbox"]')
    .check()

  cy.get('[data-cy="card-checkbox"]')
    .should('be.checked')

  cy.get('[data-cy="due-date"]')
    .should('have.class', 'completed')

})

it.only('overenie názvu listu', () => {

  cy.get('[data-cy="list-name"]')
    .should('have.value', 'Groceries')

  cy.get('[data-cy=card-text]')
    .should('have.text', 'bread')

})