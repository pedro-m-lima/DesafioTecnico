Cypress.Commands.add('validaJsonApi', (api)=>{
    cy.request(Cypress.env('urlApi')+api).then(res => {
        return res
    })
})