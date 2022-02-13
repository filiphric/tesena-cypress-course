/// <reference types="cypress" />

it('vytvorenie nového zoznamu', function() {

  cy.request('POST', '/api/boards', { name: 'new board' })
    .then( ({ body }) => {

      cy.request('POST', '/api/lists', {
        name: 'new list',
        boardId: body.id
      })

    })


})