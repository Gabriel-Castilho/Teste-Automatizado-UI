///<reference types ="cypress"/>

describe('Funcionalidade Login', () => {
    beforeEach(() => {
        cy.visit("/");
    })

   /* afterEach(()=>{
        cy.screenshot();
    })
*/
    it('Deve fazer login com sucesso', () => {

        //login com dados corretos
        cy.login('aluno_ebac@teste.com', 'teste@teste.com');
        cy.get('.page-title').should('contain', 'Minha conta');

    })
    it('Login com senha inválida', () => {
        cy.login('ebac@teste.com', 'teste@teste');
        cy.get('.woocommerce-error').should('contain','Erro: a senha fornecida para o e-mail');
    })
    it('Login com usuário inválido', () => {
        cy.login('useruseruserinvalid@ebac.co', 'asdadsdasadsas');
        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido');
    })


    /* Adicionar produto
    cy.adicionarProduto('Sauce Labs Bike Light');
    cy.adicionarProduto('Sauce Labs Fleece Jacket');
    cy.adicionarProduto('Sauce Labs Backpack');
    
    //Ir para o carrinho
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    //Efetuar pagamento
    cy.cadastro('Gabriel','Castilho','12092856');

    //Concluir Pagamento
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should('contain', 'Thank you for your order')
    //Voltar a home
   //cy.get('[data-test="back-to-products"]').click();


    */


})

