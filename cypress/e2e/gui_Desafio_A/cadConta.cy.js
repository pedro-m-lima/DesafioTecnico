describe('Cadastro de Movimentação',()=> {
    let nomeConta = "Conta Poupanca"

    beforeEach(()=>{
        cy.realizaLogin()
    })
    it('Cenário Extra 3 - Realiza cadastro de conta', ()=>{     
        //DADO que acesso a página de cadastro de contas
        cy.visit('/addConta')
        
        //E informo o nome da conta
        cy.get('#nome').type(nomeConta)
        
        //QUANDO clico no botão de salvar
        cy.contains('.btn-group .btn', 'Salvar')
            .should('be.visible').click()
        
        //ENTAO sistema grava os dados com sucesso
        cy.validaAlerta('success', 'Conta adicionada com sucesso!')
        
        //E exibe conta na lista de contas
        cy.contains('#tabelaContas tr td', nomeConta)  
    })

    it('Cenário Extra 4 - Tenta realizar cadastro com conta ja cadastrada', ()=>{
        //Pré Cadastros
        nomeConta = "Banco do Brasil"
        cy.cadastraConta(nomeConta)
        
        //DADO que acesso a página de cadastro de contas
        cy.visit('/addConta')
        
        //E informo nome da conta cadastrada recentemente
        cy.get('#nome').type(nomeConta)
        
        //QUANDO clico no botão de salvar
        cy.contains('.btn-group .btn', 'Salvar')
            .should('be.visible').click()
        
        //ENTAO sistema exibe mensagem de erro, já existe uma conta com esse nome
        cy.validaAlerta('danger', 'Já existe uma conta com esse nome!')
    })

})