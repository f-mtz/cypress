///<reference types="cypress"/>
import tester from '../common/methods'

Given('que não exista nenhum item na lista TO DO', () => {
  tester.acessarAplicacao()
});

When('tento adicionar o item {string}', (novoItem) => {
  tester.adicionarItem(novoItem)
});

Then('o item {string}', (resultado) => {
  cy.get('body').should('not.contain', resultado)
});


