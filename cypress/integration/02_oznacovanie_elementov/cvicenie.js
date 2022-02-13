/// <reference types="cypress" />

// ⚠️ pomocou zmeny "it" na "it.only" si vieš spustiť jeden test
// challenge #1: označ štvorec pomocou classy, kruh pomocou idčka, trojuholník pomocou atribútu a nadpis pomocou textu
it('class, id, attr', { baseUrl: null }, () => {

  cy.visit('./mini-apps/shapes.html');

})

// challenge #2: in this example, try to select a specific element by chaining off pre-written príkazu .get() 
it('cypress príkazy', { baseUrl: null }, () => {

  cy.visit('./mini-apps/rainbow.html');

  // označ červený element pomocou príkazu .first()
  cy.get('li')

  // označ ružový (violet) element pomocou príkazu .last() 
  cy.get('li')

  // select žltý element pomocou príkazu .eq() 
  cy.get('li')

  // select modrý element pomocou príkazu .next() 
  cy.get('.green')

  // select žltý element pomocou príkazu .prev() 
  cy.get('.green')

  // vyfiltruj všetky primárne farby pomocou príkazu .filter(). všetky tieto farby majú classu "primary"
  cy.get('li')

  // vyfiltruj si všetky sekundárne farby pomocou príkazu .not(). všetky tieto farby NEMAJÚ classu "primary"
  cy.get('li')

  // oznaž zelený element pomocou príkazu .find() 
  cy.get('.list')

  // označ celý zoznam (má classu "list") pomocou príkazu .parent() 
  cy.get('.violet')

  // 💯 extra credit challenge: choď na docs.cypress.io and nájdi si príkaz .contains()
  // skús nájsť spôsob ako si označiť modrý element, ale bez toho, aby si odstránil 'e' parameter v príkaze
  cy.contains('e')

});