/// <reference types="cypress" />

const longText = require('../../fixtures/longText.json')[0]

it('získanie atribútov elementu', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy=card-text]')
    .eq(0)
    .invoke('text')
    .invoke('toLowerCase')
    .should('contain', 'milk')
  
});

it('zavolanie jQuery funkcie nad elementom', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy=footer-link]')
    .invoke('prop', 'href')
    .should('eq', 'https://filiphric.com/')

})

it('narábanie s dlhým textom', () => {

  cy.visit('/board/123456789?card=77958252506')

  cy.get('[data-cy="card-description"]')
    .invoke('val', longText)

})

it.only('upload súboru', () => {

  cy.visit('/board/123456789?card=77958252506')

  cy.get('[data-cy="upload-image"]')
    .selectFile('cypress/fixtures/cypress_logo.png', { action: 'drag-drop' })

})
