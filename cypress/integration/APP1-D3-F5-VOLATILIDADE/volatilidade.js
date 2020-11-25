///<reference types="cypress"/>
import tester from '../common/APP1-D3'

When('recarregar a aplicação', () => {
  cy.get('#title').as('entrada').type('item inserido').clear().type('item inserido')
  cy.get('.ant-picker').type('2020-11-25')
  cy.get('#root > :nth-child(2)').click()
  cy.get('.ant-form > :nth-child(3) > .ant-btn').as('adicionar').click()
});

Then('os itens são apagados', () => {
  cy.reload()
  cy.get('body').should('not.contain', 'item inserido')
});
