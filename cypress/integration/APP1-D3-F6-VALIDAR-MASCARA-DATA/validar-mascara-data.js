///<reference types="cypress"/>
import tester from '../common/APP1-D3'

//CONCLUIDO -
When('tentar inserir {string} com {string} incorreta', (descricao, data) => {
  tester.preenche(descricao, data)
});

Then('o botão adicionar não habilita', () => {
  tester.verificaBotaoADD()
});
