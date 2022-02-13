/// <reference types="cypress" />
import spok from 'cy-spok'

it('testovanie api', () => {

  const name = 'board vytvorený cez api'

  cy.api({
    method: 'POST',
    url: '/api/boards',
    body: { name }
  }).then(spok({
    body: {
      id: spok.type('number'),
      starred: false,
      name
    }
  }))
  
});
