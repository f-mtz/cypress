///<reference types="cypress"/>
import tester from '../common/APP2-D3'

//CONCLUIDO -
When('buscar uma {string}', (info) => {
  tester.buscaGeral(info)
});

Then('a contagem de registros esperada é {string}', (quantidade) => {
  tester.validaContagemDeRegistros(quantidade)
});
