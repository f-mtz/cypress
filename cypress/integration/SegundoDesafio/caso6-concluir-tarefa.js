///<reference types="cypress"/>
import tester from '../common/methods'

Given('que tenho um item na lista', () => {
  tester.acessarAplicacao()
  tester.adicionarItem('item')
});

When('eu tento selecionar item', () => {
  tester.concluirTarefa()
});

Then('o item {string}', () => {
  tester.verificaSeItemFoiAssinalado()
});
