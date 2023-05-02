///<reference types ="cypress"/>

describe('Funcionalidade páginas de produtos',()=>{
    beforeEach(() => {
        cy.visit("/");
    })

    it('Deve selecionar um produto da lista',()=>{
        cy.products();
    })

    it.only('Deve adicionar um produto no carrinho',()=>{
        var quantity = Math.floor(Math.random() * (9 - 1) + 1);
        cy.addProductsOnCart(quantity);
    })
})