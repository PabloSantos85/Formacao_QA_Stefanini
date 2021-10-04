#language: pt
#enconding: UTF-8
@cadastro
Funcionalidade: Cadastrar usuario

  Cenario: Campos Name em branco
    Dado que estou na tela de cadastro
    E preencher o campo Last Name com "Santos"
    #E preencher o campo email com "pablossantos85@gmail.com"
    E preencher o campo Password com "12345"
    E preencher o campo Address com "Rua André Vidal de Negreiros"
    E preencher o campo City com "Petrolina"
    E selecionar a opcao State
    E preencher o campo Zip/Postal Code com "56330"
    E selecionar uma opcao no campo Country
    E preencher o campo Home phone com "34348890"
    E preencher o campo Mobile phone com "96550199"
    E clicar no botao Register
    Entao o sistema exibe uma mensagem de erro

  Cenario: Campos Password em branco
    Dado que estou na tela de cadastro
    E preencher o campo First Name com "Pablo"
    E preencher o campo Last Name com "Santos"
    #E preencher o campo email com "pablossantos85@gmail.com"
    E preencher o campo Address com "Rua André Vidal de Negreiros"
    E preencher o campo City com "Petrolina"
    E selecionar a opcao State
    E preencher o campo Zip/Postal Code com "56330"
    E selecionar uma opcao no campo Country
    E preencher o campo Home phone com "34348890"
    E preencher o campo Mobile phone com "96550199"
    E clicar no botao Register
    Entao o sistema exibe uma mensagem de erro

  Cenario: Campos Password Invalido(menos de 5 caracteres)
    Dado que estou na tela de cadastro
    E preencher o campo First Name com "Pablo"
    E preencher o campo Last Name com "Santos"
    #E preencher o campo email com "pablossantos85@gmail.com"
    E preencher o campo Password com "123"
    E preencher o campo Address com "Rua André Vidal de Negreiros"
    E preencher o campo City com "Petrolina"
    E selecionar a opcao State
    E preencher o campo Zip/Postal Code com "56330"
    E selecionar uma opcao no campo Country
    E preencher o campo Home phone com "34348890"
    E preencher o campo Mobile phone com "96550199"
    E clicar no botao Register
    Entao o sistema exibe uma mensagem de erro

  Cenario: Campos Address em branco
    Dado que estou na tela de cadastro
    E preencher o campo First Name com "Pablo"
    E preencher o campo Last Name com "Santos"
    #E preencher o campo email com "pablossantos85@gmail.com"
    E preencher o campo Password com "12345"
    E preencher o campo City com "Petrolina"
    E selecionar a opcao State
    E preencher o campo Zip/Postal Code com "56330"
    E selecionar uma opcao no campo Country
    E preencher o campo Home phone com "34348890"
    E preencher o campo Mobile phone com "96550199"
    E clicar no botao Register
    Entao o sistema exibe uma mensagem de erro

  Cenario: Campos City em branco
    Dado que estou na tela de cadastro
    E preencher o campo First Name com "Pablo"
    E preencher o campo Last Name com "Santos"
    #E preencher o campo email com "pablossantos85@gmail.com"
    E preencher o campo Password com "12345"
    E preencher o campo Address com "Rua André Vidal de Negreiros"
    E selecionar a opcao State
    E preencher o campo Zip/Postal Code com "56330"
    E selecionar uma opcao no campo Country
    E preencher o campo Home phone com "34348890"
    E preencher o campo Mobile phone com "96550199"
    E clicar no botao Register
    Entao o sistema exibe uma mensagem de erro

  Cenario: Campos State não selecionado
    Dado que estou na tela de cadastro
    E preencher o campo First Name com "Pablo"
    E preencher o campo Last Name com "Santos"
    #E preencher o campo email com "pablossantos85@gmail.com"
    E preencher o campo Password com "12345"
    E preencher o campo Address com "Rua André Vidal de Negreiros"
    E preencher o campo City com "Petrolina"
    E preencher o campo Zip/Postal Code com "56330"
    E selecionar uma opcao no campo Country
    E preencher o campo Home phone com "34348890"
    E preencher o campo Mobile phone com "96550199"
    E clicar no botao Register
    Entao o sistema exibe uma mensagem de erro

  Cenario: Campos Zip/Postal Code em branco
    Dado que estou na tela de cadastro
    E preencher o campo First Name com "Pablo"
    E preencher o campo Last Name com "Santos"
    #E preencher o campo email com "pablossantos85@gmail.com"
    E preencher o campo Password com "12345"
    E preencher o campo Address com "Rua André Vidal de Negreiros"
    E preencher o campo City com "Petrolina"
    E selecionar a opcao State
    E selecionar uma opcao no campo Country
    E preencher o campo Home phone com "34348890"
    E preencher o campo Mobile phone com "96550199"
    E clicar no botao Register
    Entao o sistema exibe uma mensagem de erro

  Cenario: Campos Zip/Postal Code em formato errado (menor)
    Dado que estou na tela de cadastro
    E preencher o campo First Name com "Pablo"
    E preencher o campo Last Name com "Santos"
    #E preencher o campo email com "pablossantos85@gmail.com"
    E preencher o campo Password com "12345"
    E preencher o campo Address com "Rua André Vidal de Negreiros"
    E preencher o campo City com "Petrolina"
    E selecionar a opcao State
    E preencher o campo Zip/Postal Code com "563"
    E selecionar uma opcao no campo Country
    E preencher o campo Home phone com "34348890"
    E preencher o campo Mobile phone com "96550199"
    E clicar no botao Register
    Entao o sistema exibe uma mensagem de erro

  Cenario: Campos Zip/Postal Code em formato errado (maior)
    Dado que estou na tela de cadastro
    E preencher o campo First Name com "Pablo"
    E preencher o campo Last Name com "Santos"
    #E preencher o campo email com "pablossantos85@gmail.com"
    E preencher o campo Password com "12345"
    E preencher o campo Address com "Rua André Vidal de Negreiros"
    E preencher o campo City com "Petrolina"
    E selecionar a opcao State
    E preencher o campo Zip/Postal Code com "56350987"
    E selecionar uma opcao no campo Country
    E preencher o campo Home phone com "34348890"
    E preencher o campo Mobile phone com "96550199"
    E clicar no botao Register
    Entao o sistema exibe uma mensagem de erro

  Cenario: Campos Home Phone e Mobile Phone em branco
    Dado que estou na tela de cadastro
    E preencher o campo First Name com "Pablo"
    E preencher o campo Last Name com "Santos"
    #E preencher o campo email com "pablossantos85@gmail.com"
    E preencher o campo Password com "12345"
    E preencher o campo Address com "Rua André Vidal de Negreiros"
    E preencher o campo City com "Petrolina"
    E selecionar a opcao State
    E preencher o campo Zip/Postal Code com "56330"
    E selecionar uma opcao no campo Country
    E clicar no botao Register
    Entao o sistema exibe uma mensagem de erro

  Cenario: cadastro realizado com sucesso (Mobile Phone informado)
    Dado que estou na tela de cadastro
    Quando selecionar a opcao Mr. ou Mrs.
    E preencher o campo First Name com "Pablo"
    E preencher o campo Last Name com "Santos"
    #E preencher o campo email com "pablossantos85@gmail.com"
    E preencher o campo Password com "12345"
    E preencher o campo Address com "Rua André Vidal de Negreiros"
    E preencher o campo City com "Petrolina"
    E selecionar a opcao State
    E preencher o campo Zip/Postal Code com "56330"
    E selecionar uma opcao no campo Country
    E preencher o campo Home phone com "34348890"
    E preencher o campo Mobile phone com "96550199"
    E clicar no botao Register
    Entao o sistema exibira tela My Account
