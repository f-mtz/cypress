///<reference types="cypress"/>
import tester from './APP1-D3'

Given('que a aplicacao seja acessada', () => {
  tester.acessaAplicacao()
});

//ITEM  PAGINA INICIAL
const paginaInicial = 'https://todohooks.dfweb.no/#complete'

//ITEM  INPUTS
const entradaDescricao = '#title'
const entradaData = '.ant-picker'

//ITEM  BOTOES
const adicionar = '.ant-form > :nth-child(3) > .ant-btn'
const botaoExcluir = '.ant-btn-dangerous'
const botaoConfirmacaoExclusao = '.ant-popover-buttons > .ant-btn-primary > span'
const botaoConcluido = '[href="#complete"] > .ant-btn'
const filtro = '.ant-dropdown-trigger'
const botaoOK = '.ant-table-filter-dropdown-btns > .ant-btn-primary'

//ITEM  CHECKBOX
const marcaCaixa = '.ant-checkbox-input'

//ITEM  ALERTS
const alertEndereco = '.ant-notification-notice'
const error = '.ant-row-center > .ant-typography'

//ITEM  AÇÕES GERAIS
const clicaFora = '#root > :nth-child(2)'

class Tester {
  acessaAplicacao() {
    cy.visit(paginaInicial)
  }

  inserirItem(item, data) {
    cy.get(entradaDescricao).type(item).clear().type(item)
    cy.get(entradaData).type(data)
    cy.get(clicaFora).click()
    cy.get(adicionar).click()
  }

  preenche(item, data) {
    cy.get(entradaDescricao).type(item).clear().type(item)
    cy.get(entradaData).type(data)
  }

  descricaoInvalida(descricao) {
    cy.get(entradaDescricao).type(descricao)
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
        this.alert(resultado)
        break;
      case 'sem':
        cy.get(adicionar).should('be.disabled').and(cy.get('body').should('contain', resultado))
        break;
      default:
        break;
    }
  }

  verificaBotaoADD() {
    cy.get(adicionar).should('be.disabled')
  }

  verificaError(resultado) {
    cy.get(error).should('contain', resultado)
  }

  verificaNaDOM(clausula, valor) {
    clausula;
    switch (clausula) {
      case 'contain':
        cy.get('body').should('contain', valor)
        break;
      case 'not.contain':
        cy.get('body').should('not.contain', valor)
        break;
      case 'be.qual':
        cy.get('body').should('be.equal', valor)
        break;
      case 'not.be.equal':
        cy.get('body').should('not.be.equal', valor)
        break;
      default:
        break;
    }

  }

  alert(valor) {
    cy.get(alertEndereco).should('contain', valor)
  }

  excluirItem() {
    cy.get(botaoExcluir).click()
    cy.get(botaoConfirmacaoExclusao).click()
  }

  marcarItem() {
    cy.get(botaoConcluido).click()
  }

  ocultarConcluidos() {
    this.marcarItem()
    //ITEM  OCULTADO
    cy.get(filtro).click()
    cy.get(marcaCaixa).click()
    cy.get(botaoOK).click()
  }

  recarregaApp() {
    cy.reload()
  }

  printaResultado() {
    cy.screenshot()
  }

}




export default new Tester()