# Desafio Técnico
[![GitHub](https://img.shields.io/badge/GitHub-pedro--m--lima-blue?style=for-the-badge&logo=github)](https://github.com/pedro-m-lima)

## Desafio A - Testes E2E
### A aplicação consiste em escrever testes E2E na página Seu Barriga. Deverão ser desenvolvidos os seguintes cenários:

## Orientações para execução do projeto

#### Pré Condições
- Possuir o Node.js e npm instalados, você pode baixalos [neste link](https://nodejs.org/pt)
- Para este projeto foi utilizada as versões
    - Node.js - **20.17.0**
    - npm - **10.8.2**
    - Cypress - **13.16.0**

### Passo a passo para execução:
1. **Clone o projeto:**
````sh
git clone https://github.com/pedro-m-lima/DesafioTecnico.git
````
2. **No terminal, acessa a pasta do projeto**

3. **Instale as dependencias de desenvolvimento node**
````sh
npm install
````

3. **Instale as dependências (faker.js)**
````sh
npm install @faker-js/faker --save-dev
````

4. Execute os testes
- Comando para executar no modo heandless
````sh
npx cypress run
````
- Comando para executar no modo interativo
````sh
npx cypress open
````

## Cenários Escopo:

```` javascript
'Cenário 1' - "caminho script (\cypress\e2e\cadUsuario.cy.js"
DADO que acesso a página de novo usuário
E digito um nome, email e senha válidos
QUANDO clico no botão de cadastrar
ENTAO deve ser exibida a mensagem de sucesso

'Cenário 2' - "caminho script (\cypress\e2e\login.cy.js)"
DADO que acesso a página de login
E digito o email recém cadastrado
E uma senha inválida
QUANDO clico no botão de entrar
ENTAO deve ser exibida a mensagem de erro

'Cenário 3' - "caminho script (\cypress\e2e\login.cy.js)"
DADO que acesso a página de login
E digito o email recém cadastrado
E uma senha válida
QUANDO clico no botão de entrar
ENTAO deve ser exibida a mensagem de bem vindo

'Cenário 4' - "caminho script (\cypress\e2e\cadMovimentacao.cy.js)"
DADO que acesso a página de movimentação
E cadastro uma movimentação
E faço um fluxo completo
QUANDO clicar em extrato
ENTAO deve conter toda a movimentação cadastrada.
````

## Cenários Extras
````JavaScript
'Cenário Extra 1' - "caminho script (\cypress\e2e\login.cy.js)"
DADO que acesso a página de login
E não informo email
E não informo senha
QUANDO clico no botão de entrar
ENTAO deve ser exibida a mensagem de erro senha/email é um campo obrigatório

'Cenário Extra 2' - "caminho script (\cypress\e2e\cadUsuario.cy.js)"
DADO que acesso a página de cadastro de usuario
E digito o email recém cadastrado
QUANDO clico no botão de cadastrar
ENTAO deve ser exibida a mensagem de erro, endereço de email já utilizado

'Cenário Extra 3' - "caminho script (\cypress\e2e\cadConta.cy.js)"
DADO que acesso a página de cadastro de contas
E informo o nome da conta
QUANDO clico no botão de salvar
ENTAO deve ser exibida a mensagem de conta adicionada com sucesso
E exibe conta na lista de contas

'Cenário Extra 4' - "caminho script (\cypress\e2e\cadConta.cy.js)"
DADO que acesso a página de cadastro de contas
E informo o nome da conta cadastrada recentemente
QUANDO clico no botão de salvar
ENTAO sistema exibe mensagem de erro Já existe uma conta com esse nome!

'Cenário Extra 5' - "caminho script (\cypress\e2e\cadMovimentacao.cy.js)"
DADO que acesso a página de manutenção
E não preencho dados obrigatórios
QUANDO clico no botão de salvar
ENTAO deve ser exibida a mensagem de erro
````
## Desafio B - Teste de API:
#### Aplicação consiste em escrever testes para alguns cenários conforme descrito abaixo,baseado nas APIs do Harry Potter, disponível em: https://potterapi-fedeperin.vercel.app/pt Deverão ser desenvolvidos os cenários para teste das seguintes operações:

 1. Validar o formato da request (json válido) para a seguinte API:
 https://potterapi-fedeperin.vercel.app/pt/houses

 2. Validar retorno para url inválida, como por exemplo:
 https://potterapi-fedeperin.vercel.app/jp

 3. Na API de feitiços, deve retornar a listagem de feitiços com a estrutura
 correta;

 4. Ainda na API de feitiços, deve retornar o feitiço "Accio" com as
 propriedades corretas;

 5. Validar a API de Língua Inglesa e validar se o retorno está em inglês;

 6. Validar as quatro rotas disponíveis em
 https://potterapi-fedeperin.vercel.app/pt e validar se estão sendo
 acessadas normalmente;

 7. Na API das Casas de Hogwarts, validar se a casa “Grifinória” existe e
 com as propriedades corretas.

 8. Validar se o personagem Harry Potter existe, e verificar qual o ator que atuou nos filmes,
 além de validar o retorno da API.

 9. Validar o json de retorno do personagem de index válido.