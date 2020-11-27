///<reference types="cypress"/>
import tester from '../common/APP2-D3'

//CONCLUIDO -
When('tentar {} uma informação', () => {
  tester.violarRegistro()
});

Then('é disparada uma notificação com a {string} referente a ação {}', (mensagem, acao) => {

  tester.violarRegistro(acao)
  tester.validaAlert(mensagem)
});
