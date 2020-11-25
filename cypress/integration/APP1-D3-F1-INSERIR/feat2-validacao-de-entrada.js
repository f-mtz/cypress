///<reference types="cypress"/>
import tester from '../common/TERCEIRO-DESAFIO'

When('tentar inserir {string}', (descricao) => {
  cy.get('#title').as('entrada').type(descricao)
  // cy.get('#Select\ a\ date').type(data)
  // cy.get('.ant-picker').type(data)
  // cy.get('#root > :nth-child(2)').click()
  // cy.get('.ant-form > :nth-child(3) > .ant-btn').as('adicionar').click()
});

Then('o chegamos ao {string}', (resultado) => {
  cy.get('.ant-row-center > .ant-typography').should('contain', resultado)
});
