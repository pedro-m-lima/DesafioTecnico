Cypress.Commands.add('validaJsonApi', (api)=>{
    cy.request({
        url: `${Cypress.env('urlApi')+api}`,
        failOnStatusCode: false
    }).then(res => {
        return res
    })
})

Cypress.Commands.add('validaEstruturaJson', (res, estruturaJson)=>{
    expect(res.status).to.eq(200);
    res.body.forEach(api => { 
        expect(api).to.have.all.keys(estruturaJson); 
    });
})