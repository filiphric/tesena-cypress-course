/// <reference types="cypress" />

beforeEach( function() {

  cy.request('POST', '/api/reset')
  cy.request('POST', '/api/boards', { name: 'new board' })
    .its('body.id')
    .as('boardId')
    .then( boardId => {

      cy.request('POST', '/api/lists', {
        boardId,
        name: 'new list'
      })

    })

})

// #1: vytvor kartu pomocou UI a použi .intercept() príkaz
// na odsledovanie http requestu. nakoniec otestuj jeho status kód
// a niektoré atribúty vytvorenej karty
it('vytvorenie karty', function() {

  cy.visit(`/board/${this.boardId}`)

  cy.intercept('POST', '/api/cards')
    .as('createCard')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('karta{enter}')

  cy.wait('@createCard')
    .then( ({ response, request }) => {

      expect(request.body.boardId).to.eq(this.boardId)
      expect(response.statusCode).to.eq(201)
      expect(response.body.description).to.be.empty

    })
  
});

// #2: zaškrtni vytvorenú kartu pomocou UI a použi .intercept() príkaz
// na odsledovanie http requestu. nakoniec otestuj jeho status kód
it('zaškrtnutie karty', function() {

  cy.visit(`/board/${this.boardId}`)

  cy.intercept('PATCH', '/api/cards/*').as('checkCard')
  
  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('mlieko{enter}')

  cy.get('[data-cy="card-checkbox"]')
    .check()

  cy.wait('@checkCard')
    .its('response.statusCode')
    .should('eq', 200)

});

// #3: over si, že pri vytvorení nového listu sa
// na server odošle boardId
it('vytvorenie nového zoznamu', function() {

  cy.visit(`/board/${this.boardId}`)

  cy.intercept('POST', '/api/lists')
    .as('createList')

  cy.get('[data-cy="create-list"]')
    .click()

  cy.get('[data-cy="add-list-input"]')
    .type('list 2{enter}')

  cy.wait('@createList')
    .its('request.body.boardId')
    .should('eq', this.boardId)
  
});

// #4: odstráň list a over si, že sa zo servera vrátil správny status kód
it('odstránenie listu', function() {

  cy.intercept('DELETE', '/api/lists/*').as('deleteList')

  cy.visit(`/board/${this.boardId}`)

  cy.get('[data-cy="list-options"]')
    .click()

  cy.get('[data-cy="delete-list"]')
    .click()

  cy.wait('@deleteList')
    .its('response.statusCode')
    .should('eq', 200)
  
});