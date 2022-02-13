/// <reference types="cypress" />

it('class, id, attr', { baseUrl: null }, () => {

  cy
    .visit('./mini-apps/shapes.html');

  cy.contains('Shapes')

  cy.get('h1')

  cy.get('.square')
  cy.get('#circle')
  cy.get('[data-cy=triangle]')

})

it.only('cypress príkazy', { baseUrl: null }, () => {

  cy
    .visit('./mini-apps/rainbow.html');

  // označenie prvého elementu
  cy
    .get('li')
    .first()

  // označenie pomocou indexu
  cy
    .get('li')
    .eq(2)

  // vyhľadanie child elementu
  cy
    .get('.list')
    .find('.blue')

  // vyhľadanie parent elementu
  cy
    .contains('violet')
    .parent('.list')

});