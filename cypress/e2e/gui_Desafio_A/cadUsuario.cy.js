describe('cadastro de Usuário', () => {

    beforeEach('', () => {
      cy.visit('/cadastro')
      cy.geraDadosUsuario()
    })
  
    it('Cenário 1 - Realizar cadastro e validar mensagem de sucesso', () => {
      //DADO que acesso a página de novo usuário 
      //E digito um nome, email e senha válidos
      cy.readFile('cypress/fixtures/usuario.json').then((usuario) => {
        cy.get('#nome').type(usuario.nomeUsuario)
        cy.get('#email').type(usuario.emailUsuario)
        cy.get('#senha').type(usuario.senhaUsuario)
      })
      
      //QUANDO clico no botão de cadastrar
      cy.contains('.btn', 'Cadastrar').click()
      
      //ENTAO deve ser exibida a mensagem de sucesso
      cy.validaAlerta('success', 'Usuário inserido com sucesso')
    })

    it('Cenário Extra 2 - Tentar cadastrar usuario com email ja utilizado', () => {
      //DADO que acesso a página de cadastro de usuario
      //E digito o email recém cadastrado
      cy.fixture('usuario.json').then((usuario) => {
        cy.cadastraUsuario(usuario)
        cy.wait(200)
        cy.cadastraUsuario(usuario)
      })
      //QUANDO clico no botão de entrar
      //ENTAO deve ser exibida a mensagem de erro email ja cadastrado
      cy.validaAlerta('danger', 'Endereço de email já utilizado')   
    })
})