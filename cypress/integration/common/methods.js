//ITEM  Classe
//ITEM  Exportar a classe

class CRUD {
  //ACESSAR
  acessarAplicacao() {
    cy.visit('https://mastro-elfo.github.io/todo-react/#/dashboard')
    // cy.visit('https://github.com')
    // cy.visit('https://just-another-todo-app.now.sh/')
  }

  //INSERIR
  adicionarItem(novoItem) {
    cy.xpath('/html/body/div/div[1]/div[3]/div/ul[1]/li/div/div/input').as('entrada')
    // cy.xpath('//*[@id="root"]/div[1]/div[3]/div/ul[1]/li/div/div/input').as('entrada')
    cy.xpath('/html/body/div[1]/div[1]/div[3]/div/ul[1]/li/div/div/div/button').as('adicionar')

    //STEPS
    cy.get('@entrada').type(`${novoItem}`)
    cy.get('@adicionar').click()
  }

  adicionarItemRepetido(item) {
    this.adicionarItem(item)
    this.adicionarItem(item)
  }

  adicionarItemVazio(valor) {
    this.adicionarItem('item adicionado')

    cy.xpath('/html/body/div/div[1]/div[3]/div/ul[1]/li/div/div/input').as('entrada')
    cy.xpath('//*[@id="root"]/div[1]/div[3]/div/ul[2]/li[1]/div[1]/div[2]/span').as('registro')

    cy.get('@registro').type(valor)
    cy.get('@entrada').click()
  }
  editarItem(valor) {
    cy.xpath('/html/body/div/div[1]/div[3]/div/ul[1]/li/div/div/input').as('entrada')
    cy.xpath('//*[@id="root"]/div[1]/div[3]/div/ul[2]/li[1]/div[1]/div[2]/span').as('registro')
    //ALG

    cy.get('@registro')
    cy.get('@registro').type(valor)
    cy.get('@entrada').click()
  }


  deletarItem() {
    cy.xpath('//*[@id="root"]/div[1]/div[3]/div/ul[2]/li[1]/div[1]/div[2]/span').as('registro')
    cy.xpath('/html/body/div/div[1]/div[3]/div/ul[2]/li/div[2]/button').as('deletar')

    cy.get('@registro').click()
    cy.get('@deletar').click()
  }

  verificaItensRepetidos(item) {

  }

  verificaSeItemFoiEditado(itemEditado) {
    cy.xpath('//*[@id="root"]/div[1]/div[3]/div/ul[2]/li[1]/div[1]/div[2]/span').as('registro')
    cy.get('@registro').should('not.equal', itemEditado)
  }

  verificarSeItemFoiAdicionado(resultado) {
    cy.get('.MuiListItem-container > .MuiListItem-root').as('item')
    cy.get('@item').should('contain', resultado)
  }

  contaItens() { }

  concluirTarefa() {
    cy.get('.jss265').as('concluido')
    cy.get('@concluido').click()
  }

  verificaSeItemFoiAssinalado() {
    this.concluirTarefa()
    cy.get('.jss265').as('checkbox')
    cy.get('@checkbox').should('be.checked')
  }

  consultaItens() {
    // cy.get('.MuiSvgIcon-root').as('menu')
    // cy.xpath('//*[@id="root"]/div[1]/header/div/button/span[1]')
    // cy.get('.MuiToolbar-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root')
    cy.get('.MuiToolbar-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').as('menu')
    cy.get('.jss265 MuiSwitch-input').as('filtro')

    cy.get('@menu').click()
  }

}

export default new CRUD();