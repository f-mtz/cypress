import tester from '../common/methods'

Given('que exista pelo menos um item na lista TO DO', () => {
	tester.acessarAplicacao()
	tester.adicionarItem()
});

When('tento excluir o item {string}', (item) => {
	tester.deletarItem()
});

Then('o item {string}', (args1) => {
	cy.get('body').should('not.contain', resultado)
});

