///<reference types="cypress"/>
import tester from './APP2-D3'

Given('que a aplicacao seja acessada', () => {
  tester.acessaAplicacao()
});

const paginaInicial = 'https://react-flexy-table.netlify.app/'

//ITEM  INPUTS
const entradaBuscaGeral = '.rft-gs-input'
const campoId = '[name="id"]'
const campoNome = '[name="name"]'
const campoUltimoNome = '[name="last_name"]'
const campoEmail = '[name="email"]'
const campoGenero = '[name="gender"]'

//ITEM  COMBOBOX
const comboCaseSensitive = ':nth-child(3) > [style="margin-left: 10px; padding: 5px;"]'
const comboOrdenacao = ':nth-child(2) > [style="margin-left: 10px; padding: 5px;"]'
const quantidadeDeRegistros = ':nth-child(5) > select'

//ITEM  BOTOES
const botaoEditar = ':nth-child(1) > :nth-child(6) > div > [src="./static/media/edit-svgrepo-com.f6ac279a.svg"]'
const botaoEditar2 = '/html/body/div/div/div[2]/table/tbody/tr[1]/td[6]/div/img[2]'
const botaoExcluir = ':nth-child(1) > :nth-child(6) > div > [src="./static/media/delete-button-svgrepo-com.79cf255d.svg"]'

//ITEM  LABELS
const contagemEncontrados = '.rft-filtered-text'
const quantidadePorPagina = '/html/body/div/div/div[2]/table/tbody'

//ITEM  RESULTADOS
const registroEmail = `tbody > :nth-child(1) > :nth-child(4)`

class Tester {
  acessaAplicacao() {
    cy.visit(paginaInicial)
  }

  buscaGeral(info) {
    cy.get(entradaBuscaGeral).clear().type(info)
  }

  busca(info, campo) {
    switch (campo) {
      case 'Id':
        cy.get(campoId).type(info)
        break;
      case 'Nome':
        cy.get(campoNome).type(info)
        break;
      case 'Ultimo Nome':
        cy.get(campoUltimoNome).type(info)
        break;
      case 'Email':
        cy.get(campoEmail).type(info)
        break;
      case 'Genero':
        cy.get(campoGenero).type(info)
        break;
      case 'Geral':
        cy.get(entradaBuscaGeral).type(info)
        break;

      default:
        break;
    }
  }

  verificaNaDOM(resultado) {
    cy.get('body').should('contain', resultado)
  }

  habilitaCaseSensitive() {
    cy.get(comboCaseSensitive).select('Close').select('Open')
  }

  violarRegistro(acao) {
    switch (acao) {
      case 'editar':
        // cy.get(botaoEditar).click()
        cy.xpath(botaoEditar2).parent().click()
        break;
      case 'excluir':
        cy.get(botaoExcluir).click()
        break;

      default:
        break;
    }
  }

  validaAlert(mensagem, msg) {
    cy.on('window:alert', msg => {
      expect(mensagem).to.be.eq(mensagem)
    })
  }

  validaContagemDeRegistros(quantidade) {

    cy.get(contagemEncontrados).should('contain', `Filtered data count ${quantidade}`)

  }

  verificaCampoUnicoEmail(info) {
    cy.get(registroEmail).should('contain', info)
  }

  selecionaFiltro(campo) {
    cy.get(`thead > :nth-child(2) > :nth-child(${campo})`).click()
  }

  ativaOrdenacao() {
    cy.get(comboOrdenacao).select('Open')
  }

  selecionaQuantidadeDeRegistros(quantidade) {
    cy.get(quantidadeDeRegistros).select(quantidade)
  }

  verificaLimite(quantidade) {
    let excesso = parseFloat(quantidade) + 1
    cy.xpath(quantidadePorPagina).should('contain', quantidade)
    cy.xpath(quantidadePorPagina).should('not.contain', excesso)
  }

}

export default new Tester()