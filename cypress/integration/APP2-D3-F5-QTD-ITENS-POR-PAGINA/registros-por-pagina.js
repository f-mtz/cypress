///<reference types="cypress"/>
import tester from '../common/APP2-D3'

//CONCLUIDO -
When('escolher a {string} de registro por página', (quantidade) => {

  tester.selecionaQuantidadeDeRegistros(quantidade)
});

Then('espera-se que na página tenha {string} registros', (quantidade) => {

  tester.verificaLimite(quantidade)
});
