import tester from '../common/methods'

//EM OBRAS
Given(/^que já exista um item na lista TO DO$/, () => {
  tester.acessarAplicacao()
});

When(/^tento editar o item "([^"]*)"$/, (args1) => {
  tester.adicionarItemVazio()
});

Then(/^o item "([^"]*)"$/, (args1) => {

});
