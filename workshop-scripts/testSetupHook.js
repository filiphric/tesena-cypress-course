const singleBoard = require('./fixtures/singleBoard.json')
const singleBoardSingleList = require('./fixtures/singleBoardSingleList.json')
const singleBoardTwoListsFiveCards = require('./fixtures/singleBoardTwoListsFiveCards.json')
const twoBoards = require('./fixtures/twoBoards.json')
const empty = require('./fixtures/empty.json')

const beforeTestSeeds = {
  'cypress/integration/03_interakcia/zaciatok.js': twoBoards,
  'cypress/integration/03_interakcia/zaver.js': twoBoards,
  'cypress/integration/03_interakcia/cvicenie_riesenie.js': twoBoards,
  'cypress/integration/04_overovanie/cvicenie.js': singleBoard,
  'cypress/integration/05_retazenie_prikazov/zaciatok.js': singleBoardTwoListsFiveCards,
  'cypress/integration/05_retazenie_prikazov/zaver.js': singleBoardTwoListsFiveCards,
  'cypress/integration/05_retazenie_prikazov/cvicenie.js': singleBoardTwoListsFiveCards,
  'cypress/integration/05_retazenie_prikazov/cvicenie_riesenie.js': singleBoardTwoListsFiveCards,
  'cypress/integration/06_chai_kniznica/zaciatok.js': singleBoardTwoListsFiveCards,
  'cypress/integration/06_chai_kniznica/zaver.js': singleBoardTwoListsFiveCards,
  'cypress/integration/06_chai_kniznica/cvicenie.js': singleBoardTwoListsFiveCards,
  'cypress/integration/06_chai_kniznica/cvicenie_riesenie.js': singleBoardTwoListsFiveCards,
  'cypress/integration/10_intercept/zaciatok.js': singleBoardSingleList,
  'cypress/integration/10_intercept/zaver.js': singleBoardSingleList,
}

const beforeEachTestSeeds = {
  'cypress/integration/04_overovanie/zaciatok.js': singleBoardSingleList,
  'cypress/integration/04_overovanie/zaver.js': singleBoardSingleList,
  'cypress/integration/07_testovanie_dom/zaciatok.js': singleBoardTwoListsFiveCards,
  'cypress/integration/07_testovanie_dom/zaver.js': singleBoardTwoListsFiveCards,
  'cypress/integration/07_testovanie_dom/cvicenie.js': singleBoardTwoListsFiveCards,
  'cypress/integration/07_testovanie_dom/cvicenie_riesenie.js': singleBoardTwoListsFiveCards,
  'cypress/integration/11_nahradzovanie_odpovede/zaciatok.js': singleBoard,
  'cypress/integration/11_nahradzovanie_odpovede/zaver.js': singleBoard,
}

before( () => {

  const dbState = beforeTestSeeds[`${Cypress.spec.relative}`]

  if (dbState) {
    cy.task('setupDb', dbState, { log: false })
    cy.info('💡 Naplnil som Ti databázu dátami pre toto cvičenie', dbState)
  }

})

beforeEach( () => {

  const dbState = beforeEachTestSeeds[`${Cypress.spec.relative}`]

  if (dbState) {
    cy.task('setupDb', dbState, { log: false })
    cy.info('💡 Naplnil som Ti databázu dátami pre toto cvičenie', dbState)
  }

})
