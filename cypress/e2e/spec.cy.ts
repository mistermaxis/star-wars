describe('Main Page', () => {
  before(() => {
    cy.visit('localhost:3000');
  })

  it('displays the main page', () => {
    cy.contains('Planets');
  });

  it('queries the API', () => {
    cy.get('.MuiOutlinedInput-root')
      .find('input')
      .focus()
      .type('Tat');
    cy.contains('Tatooine');
  });

  it('adds selection to the list', () => {
    cy.contains('Tatooine').click();
    cy.get('.MuiCardHeader-title').contains('Tatooine');
  });

  it('disables selected item', () => {
    cy.get('[title="Clear"]').click();

    cy.get('.MuiOutlinedInput-root')
      .find('input')
      .focus()
      .type('Tat');
    cy.get('[aria-disabled="true"]').contains('Tatooine');
  });

  it('deletes list item', () => {
    cy.get('.MuiButton-containedPrimary').contains('Delete').click();
    cy.get('.MuiCard-root').should('not.exist');
  });

  it('enables deleted item', () => {
    cy.get('.MuiOutlinedInput-root')
    .find('input')
    .focus()
    .type('Tat');
    cy.get('[aria-disabled="false"]').contains('Tatooine');
  });
});
