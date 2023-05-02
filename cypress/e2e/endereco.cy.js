///<reference types ="cypress"/>
import {faker} from '@faker-js/faker'
import EnderecoPage from '../support/page-objects/endereco.pages'
const dataAddress = require ('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(()=>{
        cy.visit('/')
        cy.fixture('perfil').then(data =>{
            cy.login(data.username, data.password);
        })
        
    })
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dataAddress[0].firstName,
            dataAddress[0].lastName,
            dataAddress[0].company,
            dataAddress[0].country,
            dataAddress[0].address,
            dataAddress[0].number,
            dataAddress[0].city,
            dataAddress[0].state,
            dataAddress[0].postalCode,
            dataAddress[0].phoneNumber,
            dataAddress[0].email)
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')

    });
    it('Deve fazer cadastro de entrega com sucesso', () => {
        EnderecoPage.editarEnderecoEntrega(
            dataAddress[0].firstName,
            dataAddress[0].lastName,
            dataAddress[0].company,
            dataAddress[0].country,
            dataAddress[0].address,
            dataAddress[0].number,
            dataAddress[0].city,
            dataAddress[0].state,
            dataAddress[0].postalCode)
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')

    });
});