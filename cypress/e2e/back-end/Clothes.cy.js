describe('Categorias', () => {
    it("CP-003 BE / Ingresar a Categoria Clothes", () => {
        cy.request("GET", "http://www.testingyes.com/onlineshop/3-clothes").then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.not.be.null;
          cy.log(JSON.stringify(response.body));
        });
      });
    
});