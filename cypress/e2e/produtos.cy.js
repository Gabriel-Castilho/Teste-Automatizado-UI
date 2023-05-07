///<reference types ="cypress"/>

describe('Funcionalidade páginas de produtos',()=>{
    beforeEach(() => {
        cy.visit("/");
    })
 
    it('Deve selecionar um produto da lista',()=>{
        cy.products();
    })

    it('Deve adicionar um produto no carrinho - comandos',()=>{
        let quantity = Math.floor(Math.random() * (9 - 1) + 1);
        cy.addProductsOnCart(0, "M", "Red", quantity);
        //valida se o número apresentado no carrinho está conforme o que foi adicionado
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantity * 1);
    })
})