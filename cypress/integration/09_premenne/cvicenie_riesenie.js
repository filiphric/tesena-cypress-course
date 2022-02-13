/// <reference types="cypress" />

// #1: v beforeEach si vytvor cez API nový board a prirať mu alias
beforeEach( function() {

  cy.request('POST', '/api/boards', { name: 'new board '})
    .its('body.id')
    .as('boardId')

}) 

// #2: otvor vytvorený board použitím aliasu
it('otvorenie boardu', function() {

  cy.visit(`/board/${this.boardId}`)
  
})

// #3: vytvor nový list priradený do vytvoreného boardu
it('vytvorenie nového listu', function() {

  cy.request('POST', '/api/lists', { name: 'new list', boardId: this.boardId })
    .its('status')
    .should('eq', 201)

})

// #4: vytvor nový list a novú kartu priradené do vytvoreného boardu
it('vytvorenie nového listu a novej karty', function() {

  cy.request('POST', '/api/lists', { name: 'new list', boardId: this.boardId })
    .its('body.id')
    .then( listId => {
    
      cy.request('POST', '/api/cards', { 
        name: 'new card',
        boardId: this.boardId,
        listId
      })

  })
  
})

// #5: vytvor si list, kartu, otvor si nový board a over si, 
// že detail karty obsahuje názov listu
it('zobrazenie názvu listu v detaile karty', function() {

  cy.request('POST', '/api/lists', { name: 'new list', boardId: this.boardId })
    .its('body')
    .then( ({ id, name }) => {
    
      cy.request('POST', '/api/cards', { 
        name: 'new card',
        boardId: this.boardId,
        listId: id
      })

      cy.visit(`/board/${this.boardId}`)

      cy.get('[data-cy=card]')
        .click()

      cy.get('[data-cy=card-list-name]')
        .should('have.text', name)

  })

})