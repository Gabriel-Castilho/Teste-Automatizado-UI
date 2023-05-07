///<reference types ="cypress"/>
const profile = require('../fixtures/perfil.json');
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
    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.login(profile.username, profile.password);
        cy.get('.page-title').should('contain', 'Minha conta');
    })

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(data =>{
            cy.login(data.username, data.password);
            cy.get('.page-title').should('contain', 'Minha conta');
        })
    })


    it('Login com senha inválida', () => {
        cy.login('ebac@teste.com', 'teste@teste');
        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail');
    })
    it('Login com usuário inválido', () => {
        cy.login('useruseruserinvalid@ebac.co', 'asdadsdasadsas');
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido');
    })
})

