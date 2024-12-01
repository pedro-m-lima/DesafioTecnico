describe('Login', () => {

  beforeEach('', () => {
    cy.geraDadosUsuario()
  })

  it('Cenário 2 - Tentar realizar login com email correto e senha inválida', () => {
    cy.readFile('cypress/fixtures/usuario.json').then((usuario) => {
      //Pré Cadastros
      cy.cadastraUsuario(usuario)
      
      //DADO que acesso a página de Login
      cy.visit('/')
      
      //E digito o email recém cadastrado //E uma senha inválida
      cy.get('#email').type(usuario.emailUsuario)
      cy.get('#senha').type(usuario.senhaInvalida)
      
      //QUANDO clico no botão de Entrar
      cy.contains('.btn', 'Entrar').click()
      
      //ENTÃO deve ser exibida a mensagem de erro
      cy.validaAlerta('danger', `Problemas com o login do usuário`)
    })
  })

  it('Cenário 3 - Validar mensagem de "bem vindo" ao Logar', () => {
    cy.readFile('cypress/fixtures/usuario.json').then((usuario) => {
      //Pré Cadastros
      cy.cadastraUsuario(usuario)
      
      //DADO que acesso a página de Login
      cy.visit('/')
      
      //E digito o email recém cadastrado //E uma senha inválida
      cy.dadosLogin(usuario)
      
      //QUANDO clico no botão de Entrar
      cy.contains('.btn', 'Entrar').click()
      
      //ENTÃO deve ser exibida a mensagem de Bem vindo
      cy.validaAlerta('success', `Bem vindo, ${usuario.nomeUsuario}!`)
    })
  })

  it('Cenário Extra 1 - Tentar logar sem informar email e senha', () => {
      //DADO que acesso a página de Login
      cy.visit('/')
      
      //E não informo email //E não informo senhaa
      cy.get('#email').clear()
      cy.get('#senha').clear()
      
      //QUANDO clico no botão de Entrar
      cy.contains('.btn', 'Entrar').click()
      
      //ENTÃO deve ser exibida a mensagem de Bem vindo
      cy.contains(`.alert-danger`, 'Email é um campo obrigatório')
      cy.contains(`.alert-danger`, 'Senha é um campo obrigatório')
  })

})
