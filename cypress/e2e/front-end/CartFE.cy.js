describe('Cart Feature', () => {
    it('CP-004 FE / Agregar Producto al Carrito', () => {
        cy.visit('http://www.testingyes.com/onlineshop/men/1-2-hummingbird-printed-t-shirt.html#/1-size-s/11-color-black');
        cy.contains('Add to cart').children('i').should('have.class', 'material-icons shopping-cart').click()
        cy.screenshot();
    });

});

describe('Cart Feature', () => {
    it('CP-005 FE / Eliminar Producto del Carrito', () => {
        cy.visit('http://www.testingyes.com/onlineshop/men/1-2-hummingbird-printed-t-shirt.html#/1-size-s/11-color-black');
        cy.contains('Add to cart').children('i').should('have.class', 'material-icons shopping-cart').click()
        cy.contains('Proceed to checkout').children('i').should('have.class', 'material-icons rtl-no-flip').click()
        cy.contains('delete').children('i').should('have.class', 'material-icons float-xs-left').click()
        cy.screenshot();
    });

});