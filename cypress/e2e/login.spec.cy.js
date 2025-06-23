describe('Login - Practice Test Automation', () => {
  it('Deve exibir mensagem de erro com credenciais inválidas', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');

    cy.get('#username').type('usuariodebugado');
    cy.get('#password').type('senhaincorreta');

    cy.get('#submit').click({ force: true });

    cy.get('#error').should('contain.text', 'Your username is invalid!');
  });
});




