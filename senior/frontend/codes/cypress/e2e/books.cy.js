describe('Books Page', () => {
  it('should load books from the API and filter by author', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[placeholder="Filtrar por autor"]').type('orwell');
    cy.wait(500); // aguarda debounce
    cy.contains('1984').should('exist');
  });
});
