const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Define a URL base para facilitar os comandos cy.visit()
    // Assim, você pode usar caminhos relativos no seu teste, ex:
    // cy.visit('/practice-test-login/')
    baseUrl: "https://practicetestautomation.com",

    // Função para configurar eventos do Node, como plugins, relatórios, etc.
    // Por enquanto está vazia, mas pode ser usada para adicionar funcionalidades extras
    setupNodeEvents(on, config) {
      // implementar event listeners aqui, se necessário
    },
  },
});
