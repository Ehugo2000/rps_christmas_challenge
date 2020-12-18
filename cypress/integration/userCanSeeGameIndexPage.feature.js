/* eslint-disable no-undef */
describe('User can see welcome header and play-buttons', () => {
  before(() => {
    cy.visit("/")
  })

  it('when user visit the application', () => {
    cy.get('[data-cy="rps-header"]').should("contain", "Welcome to RPS game!");
    cy.get('[data-cy="rock-btn"]').should("contain", "Rock");
    cy.get('[data-cy="paper-btn"]').should("contain", "Paper");
    cy.get('[data-cy="scissor-btn"]').should("contain", "Scissor");
  })
})
