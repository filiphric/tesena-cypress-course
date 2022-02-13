/// <reference types="cypress" />

it('zoznam boardov', () => {

  cy.intercept({
    method: 'GET', 
    url: '/api/boards'
  }, {
      fixture: 'twoBoards'
    })
    .as('boardList')

  cy.visit('/');

})

it('chybová hláška pri vytvorení boardu', () => {

  cy.intercept('POST', '/api/boards', {
      forceNetworkError: true
    })
    .as('boardCreate')

  cy.visit('/');

  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type('nova zahrada{enter}')

  cy.get('[data-cy="notification-message"]')
    .should('be.visible')

})

it('reload načítavania', () => {

  cy.intercept({
      method: 'GET',
      url: '/api/boards',
      times: 1
    }, (req) => {
      req.reply(res => {

        res.delay = 8000

      })
    }).as('boards')

  cy.visit('/')

  cy.contains('Reload?')
    .click()
  
});