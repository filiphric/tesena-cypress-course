/// <reference types="cypress" />
// ⚠️ databáza je v tomto teste naplnená dátami pred každým testom

beforeEach( () => {
  cy.visit('/board/123456789')
}) 
// #1: zrefaktoruj tento test tak, aby použil jediný .then prikaz
it('karty obsahujú správne texty', () => {

    cy.get('[data-cy=list]')
      .eq(0)
      .find('[data-cy=card-text]')
      .as('cards')
  
    cy.get('@cards')
      .eq(0)
      .should('have.text', 'Milk')
  
    cy.get('@cards')
      .eq(1)
      .should('have.text', 'Bread')
    
    cy.get('@cards')
      .eq(2)
      .should('have.text', 'Juice')
  
  })

// #2: zrefaktoruj tento test na kontrolu checkboxov tak, aby použil jediný .then prikaz
it('karty sú zašktrnuté', () => {

  cy.get('[data-cy=list]')
    .eq(0)
    .find('[data-cy=card-checkbox]')
    .as('card-checkboxes')

  cy.get('@card-checkboxes')
    .eq(0)
    .should('be.checked')

  cy.get('@card-checkboxes')
    .eq(2)
    .should('be.checked')

});

// #3: skontroluj počet zoznamov a ich názvy pomocou príkazu .then()
it('počet zoznamov a ich názvy', () => {

})

// #4: skontroluj viditeľnosť zoznamov pomocou príkaz .then() 
it('viditeľnosť zoznamov', () => {
  
})