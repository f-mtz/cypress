///<reference types="cypress"/>
import tester from '../common/APP1-D3'

//CONCLUIDO -
When('tentar inserir {string}', (descricao) => {
  tester.descricaoInvalida(descricao)
});

Then('chegamos ao {string}', (resultado) => {
  tester.verificaError(resultado)
});
