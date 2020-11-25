///<reference types="cypress"/>
import tester from '../common/APP1-D3'


When('ocultar itens concluidos', () => {
  //ITEM  MARCANDO ITEM
  cy.get('[href="#complete"] > .ant-btn').click()
  //ITEM  OCULTADO
  cy.get('.ant-dropdown-trigger').click()
  cy.get('.ant-checkbox-input').click()
  cy.get('.ant-table-filter-dropdown-btns > .ant-btn-primary').click()

});

Then('os itens ficam ocultos', () => {
  cy.get('body').should('not.contain', 'Use ganchos em um aplicativo React (TODO padrão de INITIAL_STATE.js)')
});
