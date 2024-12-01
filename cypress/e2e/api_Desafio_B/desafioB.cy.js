describe('Desafio B - Autamação APIs do Harry Potter', ()=>{
    
    context('1. Validar o formato da request (json válido) para a seguinte API: https://potterapi-fedeperin.vercel.app/pt/houses',()=>{
        it('request json válido', ()=>{
            cy.validaJsonApi('/houses').then(res =>{
                expect(res.status).to.eq(200)
                expect(res.headers['content-type']).to.include('application/json')
                /*
                let jsonString = JSON.stringify(res)
                cy.log(jsonString) 
                let stringJson = JSON.parse(jsonString)
                cy.log(stringJson)
                */
                expect(() => JSON.parse(JSON.stringify(res))).to.not.throw();
            })
        })
    })

})