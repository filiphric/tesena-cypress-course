/// <reference types="cypress" />

beforeEach( () => {

  cy.visit('/board/123456789')

})

it('kontrola textu prvej karty', () => {

  cy
    .get('[data-cy="card-text"]')
    .eq(0)
    .then( cardText => {
      expect(cardText).to.have.text('Milk')
    })

});

it('kontrola textu všetkých kariet v prvom zozname', () => {

  cy
    .get('[data-cy=card-text]')
    .should( cards => {
      expect(cards[0]).to.have.text('Milk')
      expect(cards[1]).to.have.text('Juice')
      expect(cards[2]).to.have.text('Bread')
    })

});

it.only('kontrola textu všetkých kariet', () => {

  const texts = ['Milk', 'Bread', 'Juice', 'Shampoo', 'Soap']

  cy
    .get('[data-cy=card-text]')
    .then( cards => {
      Array.from(cards).forEach( (card, i) => {
        expect(card).to.have.text(texts[i])
      })
    })

});