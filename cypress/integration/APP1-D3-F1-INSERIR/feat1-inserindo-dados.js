///<reference types="cypress"/>
import tester from '../common/APP1-D3'

//CONCLUIDO -
When('tentar inserir {string} {string} {string}', (item, condicao, data) => {

  tester.inserirItemComportamento(item, condicao, data)

});

Then('o {string} {string} inserido na condição: {string}', (resultado, condicao) => {

  tester.validaInsercao(condicao, resultado)

  //DICA DESABILITEI O SCREENSHOT ABAIXO PARA NÃO FICAR PRINTANDO DURANTE A CONSTRUÇÃO DOS TESTES
  // cy.screenshot()
});
