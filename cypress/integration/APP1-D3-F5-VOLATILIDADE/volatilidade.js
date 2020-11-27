///<reference types="cypress"/>
import tester from '../common/APP1-D3'

//CONCLUIDO -
When('inserir {string} com a {string}', (item, data) => {
  tester.inserirItem(item, data)
});

Then('ao recarregar a aplicação, os itens são apagados', () => {

  tester.recarregaApp()
  tester.verificaNaDOM('not.contain', 'item inserido')

  tester.printaResultado()
});
