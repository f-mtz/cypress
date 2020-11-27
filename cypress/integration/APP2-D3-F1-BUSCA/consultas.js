///<reference types="cypress"/>
import tester from '../common/APP2-D3'

//CONCLUIDO -
When('tentar pesquisar {string} no {string}', (info, campo) => {
  tester.busca(info, campo)

});

Then('o {string} é encontrado', (resultado) => {
  tester.verificaNaDOM(resultado)
});
