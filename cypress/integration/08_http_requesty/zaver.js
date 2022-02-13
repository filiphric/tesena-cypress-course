/// <reference types="cypress" />

it('vytvorenie boardu cez API', () => {

  cy.request({
    method: 'POST',
    url: '/api/boards',
    body: {
      name: 'board vytvorený cez api'
    }
  })

  cy.visit('/')
  
});

it('API testovanie zoznamu boardov', () => {

  cy.request({
    method: 'GET',
    url: '/api/boards',
    headers: {
      accept: 'application/json'
    }
  }).then( (board) => {

    expect(board.status).to.eq(200)
    expect(board.body).to.have.length(1)
    expect(board.body[0].created).to.eq('2022-02-21')
    expect(board.body[0].id).to.be.a('number')
    expect(board.body[0].starred).to.be.false
    expect(board.body[0].user).to.eq(0)

  })

})

it('zresetovanie aplikácie', () => {

  cy.request('POST', '/api/reset')
    .its('status')
    .should('eq', 204)

  cy.visit('/')
  
});