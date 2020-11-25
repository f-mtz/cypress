///<reference types="cypress"/>
import tester from '../common/APP1-D3'

When('tentar inserir {string}', (descricao) => {
  cy.get('#title').as('entrada').type(descricao)
});

Then('o chegamos ao {string}', (resultado) => {
  cy.get('.ant-row-center > .ant-typography').should('contain', resultado)
});
