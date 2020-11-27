///<reference types="cypress"/>
import tester from '../common/APP2-D3'

//CONCLUIDO -
When('tentar pesquisar {string} no {string}', (info, campo) => {
  //OK  PROCURAR POR INFORMAÇÕES EM CAMPOS INDIVIDUAIS
  tester.busca(info, campo)

});

Then('o {string} é encontrado', (resultado) => {
  //OK  VERIFICA SE RESULTADO ESPERADO FOI RENDERIZADO
  tester.verificaNaDOM(resultado)
});
