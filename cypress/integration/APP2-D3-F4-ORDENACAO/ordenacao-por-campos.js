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
  // cy.get('tbody > :nth-child(5) > :nth-child(1)')
});
