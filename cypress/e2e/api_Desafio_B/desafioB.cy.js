describe('Desafio B - Autamação APIs do Harry Potter', ()=>{
    
    context('Api Houses',()=>{
        
        it('1. Validar o formato da request (json válido)', ()=>{
            cy.validaJsonApi('pt/houses').then(res =>{
                expect(res.status).to.eq(200)
                expect(res.headers['content-type']).to.include('application/json')
                expect(() => JSON.parse(JSON.stringify(res))).to.not.throw();
            })
        })
        
        it('2. Validar retorno para url inválida', ()=>{
            cy.validaJsonApi('jp').then(res =>{
                expect(res.status).to.eq(404)
            })
        })
    })

    context('Api spells',()=>{
        it.only('3. Deve retornar a listagem de feitiços com a estrutura correta;', ()=>{
            //let estruturaJson = ["spell","use","index"]
            cy.validaJsonApi('pt/spells').then(res=>{
                const estruturaJson = Object.keys(res.body[0])
                //cy.log(estruturaJson)
            cy.validaEstruturaJson(res, estruturaJson)
            })

        })   
    })

})