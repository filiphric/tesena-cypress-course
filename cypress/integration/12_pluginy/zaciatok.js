/// <reference types="cypress" />

import spok from 'cy-spok'

it('testovanie api', () => {

  const name = 'board vytvorený cez api'

  cy.request({
    method: 'POST',
    url: '/api/boards',
    body: { name }
  })
  
});
