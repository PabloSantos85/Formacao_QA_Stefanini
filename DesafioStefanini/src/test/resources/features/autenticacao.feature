#language: pt
#enconding: UTF-8
@autenticacao
Funcionalidade: Autenticar email

  Cenario: email autenticado
    Dado que estou na tela de autenticacao
    Quando preencher o campo email ""
    E clicar no botao create an account
    Entao o sistema exibira tela de cadastro

  Cenario: email invalido
    Dado que estou na tela de autenticacao
    Quando preencher o campo email invalido "qwertyui"
    E clicar no botao create an account
    Entao o sistema exibira uma mensagem de erro

  Cenario: campo email em branco
    Dado que estou na tela de autenticacao
    Quando clicar no botao create an account
    Entao o sistema exibira uma mensagem de erro
