///<reference types="cypress"/>
import tester from './APP2-D3' //CONFIG 

Given('que a aplicacao seja acessada', () => {
  tester.acessaAplicacao()
});

const paginaInicial = 'https://react-flexy-table.netlify.app/'

class Tester {
  acessaAplicacao() {
    cy.visit(paginaInicial)
  }

  buscaGeral(info) {
    cy.get('.rft-gs-input').clear().type(info)
  }

  busca(info, campo) {
    switch (campo) {
      case 'Id':
        cy.get('[name="id"]').type(info)
        break;
      case 'Nome':
        cy.get('[name="name"]').type(info)
        break;
      case 'Ultimo Nome':
        cy.get('[name="last_name"]').type(info)
        break;
      case 'Email':
        cy.get('[name="email"]').type(info)
        break;
      case 'Genero':
        cy.get('[name="gender"]').type(info)
        break;
      case 'Geral':
        cy.get('.rft-gs-input').type(info)
        break;

      default:
        break;
    }
  }

  verificaNaDOM(resultado) {
    cy.get('body').should('contain', resultado)
  }

  habilitaCaseSensitive() {
    cy.get(':nth-child(3) > [style="margin-left: 10px; padding: 5px;"]').select('Close').select('Open')
  }

  violarRegistro(acao) {
    switch (acao) {
      case 'editar':
        cy.get(':nth-child(1) > :nth-child(6) > div > [src="./static/media/edit-svgrepo-com.f6ac279a.svg"]').click()
        break;
      case 'excluir':
        cy.get(':nth-child(1) > :nth-child(6) > div > [src="./static/media/delete-button-svgrepo-com.79cf255d.svg"]').click()
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

    cy.get('.rft-filtered-text').should('contain', `Filtered data count ${quantidade}`)

  }

  verificaCampoUnicoEmail(info) {
    cy.get(`tbody > :nth-child(1) > :nth-child(4)`).should('contain', info)
  }

  selecionaFiltro(campo) {
    cy.get(`thead > :nth-child(2) > :nth-child(${campo})`).click()
  }

  ativaOrdenacao() {
    cy.get(':nth-child(2) > [style="margin-left: 10px; padding: 5px;"]').select('Open')
  }

  selecionaQuantidadeDeRegistros(quantidade) {
    cy.get(':nth-child(5) > select').select(quantidade)
  }

  verificaLimite(quantidade) {
    let excesso = parseFloat(quantidade) + 1
    cy.xpath('/html/body/div/div/div[2]/table/tbody').should('contain', quantidade)
    cy.xpath('/html/body/div/div/div[2]/table/tbody').should('not.contain', excesso)
  }

}

export default new Tester()