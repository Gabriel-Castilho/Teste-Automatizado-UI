

Cypress.Commands.add('login', (user, password) => {
    cy.get('.icon-user-unfollow').click();
    cy.get('#username').type(user);
    cy.get('#password').type(password);
    cy.get('.woocommerce-form > .button').click();
})

Cypress.Commands.add('firstRegister', (email, password, firstName, lastName) => {
    cy.get('.icon-user-unfollow').click();
    cy.get('#reg_email').type(email);
    cy.get('#reg_password').type(password);
    cy.get(':nth-child(4) > .button').click();
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
    cy.get('#account_first_name').type(firstName);
    cy.get('#account_last_name').type(lastName);
    cy.get('.woocommerce-Button').click();
})

Cypress.Commands.add('registerWeakPassword', (email, password) => {
    cy.get('.icon-user-unfollow').click();
    cy.get('#reg_email').type(email);
    cy.get('#reg_password').type(password);
})

Cypress.Commands.add('products', () => {
    cy.get('#primary-menu > .menu-item-629 > a').click();
    cy.get('[class="product-block grid"]').first().click();
})


Cypress.Commands.add('addProductsOnCart', (quantity) => {
    cy.get('#primary-menu > .menu-item-629 > a').click();
    cy.get('[class="product-block grid"]').first().click();
    cy.get('[class="variable-item button-variable-item button-variable-item-M"]').click();
    cy.get('[class="variable-item button-variable-item button-variable-item-Blue"]').click();
    cy.get('.input-text').clear().type(quantity);
    cy.get('.single_add_to_cart_button').click();
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantity);

})
/*
/*
 Cypress.Commands.add(('adicionarProduto'),(product)=>{
    cy.contains(product).click();
    cy.get('.btn_primary').click();
    cy.get('[data-test="back-to-products"]').click();
 })

 Cypress.Commands.add(('cadastro'),(firstName,lastName,postalCode)=>{
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
 })
*/