///<reference types="cypress"/>
import tester from '../common/APP1-D3'

//CONCLUIDO -
When('ocultar itens concluidos', () => {

  tester.ocultarConcluidos()

});

Then('os itens ficam ocultos', () => {
  tester.verificaNaDOM('not.contain', 'Use ganchos em um aplicativo React (TODO padrão de INITIAL_STATE.js)')
  //DICA DESABILITEI O SCREENSHOT ABAIXO PARA NÃO FICAR PRINTANDO DURANTE A CONSTRUÇÃO DOS TESTES
  tester.printaResultado()
});
