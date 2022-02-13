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
      .then( cards => {
        expect(cards[0]).to.have.text('Milk')
        expect(cards[1]).to.have.text('Bread')
        expect(cards[2]).to.have.text('Juice')
      })
  
  })

// #2: zrefaktoruj tento test na kontrolu checkboxov tak, aby použil jediný .then prikaz
it('karty sú zašktrnuté', () => {

  cy.get('[data-cy=list]')
    .eq(0)
    .find('[data-cy=card-checkbox]')
    .as('card-checkboxes')

  cy.get('@card-checkboxes')
    .then( cards => {
      expect(cards[0]).to.be.checked
      expect(cards[2]).to.be.checked
    })

});

// #3: skontroluj počet zoznamov a ich názvy pomocou príkazu .then()
it('počet zoznamov a ich názvy', () => {

  cy.get('[data-cy=list-name')
    .then( lists => {

      expect(lists).to.have.length(2)
      expect(lists[0]).to.have.value('Groceries')
      expect(lists[1]).to.have.value('Drugstore')

    })

})

// #4: skontroluj viditeľnosť zoznamov pomocou príkaz .then() 
it('viditeľnosť zoznamov', () => {

  cy.get('[data-cy=list]')
    .then( list => {
      expect(list[0]).to.be.visible
      expect(list[1]).to.be.visible
    })
  
})