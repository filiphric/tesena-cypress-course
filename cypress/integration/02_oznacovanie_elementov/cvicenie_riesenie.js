/// <reference types="cypress" />

// ⚠️ pomocou zmeny "it" na "it.only" si vieš spustiť jeden test
// challenge #1: označ štvorec pomocou classy, kruh pomocou idčka, trojuholník pomocou atribútu a nadpis pomocou textu
it('class, id, attr', { baseUrl: null }, () => {

  cy.visit('./mini-apps/shapes.html');

  cy.get('.square')
  cy.get('#circle')
  cy.get('[data-cy=triangle]')
  cy.get('h1')
  cy.contains('shapes')

})

// challenge #2: in this example, try to select a specific element by chaining off pre-written príkazu .get() 
it.only('cypress príkazy', { baseUrl: null }, () => {

  cy.visit('./mini-apps/rainbow.html');

  // označ červený element pomocou príkazu .first()
  cy.get('li').first()

  // označ ružový (violet) element pomocou príkazu .last() 
  cy.get('li').last()

  // select žltý element pomocou príkazu .eq() 
  cy.get('li').eq(2)

  // select modrý element pomocou príkazu .next() 
  cy.get('.green').next()

  // select žltý element pomocou príkazu .prev() 
  cy.get('.green').prev()

  // vyfiltruj všetky primárne farby pomocou príkazu .filter(). všetky tieto farby majú classu "primary"
  cy.get('li').filter('.primary')

  // vyfiltruj si všetky sekundárne farby pomocou príkazu .not(). všetky tieto farby NEMAJÚ classu "primary"
  cy.get('li').not('.primary')

  // oznaž zelený element pomocou príkazu .find() 
  cy.get('.list').find('.green')

  // označ celý zoznam (má classu "list") pomocou príkazu .parent() 
  cy.get('.violet').parent('.list')

  // 💯 extra credit challenge: choď na docs.cypress.io and nájdi si príkaz .contains()
  // skús nájsť spôsob ako si označiť modrý element, ale bez toho, aby si odstránil 'e' parameter v príkaze
  cy.contains('.indigo', 'e')

});