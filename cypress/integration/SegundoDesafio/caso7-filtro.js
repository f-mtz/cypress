///<reference types="cypress"/>
import tester from '../common/methods'

Given(/^que tenho alguns itens na lista$/, () => {
  tester.acessarAplicacao()
  tester.adicionarItem('valor 0')
  tester.adicionarItem('valor 1')
  tester.adicionarItem('valor 2')

});

When(/^tento buscar um item$/, () => {
  tester.consultaItens()
});

Then(/^o item "([^"]*)"$/, (args1) => {
});
