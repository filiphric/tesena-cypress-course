/// <reference types="cypress" />

beforeEach( () => {

  cy.visit('/board/123456789')

})

it('kontrola textu prvej karty', () => {

  cy
    .get('[data-cy="card-text"]')
    .eq(0)
    .should('have.text', 'Milk')
    
});

it('kontrola textu všetkých kariet v prvom zozname', () => {

  cy
    .get('[data-cy=card-text]')
    .eq(0)
    .should('have.text', 'Milk')

  cy
    .get('[data-cy=card-text]')
    .eq(1)
    .should('have.text', 'Bread')

  cy
    .get('[data-cy=card-text]')
    .eq(2)
    .should('have.text', 'Juice')

});

it('kontrola textu všetkých kariet', () => {

  const texts = ['Milk', 'Bread', 'Juice', 'Shampoo', 'Soap']

  cy
    .get('[data-cy=card-text]')

});