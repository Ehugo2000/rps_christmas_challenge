describe("User can see result", () => {
  before(() => {
    cy.visit("/");
  });

  it("displayed in ResultDisplay component", () => {
    cy.get('[data-cy="display-user-choice"]').should("contain", "You chose rock");
    cy.get('[data-cy="display-computer-choice"]').should("contain", "Computer chose paper");

    
  });
});