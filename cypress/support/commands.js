import { faker } from '@faker-js/faker';

//Login
Cypress.Commands.add('geraDadosUsuario', () => {
    const nomeUsuario = faker.internet.username().toLowerCase();
    const usuario = {
            nomeUsuario: nomeUsuario,
            emailUsuario: nomeUsuario + '@desafio.tec.com',
            senhaUsuario: '123456',
            senhaInvalida: '1122334455'
        }

    cy.writeFile('cypress/fixtures/usuario.json', usuario);
})

Cypress.Commands.add('cadastraUsuario', (nome, email, senha) => {
    cy.visit('/cadastro')
            cy.get('#nome').type(nome)
            cy.get('#email').type(email)
            cy.get('#senha').type(senha)
            cy.contains('.btn', 'Cadastrar').click()
})

Cypress.Commands.add('dadosLogin', (email, senha) => {
    cy.get('#email').type(email)
    cy.get('#senha').type(senha)
})

Cypress.Commands.add('validaAlerta', (tipoAlerta, mensagemAlerta) => {
    cy.get(`.alert-${tipoAlerta}`)
        .should('be.visible')
        .and('have.text', mensagemAlerta)
})

Cypress.Commands.add('realizaLogin', () => {
    cy.geraDadosUsuario()
    cy.readFile('cypress/fixtures/usuario.json').then((usuario) => {
        cy.cadastraUsuario(usuario.nomeUsuario, usuario.emailUsuario, usuario.senhaUsuario)
        cy.visit('/')
        cy.dadosLogin(usuario.emailUsuario, usuario.senhaUsuario)
        cy.contains('.btn', 'Entrar').click()
    })
})

//Contas
Cypress.Commands.add('cadastraConta', (conta) => {
    cy.visit('/addConta')
    cy.get('#nome')
        .type(conta)
    cy.contains('.btn-group .btn', 'Salvar')
        .should('be.visible')
        .click()
    cy.contains('#tabelaContas tr td', conta) 
})

//Movimentação

Cypress.Commands.add('PreencheDadosMovimentacao', (dadosMov) => {
    
    cy.get('#tipo')
            .select(dadosMov.movimentacao.tipoMov)
            .should('contain', dadosMov.movimentacao.tipoMov)
        cy.get('#data_transacao')
            .type(dadosMov.movimentacao.dataMov)
        cy.get('#data_pagamento')
            .type(dadosMov.movimentacao.dataPagto)
        cy.get('#descricao')
            .type(dadosMov.movimentacao.descricao)
        cy.get('#interessado')
            .type(dadosMov.movimentacao.interessado)
        cy.get('#valor')
            .type(dadosMov.movimentacao.valor)
        cy.get('#conta')
            .select(dadosMov.movimentacao.conta)
            .should('contain', dadosMov.movimentacao.conta)
        cy.get(`#status_${dadosMov.movimentacao.situacao.toLowerCase()}`)
            .check()
            .should('be.checked', dadosMov.movimentacao.situacao)
})

//Resumo Mensal (Extrato)
Cypress.Commands.add('validaResumoMensal', (dadosMov) => {
    cy.get('#tabelaExtrato').within(() => {
        cy.get('tr').eq(1).find('td').eq(0)
            .should('contain', dadosMov.movimentacao.descricao);
        cy.get('tr').eq(1).find('td').eq(1)
            .should('contain', dadosMov.movimentacao.dataPagto);
        cy.get('tr').eq(1).find('td').eq(2)
            .should('contain', dadosMov.movimentacao.conta);
        cy.get('tr').eq(1).find('td').eq(3)
            .should('contain', dadosMov.movimentacao.valor);
        cy.get('tr').eq(1).find('td').eq(4)
            .should('contain', dadosMov.movimentacao.situacao);
      });
})