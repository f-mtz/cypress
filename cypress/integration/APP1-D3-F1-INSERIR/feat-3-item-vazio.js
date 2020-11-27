///<reference types="cypress"/>
import tester from '../common/APP1-D3'

// EM ANDAMENTO - FALTA ENCAPSULAR OS PASSOS (CODIGO)
When('tentar inserir item com {string}', (data) => {
  // cy.get('#title').as('entrada').type('       ')
  cy.xpath('//*[@id="title"]').type('       ')
  // cy.get('#Select\ a\ date').type(data)
  cy.get('.ant-picker').type(data)
  cy.get('#root > :nth-child(2)').click()
  // cy.get('.ant-form > :nth-child(3) > .ant-btn').as('adicionar').click() //ITEM  TENTE USAR O PARENT(SELECTOR) AQUI
  cy.get('.ant-form > :nth-child(3) > .ant-btn > span').parent().click()
  // cy.get('.ant-form > :nth-child(3) > .ant-btn').as('adicionar').click() //ITEM  TENTE USAR O cy.get().parent() AQUI
});

Then('o {string} é alcançado', (resultado) => {

  cy.get('body').should('contain', '      ')

});
