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

Cypress.Commands.add('validaPropriedadesFeitico', (res, feiticoValidar)=>{
    const feitico = res.body.find(spell => spell.spell === feiticoValidar.spell); 
    expect(feitico).to.exist; 

    for (let chave in feiticoValidar){
            expect(feitico).to.have.property(chave, feiticoValidar[chave]);
        }
})

Cypress.Commands.add('validaPropriedadesCasas', (res, propriedadesCasas)=>{
    const casa = res.body.find(house => house.house === propriedadesCasas.house); 
    expect(casa).to.exist; 
    expect(casa).to.have.property('house', propriedadesCasas.house); 
    expect(casa).to.have.property('emoji', propriedadesCasas.emoji); 
    expect(casa).to.have.property('founder', propriedadesCasas.founder); 
    expect(casa).to.have.property('colors').to.deep.eq(propriedadesCasas.colors); 
    expect(casa).to.have.property('animal', propriedadesCasas.animal); 
    expect(casa).to.have.property('index', propriedadesCasas.index);
})

Cypress.Commands.add('validaPropriedadesPersonagens', (res, propPersonagens)=>{
    const personagem = res.body.find(character => character.fullName === propPersonagens.fullName); 
    expect(personagem).to.exist; 
    for (let chave in propPersonagens){
        expect(personagem).to.have.property(chave, propPersonagens[chave]);
    }
})


