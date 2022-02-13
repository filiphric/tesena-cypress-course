/// <reference types="cypress" />

beforeEach(() => {

  cy.request('POST', '/api/boards', { name: 'new board' })
    .as('board')

}) 

it('vytvorenie nového zoznamu', function() {

  cy.request('POST', '/api/lists', {
    name: 'new list',
    boardId: this.board.body.id
  })

})