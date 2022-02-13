/// <reference types="cypress" />

// #1: nastav si test tak, aby sa pred každým testom zresetovali dáta
beforeEach( () => {
  cy.request('POST', '/api/reset')
})

// #2: vytvor si nový board pomocou API. over si, že príkaz created
// nám vráti string
it('dátum vytvorenia vytvoreného boardu je string', () => {

  cy.request('POST', '/api/boards', { name: 'new board' })
    .then( board => {
      expect(board.body.created).to.be.a('string')
    })
  
});

// #3: urob dva requesty. prvým si vytvor board a druhým si 
// over počet boardov vo svojej aplikácii
it('api vracia správny počet boardov', () => {
  
  cy.request('POST', '/api/boards', { name: 'new board' })
  cy.request('POST', '/api/boards', { name: 'new board' })
  cy.request({
    method: 'GET',
    url: '/api/boards',
    headers: {
      accept: 'application/json'
    }
  }).its('body')
    .should('have.length', 2)

});

// #4: vytvor si pomocou requestu board a list. príkaz .request()
// pre vytvorenie nového listu budeš musieť vnoriť do príkazu .then()
it('vytvorenie listu', () => {
  
  cy.request('POST', '/api/boards', { name: 'new board' })
    .then( board => {

      cy.request({
        method: 'POST',
        url: '/api/lists',
        body: {
          name: 'new list',
          boardId: board.body.id
        }
      })

    })

});

// 💯 extra challege: použi query parameter, pomocou ktorého 
// si z API načítaš iba ohviezdičkované boardy (tie, ktore majú 
// atribút starred: true) ak si taký board v rámci testu 
// neohviezdičkuješ, vráti sa Ti prázdny zoznam
it('filtrovanie boardov', () => {

  cy.request('POST', '/api/boards', { name: 'new board' })
  cy.request('POST', '/api/boards', { name: 'new board' })

  cy.request({
    method: 'GET',
    url: '/api/boards?starred=true',
    headers: {
      accept: 'application/json'
    }
  }).its('body')
    .should('have.length', 0)

  
});