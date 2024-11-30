import { faker } from '@faker-js/faker/locale/pt_BR';
describe('Cadastro de Movimentação', () => {

    beforeEach(() => {
        cy.realizaLogin()
    })

    it('cenário 4 - Ao validar extrato deve conter movimentação peviamente cadastrada', () => {
        let dadosMov = {
            conta: {
                nome: 'Conta Corrente'
            },
            movimentacao: {
                tipoMov: 'Despesa',
                dataMov: new Date().toLocaleDateString('pt-BR'),
                dataPagto: faker.date.future().toLocaleDateString('pt-BR'),
                descricao: 'Cobranca de Aluguel',
                interessado: 'João Silva',
                valor: '1200.00',
                conta: 'Conta Corrente',
                situacao: 'Pago'
            }
        }
        
        cy.cadastraConta(dadosMov.conta.nome)
        //DADO que acesso a página de movimentação
        cy.visit('/movimentacao')
        
        //E cadastro uma movimentação
        //E faço um fluxo completo
        cy.PreencheDadosMovimentacao(dadosMov)
        cy.contains('.btn', 'Salvar').click()
        cy.validaAlerta('success', 'Movimentação adicionada com sucesso!')
        
        //QUANDO clicar em extrato
        cy.get('.navbar-nav a[href="/extrato"]').click()
        
        //ENTAO deve conter toda a movimentação cadastrada.
        cy.validaResumoMensal(dadosMov)
    })

    it('cenário extra 5 - Ao validar extrato deve conter movimentação peviamente cadastrada', () => {
        //DADO que acesso a página de manutenção
        cy.visit('/movimentacao')
        
        //E não preencho dados obrigatórios
        //QUANDO clico no botão de salvar
        cy.contains('.btn', 'Salvar').click()
        
        //ENTAO deve ser exibida a mensagem de erro dados obrigatórios
        const mensagemDadosObrigatorios = [
            "Data da Movimentação é obrigatório",
            "Data do pagamento é obrigatório",
            "Descrição é obrigatório",
            "Interessado é obrigatório",
            "Valor é obrigatório"
        ]
        for(let i in mensagemDadosObrigatorios){  
            cy.contains(`.alert-danger`, mensagemDadosObrigatorios[i])
        }
    })

})