describe('Login - Adopet', () => {
  it('Deve exibir mensagem de erro com credenciais inválidas', () => {
    cy.visit('/login');
    cy.get('input[name=email]').type('emailinvalido@email.com');
    cy.get('input[name=password]').type('senhaerrada');
    cy.get('button[type=submit]').click();

    cy.contains('E-mail e/ou senha inválidos').should('be.visible');
  });
});
