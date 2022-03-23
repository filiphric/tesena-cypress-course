import '../../workshop-scripts/testSetupHook'
import '../../workshop-scripts/infoCommand'

Cypress.Commands.add('dataCy', (selector) => {

  cy.get(`[data-cy=${selector}]`)

})