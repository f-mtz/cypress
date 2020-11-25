///<reference types="cypress"/>
import tester from '../common/methods-desafio1'


Given('que a aplicacao seja acessada', () => {
  // tester.acessarAplicacao()
  cy.visit('https://just-another-todo-app.now.sh/')
});

When('tento adicionar o item {string}', (args1) => {
  cy.get('new-todo-item').type('awe')
});

Then('o item {string}', (args1) => {
});
