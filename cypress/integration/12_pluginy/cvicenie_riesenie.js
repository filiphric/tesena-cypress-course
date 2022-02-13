/// <reference types="cypress" />

// #1: nainštaluj si cypress-real-events plugin
// pomocou ktorého môžeš simulovať eventy ako sú hover
// swipe a podobne. pomocou tohto pluginu nasimuluj
// hover nad board elementom a klikni na hviezdičku
it('bookmarknutie boardu', () => {

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .eq(0)
    .realHover()

  cy.get('[data-cy=star]')
    .eq(0)
    .click()
  
});