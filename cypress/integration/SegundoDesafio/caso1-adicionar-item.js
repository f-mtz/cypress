///<reference types="cypress"/>
import tester from '../common/methods'

Given('que exista ou não algum item na lista TO DO', () => {
  tester.acessarAplicacao()
});

When('tento adicionar o item {string}', (novoItem) => {
  tester.adicionarItem(novoItem)
});

Then('o item {string}', (resultado) => {
  tester.verificarSeItemFoiAdicionado(resultado)
});


