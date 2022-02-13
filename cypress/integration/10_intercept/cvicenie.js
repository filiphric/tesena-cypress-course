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

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('karta{enter}')
  
});

// #2: zaškrtni vytvorenú kartu pomocou UI a použi .intercept() príkaz
// na odsledovanie http requestu. nakoniec otestuj jeho status kód
it('zaškrtnutie karty', function() {

  cy.visit(`/board/${this.boardId}`)
  
  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('mlieko{enter}')

  cy.get('[data-cy="card-checkbox"]')
    .check()

});

// #3: over si, že pri vytvorení nového listu sa
// na server odošle boardId
it('vytvorenie nového zoznamu', function() {

  cy.visit(`/board/${this.boardId}`)

  cy.get('[data-cy="create-list"]')
    .click()

  cy.get('[data-cy="add-list-input"]')
    .type('list 2{enter}')
  
});

// #4: odstráň list a over si, že sa zo servera vrátil správny status kód
it('odstránenie listu', function() {

});