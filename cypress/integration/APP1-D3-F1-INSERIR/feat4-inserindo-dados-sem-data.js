///<reference types="cypress"/>
import tester from '../common/APP1-D3'


When('tentar inserir {string} sem data', (item) => {

  cy.get('#title').as('entrada').type(item)
});

Then('o item não é inserido', () => {
  cy.get('.ant-form > :nth-child(3) > .ant-btn').should('be.disabled')
});
