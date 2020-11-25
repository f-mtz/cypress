///<reference types="cypress"/>
import tester from '../common/methods'


Given('que já exista um item na lista TO DO', () => {
	tester.acessarAplicacao()
	tester.adicionarItem()
});

When('tento editar o item {string}', (item) => {
	tester.editarItem(item)

});

Then('o item original deve ser diferente {string}', (itemEditado) => {
	tester.verificaSeItemFoiEditado(itemEditado)
});
