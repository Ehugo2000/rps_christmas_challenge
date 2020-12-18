/* eslint-disable no-undef */
describe("User can see result", () => {
  before(() => {
    cy.visit("/");
  });

  it("displayed in ResultDisplay component", () => {
    cy.get('[data-cy="rock-btn"]').click();
    cy.get('[data-cy="display-user-choice"]').should(
      "contain",
      "You chose rock"
    );
    cy.get('[data-cy="paper-btn"]').click();
    cy.get('[data-cy="display-user-choice"]').should(
      "contain",
      "You chose paper"
    );
    cy.get('[data-cy="scissor-btn"]').click();
    cy.get('[data-cy="display-user-choice"]').should(
      "contain",
      "You chose scissor"
    );
    cy.get('[data-cy="display-computer-choice"]').should(
      "contain",
      "Computer chose"
    );
  });
});
