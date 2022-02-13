/// <reference types="cypress" />

it('otvorenie karty s dátumom 1. marca', () => {

  cy.visit('/board/123456789')
    
})

it.only('pomalé načítanie kariet', () => {
  
  cy.visit('/board/123456789')

  cy.get('[data-cy=card-text]')
    .should('have.length', 5)
  
});

it('nestabilné načítanie kariet', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy=card-text]')
    .eq(1)
    .should('contain.text', 'Bread')
  
});

