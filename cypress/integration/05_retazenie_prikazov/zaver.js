/// <reference types="cypress" />
import { cardsLoadRandomly, cardsLoadSlowly } from '../../../workshop-scripts/evilCode'

it('otvorenie karty s dátumom 1. marca', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy=list]')
    .eq(1)
    .contains('Mar 01 2022')
    .click()
    
})

it('pomalé načítanie kariet', () => {
  
  cardsLoadSlowly(5000)

  cy.visit('/board/123456789')

  cy.get('[data-cy=card-text]', { timeout: 6000 })
    .should('have.length', 5)
  
});

it('nestabilné načítanie kariet', () => {

  cardsLoadRandomly(3000) 

  cy.visit('/board/123456789')

  cy.get('[data-cy=card-text]')
    .should('contain.text', 'Bread')
  
});

