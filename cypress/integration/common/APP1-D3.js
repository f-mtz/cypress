///<reference types="cypress"/>
import tester from './APP1-D3'

Given('que a aplicacao seja acessada', () => {
  tester.acessaAplicacao()
});

const paginaInicial = 'https://todohooks.dfweb.no/#complete'
const adicionar = '.ant-form > :nth-child(3) > .ant-btn'
const error = '.ant-row-center > .ant-typography'

class Tester {
  acessaAplicacao() {
    cy.visit(paginaInicial)
  }

  inserirItem(item, data) {
    cy.get('#title').as('entrada').type(item).clear().type(item)
    cy.get('.ant-picker').type(data)
    cy.get('#root > :nth-child(2)').click()
    cy.get(adicionar).click()
  }

  descricaoInvalida(descricao) {
    cy.get('#title').as('entrada').type(descricao)
  }

  inserirItemComportamento(condicao, item, data) {
    switch (condicao) {
      case 'com':
        tester.inserirItem(item, data)
        break;
      case 'sem':
        break;
      default:
        break;
    }
  }

  validaInsercao(condicao, resultado) {
    switch (condicao) {
      case 'com':
        cy.get('body').should('contain', resultado)
        break;
      case 'sem':
        cy.get('.ant-form > :nth-child(3) > .ant-btn').should('be.disabled').and(cy.get('body').should('contain', resultado))
        break;
      default:
        break;
    }
  }

  verificaError(resultado) {
    cy.get(error).should('contain', resultado)
    // '.ant-row-center > .ant-typography'
  }
}

export default new Tester()