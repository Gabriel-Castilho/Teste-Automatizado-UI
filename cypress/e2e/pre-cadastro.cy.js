///<reference types ="cypress"/>
import {faker} from '@faker-js/faker'

describe('Funcionalidade pré cadastro',()=>{
    beforeEach(() => {
        cy.visit("/");
    });

    it('Deve completar o pré cadastro com sucesso',()=>{
        let firstName = faker.internet.name.firstName();
        let emailFaker = faker.internet.email(firstName);
        let lastName = faker.internet.name.lastName();
        cy.firstRegister(emailFaker,'@teste@email#',firstName,lastName);
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.');
    });

    it.only('Deve mostrar mensagem de senha fraca',()=>{
        let emailFaker = faker.internet.email();
        cy.registerWeakPassword(emailFaker,'123456',);
        cy.get('[class="woocommerce-password-strength short"]').should('contain','Muito fraca - Digite uma senha segura.');
    });
    
})