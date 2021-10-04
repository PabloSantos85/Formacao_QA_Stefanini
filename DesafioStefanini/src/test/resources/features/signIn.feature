#language: pt
#enconding: UTF-8
Funcionalidade: Acessar Sistema

  @Signin
  Cenario: cenario Acessar pagina de autenticacao de email
    Dado que esteja na homepage
    Quando clicar no botao Sign in
    Entao o sistema exibe a tela de autenticacao
