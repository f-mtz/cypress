///<reference types="cypress"/>
import tester from '../common/APP2-D3'

//CONCLUIDO -
When('habilitar a ordenação', () => {
  tester.habilitaCaseSensitive()
});

When('clicar no campo {string}', (campo) => {
  tester.selecionaFiltro(campo)
});

Then('espera-se que na celula tenha a {string}', (info) => {

  tester.verificaCampoUnicoEmail(info)
  // const limite = 5
  // let dom = []
  cy.get('tbody > :nth-child(5) > :nth-child(1)')
  // dom.push(cy.get('[tbody]'))
  // console.log(dom)
});
