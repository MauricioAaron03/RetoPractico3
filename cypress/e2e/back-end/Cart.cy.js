describe('Cart Feature', () => {
    it("CP-001 BE / Agregar Producto al Carrito", () => {
        cy.request("POST", "http://www.testingyes.com/onlineshop/cart", {
            token: "f259cb0a9275cd30f29b52f430f5284c",
            id_product: 1,
            id_customization: 0,
            add: 1,
            action: "update"
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
    it("CP-002 BE / Eliminar Producto del Carrito", () => {
        cy.request("POST", "http://www.testingyes.com/onlineshop/cart?delete=1&id_product=1&id_product_attribute=2&token=f259cb0a9275cd30f29b52f430f5284c", {
            ajax: 1,
            action: "update"
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
        });
    });

});