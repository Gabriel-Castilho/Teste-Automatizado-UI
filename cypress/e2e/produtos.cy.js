///<reference types ="cypress"/>

describe('Funcionalidade páginas de produtos',()=>{
    beforeEach(() => {
        cy.visit("/");
    })

    it('Deve selecionar um produto da lista',()=>{
        cy.products();
    })

    it('Deve adicionar um produto no carrinho',()=>{
        let quantity = Math.floor(Math.random() * (9 - 1) + 1);
        cy.addProductsOnCart(quantity);
    })

    it.only('Deve adicionar um produto no carrinho - comandos',()=>{
        let quantity = Math.floor(Math.random() * (9 - 1) + 1);
        let quantitySize = Math.floor(Math.random() * (5 - 1) + 1);
        let quantityColor = Math.floor(Math.random() * (3 - 1) + 1);
        let size = ['XS','S','M','L','XL']
        let color =['Blue','Green','Red']
       cy.addProductsOnCart(quantity,size[quantitySize],color[quantityColor]);
       //cy.addProductsOnCart(quantity);
    })
})