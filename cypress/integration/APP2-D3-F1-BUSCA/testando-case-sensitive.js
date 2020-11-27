///<reference types="cypress"/>
import tester from '../common/APP2-D3'

//CONCLUIDO -
When('tentar pesquisar {string}', (valor) => {
  //OK  ATIVAR O CASE SENSITIVE PARA AS BUSCAS
  tester.habilitaCaseSensitive()

  //OK  BUSCA GERAL
  tester.buscaGeral(valor)
});

Then('a {string} é encontrada', (valorProcurado) => {
  //OK
  tester.verificaNaDOM()
});

But('se pesquisar a {string} com letra minusculas', (valor) => {
  //OK  BUSCANDO COM LETRAS MINUSCULAS
  tester.buscaGeral(valor)
});

Then('a {string} não é encontrada', (valorProcurado) => {
  //OK
  tester.verificaNaDOM()
});




// cy.get(':nth-child(1) > [style="margin-left: 10px; padding: 5px;"]')