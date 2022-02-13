/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/123456789');

})

// #1: vytvor nový zoznam a over, že je viditeľný
it('vytvorenie zoznamu', () => {

  cy.get('[data-cy="add-list-input"]')
    .type('Groceries{enter}')

  cy.get('[data-cy="list"]')
    .should('be.visible')

})

// #2: vytvor si ešte jeden zoznam a over, že sú na stránke dva
it('overenie počtu zoznamov', () => {

  cy.get('[data-cy="list"]')
    .should('have.length', 1)

})

// #3: začni tento test s jediným zoznamom na stránke. odstráň ho a over si, že naozaj zmizol
it('odstránenie zoznamu', () => {

  cy.get('[data-cy="list-options"]')
    .click()

  cy.get('[data-cy="dropdown"]')
    .should('be.visible')

  cy.get('[data-cy="delete-list"]')
    .click()

  cy.get('[data-cy="list"]')
    .should('not.exist')

})

// #4: vytvor si zoznam a kartu. na kartu klikni a over si, že sa Ti otvoril detail karty
it('overenie zobrazenia detailu karty', () => {

  cy.get('[data-cy=card]')
    .click()

  cy.get('[data-cy="card-detail"]')
    .should('be.visible')

})

// #5: otvor si detail karty a opäť ho zavri. over si, že detail karty zo stránky zmizol
it('closing the card', () => {

  cy.get('[data-cy=card]')
    .click()

  cy.get('[data-cy="cancel"]')
    .click()

  cy.get('[data-cy="card-detail"]')
    .should('not.exist')

})