export const board = {
  star(number = 0) {
    cy.get('[data-cy=star]')
      .eq(number)
      .click({force: true})

    return this
  },
  open(number = 0) {
    cy.get('[data-cy=board-item]')
      .eq(number)
      .click()
  }
}