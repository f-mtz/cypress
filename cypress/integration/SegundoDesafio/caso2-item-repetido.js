import tester from '../common/methods'

When('tento adicionar o mesmo item {string} mais de uma vez', (novoitem) => {
  tester.adicionarItemRepetido(novoitem)
  // tester.adicionarItemRepetido(novoitem)
});

Then('o item {string}', (novoitem , resultado) => {

  // cy.get(cy.getSpanItem()).should('have.length', 2)
  // cy.get('body').should('contain', novoitem)
  
});
