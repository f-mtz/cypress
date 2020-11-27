///<reference types="cypress"/>
import tester from '../common/APP1-D3'


//ITEM  VAMOS MARCAR O ITEM PADRÃO
//CONCLUIDO -
When('tentar marcar item como concluido', () => {

  tester.marcarItem()

});

Then('o item é marcado como concluido', () => {

  tester.alert('TODO completed')
  //DICA DESABILITEI O SCREENSHOT ABAIXO PARA NÃO FICAR PRINTANDO DURANTE A CONSTRUÇÃO DOS TESTES
  // cy.screenshot()
});
