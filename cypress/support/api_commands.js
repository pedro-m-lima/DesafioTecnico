Cypress.Commands.add('validaApiHouses', ()=>{
    cy.request({
        method: 'GET',
        url: `https://potterapi-fedeperin.vercel.app/pt/houses`
    })
})