describe("User can see result", () => {
  before(() => {
    cy.visit("/");
  });

  it("displayed in ResultDisplay component", () => {
    cy.get('[data-cy="display-user-choice"]').should("contain", "You chose rock");
    
  });
});