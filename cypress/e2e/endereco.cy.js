///<reference types ="cypress"/>

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(()=>{
        cy.visit('/')
        cy.fixture('perfil').then(data =>{
            cy.login(data.username, data.password);
        })
        
    })
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        //login
      
        //cadastro de endereço
    });
});