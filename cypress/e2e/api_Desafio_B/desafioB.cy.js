const { fi } = require("@faker-js/faker")

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
        it('3. Deve retornar a listagem de feitiços com a estrutura correta;', ()=>{
            cy.validaJsonApi('pt/spells').then(res=>{
                const estruturaJson = Object.keys(res.body[0])
                cy.validaEstruturaJson(res, estruturaJson)
            })
        })   

        it('4 - Deve retornar o feitiço "Accio" com as propriedades corretas;', () => {
            const feiticoEsperado = 'Accio'

            const feiticoValidar = {
                spell: "Accio", 
                use: "Feitiço de invocação", 
                index: 0   
            }

            cy.validaJsonApi('pt/spells').then(res=>{
                expect(res.status).to.eq(200)
                cy.validaPropriedadesFeitico(res, feiticoEsperado, feiticoValidar)
            })
        })
    })

    context('API lingua Inglesa',()=>{
        it('5. Validar a API de Língua Inglesa e validar se o retorno está em inglês;', ()=>{
            cy.validaJsonApi('en').then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.message).to.eq('This is the endpoint of the English language');
            expect(res.body.lang).to.eq('en');
            expect(res.body.langName).to.eq('English');
            });
        })
    })

    context('API rotas',()=>{
        it('6. Validar se rotas estao sendo acessadas corretamente', ()=>{
            const rotas= ['pt/books', 'pt/characters', 'pt/houses', 'pt/spells']
            for(let i in rotas){
                cy.validaJsonApi(rotas[i]).then((res) => {
                    expect(res.status).to.eq(200);
                })
            }   
        })    

    })

    context('API Casas',()=>{
        it('7. Na API das Casas de Hogwarts, validar se a casa “Grifinória” existe e com as propriedades corretas.', ()=>{
            const casaEsperada = 'Grifinória'
            
            const propriedadesCasas = {
                house: "Grifinória",
                emoji: "🦁",
                founder: "Godric Grifinória",
                colors: ['red', 'gold'],
                animal: "Leão",
                index: 0
              }

            cy.validaJsonApi('pt/houses').then(res=>{
                expect(res.status).to.eq(200)
                cy.validaPropriedadesCasas(res, casaEsperada, propriedadesCasas)
            })
        })    

    })

    context('API Personagens',()=>{
        it.only('8. Validar se o personagem Harry Potter existe, e verificar qual o ator que atuou nos filmes, além de validar o retorno da API.', ()=>{
            const propriedadesPersonagens = {
                fullName: "Harry James Potter",
                interpretedBy: "Daniel Radcliffe",
              }
            
            cy.validaJsonApi('pt/characters').then(res=>{
                expect(res.status).to.eq(200)
                cy.validaPropriedadesPersonagens(res, propriedadesPersonagens)
            })
        });             
            

        it('9. Validar o json de retorno do personagem de index válido.', ()=>{
            cy.wait(200)
        })    

    })

})