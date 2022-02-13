/// <reference types="cypress" />

it('zoznam boardov', () => {

  cy.intercept({
    method: 'GET', 
    url: '/api/boards'
  })
    .as('boardList')

  cy.visit('/');

})

it('chybova hláška pri vytvorení boardu', () => {

  cy.intercept('POST', '/api/boards')
    .as('boardCreate')

  cy.visit('/');

  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type('nova zahrada{enter}')

})

it('reload načítavania', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards'
  })
    .as('boards')

  cy.visit('/')
  
});