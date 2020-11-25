///<reference types="cypress"/>
import tester from '../common/APP1-D3'


When('tentar excluir item', () => {

  //ITEM  VAMOS EXLUIR O ITEM PADRÃO

  cy.get('.ant-btn-dangerous').click()
  cy.get('.ant-popover-buttons > .ant-btn-primary > span').click()
});

Then('o item é excluido', () => {
  cy.get('body').should('not.contain', 'Default TODO from INITIAL_STATE.js')
});

