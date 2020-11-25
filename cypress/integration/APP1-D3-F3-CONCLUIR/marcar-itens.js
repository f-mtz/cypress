///<reference types="cypress"/>
import tester from '../common/APP1-D3'


//ITEM  VAMOS MARCAR O ITEM PADRÃO

When('tentar marcar item como concluido', () => {

  cy.get('[href="#complete"] > .ant-btn').click()

});

Then('o item é concluido', () => {
  cy.get('.ant-notification-notice').should('contain', 'TODO completed')

});
