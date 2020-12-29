/* eslint-disable no-undef */
describe("User can choose a move", () => {
  before(() => {
    cy.visit("/");
  });

  it("when clicking on one of three PlayButtons", () => {
    cy.get('[data-cy="rock-btn"]').click();
    cy.get('[data-cy="paper-btn"]').click();
    cy.get('[data-cy="scissor-btn"]').click();
  });
});
