///<reference types="cypress"/>
import tester from '../common/APP1-D3'

When('tentar inserir {string} com {string}', (item, data) => {

  cy.get('#title').as('entrada').type(item).clear().type(item)
  cy.get('.ant-picker').type(data)
  cy.get('#root > :nth-child(2)').click()
  cy.get('.ant-form > :nth-child(3) > .ant-btn').as('adicionar').click()
});

Then('o {string} é inserido', (resultado) => {
  cy.get('body').should('contain', resultado)
  //DICA DESABILITEI O SCREENSHOT ABAIXO PARA NÃO FICAR PRINTANDO DURANTE A CONSTRUÇÃO DOS TESTES
  // cy.screenshot()
});
