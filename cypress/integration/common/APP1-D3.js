///<reference types="cypress"/>
import tester from './APP1-D3'

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