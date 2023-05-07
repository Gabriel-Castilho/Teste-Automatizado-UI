
//Login
Cypress.Commands.add('login', (user, password) => {
    cy.get('.icon-user-unfollow').click();
    cy.get('#username').type(user);
    cy.get('#password').type(password,{log:false});
    cy.get('.woocommerce-form > .button').click();
})

//Register
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

//Products
Cypress.Commands.add('products', () => {
    cy.get('#primary-menu > .menu-item-629 > a').click();
    cy.get('[class="product-block grid"]').first().click();
})
Cypress.Commands.add('addProductsOnCart', (item,size,color,quantity) => {
    //adicionando primeiro item
    cy.get('#primary-menu > .menu-item-629 > a').click();
    cy.get('[class="product-block grid"]').eq(item).click();
    //cy.get(`.button-variable-item-${size}`).click({force:true});
    cy.get(`[class="variable-item button-variable-item button-variable-item-${size}"]`).click();
    cy.get(`.button-variable-item-${color}`).click();
   // cy.get('.button-variable-item-Red').click();
    cy.get('.input-text').clear().type(quantity); 
    cy.get('.single_add_to_cart_button').click();
}) 
