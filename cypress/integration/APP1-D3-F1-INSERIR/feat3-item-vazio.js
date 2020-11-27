///<reference types="cypress"/>
import tester from '../common/APP1-D3'

const vazio = '     '

// CONCLUIDO -
When('tentar inserir item com {string}', (data) => {

  tester.inserirItem(vazio, data)
});

Then('o {string} é alcançado', (resultado) => {

  tester.verificaNaDOM(vazio)
  //DICA DESABILITEI O SCREENSHOT ABAIXO PARA NÃO FICAR PRINTANDO DURANTE A CONSTRUÇÃO DOS TESTES
  // cy.screenshot()
});
