# Testes Automatizados de Login - Cypress 🧪

Este projeto contém testes automatizados de login desenvolvidos com Cypress, utilizando como base o site [Adopet](https://adopet-pet.vercel.app/).

## Objetivo

Criar testes end-to-end para validar o comportamento do sistema de login, simulando interações reais de um usuário.

## Tecnologias

- Cypress
- JavaScript
- Node.js

## Estrutura de Testes

Os testes estão na pasta `cypress/e2e`, atualmente com foco em:

- Login com credenciais válidas
- Login com e-mail inválido
- Campos obrigatórios não preenchidos
- Mensagens de erro visíveis

## Como executar

```bash
# Instalar dependências
npm install

# Executar testes no modo interativo
npx cypress open
