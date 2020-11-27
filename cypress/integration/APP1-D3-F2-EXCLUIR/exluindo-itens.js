///<reference types="cypress"/>
import tester from '../common/APP1-D3'

//CONCLUIDO -
When('tentar excluir item', () => {

  tester.excluirItem()
});

Then('o item {string} é excluido', (resultado) => {
  tester.verificaNaDOM('not.contain', resultado)
  tester.alert('TODO deleted')
  //DICA DESABILITEI O SCREENSHOT ABAIXO PARA NÃO FICAR PRINTANDO DURANTE A CONSTRUÇÃO DOS TESTES
  // cy.screenshot()
});

