///<reference types="cypress"/>
import tester from '../common/TERCEIRO-DESAFIO'

Given('que a aplicacao seja acessada', () => {
  tester.acessaAplicacao()
});

const paginaInicial = 'https://todohooks.dfweb.no/#complete'

class Tester {
  acessaAplicacao() {
    cy.visit(paginaInicial)
  }
}

export default new Tester()