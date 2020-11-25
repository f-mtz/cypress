///<reference types="cypress"/>
import tester from './APP2-D3' //CONFIG 

Given('que a aplicacao seja acessada', () => {
  tester.acessaAplicacao()
});

const paginaInicial = 'https://react-flexy-table.netlify.app/'
// const paginaInicial = 'https://flexiblog-beauty.web.app/contact/'

class Tester {
  acessaAplicacao() {
    cy.visit(paginaInicial)
  }
}

export default new Tester()