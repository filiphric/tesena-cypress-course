/// <reference types="cypress" />

// #1: vytvor si tri nové príkazy. jeden na vytvorenie boardu
// druhý na vytvorenie listu a tretí na vytvorenie karty
// použi ich v teste

Cypress.Commands.add('addBoard', (boardName) => {

  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type(`${boardName}{enter}`)
  
})
Cypress.Commands.add('addList', (listName) => {

  cy.get('[data-cy=add-list-input]')
    .type(`${listName}{enter}`)
  
})
Cypress.Commands.add('addCard', (cardName) => {

  cy.get('[data-cy=new-card]')
    .click()

  cy.get('[data-cy=new-card-input]')
    .type(`${cardName}{enter}`)
  
})

beforeEach( () => {
  cy.request('POST', '/api/reset')
})

it('vytvorenie nového boardu, listu a karty', () => {

  cy.visit('/')
  cy.addBoard('new board')
  cy.addList('new list')
  cy.addCard('new card')
  
});