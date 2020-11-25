///<reference types="cypress"/>
import tester from '../common/TERCEIRO-DESAFIO'


// Given('que a aplicacao seja acessada', () => {
//   tester.acessaAplicacao()
// });

When('tentar inserir {string} com {string}', (item, data) => {
  cy.get('#title').as('entrada').type(item)
  // cy.get('#Select\ a\ date').type(data)
  cy.get('.ant-picker').type(data)
  cy.get('#root > :nth-child(2)').click()
  cy.get('.ant-form > :nth-child(3) > .ant-btn').as('adicionar').click()
});

Then('o {string} é inserido', (resultado) => {
  cy.get('body').should('contain', resultado)
});
