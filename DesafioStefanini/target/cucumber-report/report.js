$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/autenticacao.feature");
formatter.feature({
  "name": "Autenticar email",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@autenticacao"
    }
  ]
});
formatter.scenario({
  "name": "email autenticado",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@autenticacao"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de autenticacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "AutenticacaoSteps.queEstouNaTelaDeAutenticacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "AutenticacaoSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao create an account",
  "keyword": "E "
});
formatter.match({
  "location": "AutenticacaoSteps.clicarNoBotaoCreateAnAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibira tela de cadastro",
  "keyword": "Entao "
});
formatter.match({
  "location": "AutenticacaoSteps.oSistemaExibiraTelaDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "email invalido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@autenticacao"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de autenticacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "AutenticacaoSteps.queEstouNaTelaDeAutenticacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email invalido \"qwertyui\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "AutenticacaoSteps.preencherOCampoEmailInvalido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao create an account",
  "keyword": "E "
});
formatter.match({
  "location": "AutenticacaoSteps.clicarNoBotaoCreateAnAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibira uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "AutenticacaoSteps.oSistemaExibiraUmaMensagemDeErro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "campo email em branco",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@autenticacao"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de autenticacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "AutenticacaoSteps.queEstouNaTelaDeAutenticacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao create an account",
  "keyword": "Quando "
});
formatter.match({
  "location": "AutenticacaoSteps.clicarNoBotaoCreateAnAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibira uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "AutenticacaoSteps.oSistemaExibiraUmaMensagemDeErro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/cadastro.feature");
formatter.feature({
  "name": "Cadastrar usuario",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@cadastro"
    }
  ]
});
formatter.scenario({
  "name": "Campos Name em branco",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de cadastro",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queEstouNaTelaDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Last Name com \"Santos\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoLastNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Password com \"12345\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoPasswordCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Address com \"Rua Andr� Vidal de Negreiros\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoAddressCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo City com \"Petrolina\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoCityCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a opcao State",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarAOpcaoState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Zip/Postal Code com \"56330\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoZipPostalCodeCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar uma opcao no campo Country",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarUmaOpcaoNoCampoCountry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Home phone com \"34348890\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoHomePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Mobile phone com \"96550199\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoMobilePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Register",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarNoBotaoRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.oSistemaExibeUmaMensagemDeErro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Campos Password em branco",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de cadastro",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queEstouNaTelaDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo First Name com \"Pablo\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoFirstNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Last Name com \"Santos\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoLastNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Address com \"Rua Andr� Vidal de Negreiros\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoAddressCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo City com \"Petrolina\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoCityCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a opcao State",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarAOpcaoState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Zip/Postal Code com \"56330\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoZipPostalCodeCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar uma opcao no campo Country",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarUmaOpcaoNoCampoCountry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Home phone com \"34348890\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoHomePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Mobile phone com \"96550199\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoMobilePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Register",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarNoBotaoRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.oSistemaExibeUmaMensagemDeErro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Campos Password Invalido(menos de 5 caracteres)",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de cadastro",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queEstouNaTelaDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo First Name com \"Pablo\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoFirstNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Last Name com \"Santos\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoLastNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Password com \"123\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoPasswordCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Address com \"Rua Andr� Vidal de Negreiros\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoAddressCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo City com \"Petrolina\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoCityCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a opcao State",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarAOpcaoState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Zip/Postal Code com \"56330\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoZipPostalCodeCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar uma opcao no campo Country",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarUmaOpcaoNoCampoCountry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Home phone com \"34348890\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoHomePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Mobile phone com \"96550199\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoMobilePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Register",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarNoBotaoRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.oSistemaExibeUmaMensagemDeErro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Campos Address em branco",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de cadastro",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queEstouNaTelaDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo First Name com \"Pablo\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoFirstNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Last Name com \"Santos\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoLastNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Password com \"12345\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoPasswordCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo City com \"Petrolina\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoCityCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a opcao State",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarAOpcaoState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Zip/Postal Code com \"56330\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoZipPostalCodeCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar uma opcao no campo Country",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarUmaOpcaoNoCampoCountry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Home phone com \"34348890\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoHomePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Mobile phone com \"96550199\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoMobilePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Register",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarNoBotaoRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.oSistemaExibeUmaMensagemDeErro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Campos City em branco",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de cadastro",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queEstouNaTelaDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo First Name com \"Pablo\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoFirstNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Last Name com \"Santos\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoLastNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Password com \"12345\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoPasswordCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Address com \"Rua Andr� Vidal de Negreiros\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoAddressCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a opcao State",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarAOpcaoState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Zip/Postal Code com \"56330\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoZipPostalCodeCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar uma opcao no campo Country",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarUmaOpcaoNoCampoCountry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Home phone com \"34348890\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoHomePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Mobile phone com \"96550199\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoMobilePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Register",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarNoBotaoRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.oSistemaExibeUmaMensagemDeErro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Campos State n�o selecionado",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de cadastro",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queEstouNaTelaDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo First Name com \"Pablo\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoFirstNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Last Name com \"Santos\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoLastNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Password com \"12345\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoPasswordCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Address com \"Rua Andr� Vidal de Negreiros\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoAddressCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo City com \"Petrolina\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoCityCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Zip/Postal Code com \"56330\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoZipPostalCodeCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar uma opcao no campo Country",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarUmaOpcaoNoCampoCountry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Home phone com \"34348890\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoHomePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Mobile phone com \"96550199\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoMobilePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Register",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarNoBotaoRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.oSistemaExibeUmaMensagemDeErro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Campos Zip/Postal Code em branco",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de cadastro",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queEstouNaTelaDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo First Name com \"Pablo\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoFirstNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Last Name com \"Santos\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoLastNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Password com \"12345\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoPasswordCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Address com \"Rua Andr� Vidal de Negreiros\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoAddressCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo City com \"Petrolina\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoCityCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a opcao State",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarAOpcaoState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar uma opcao no campo Country",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarUmaOpcaoNoCampoCountry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Home phone com \"34348890\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoHomePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Mobile phone com \"96550199\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoMobilePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Register",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarNoBotaoRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.oSistemaExibeUmaMensagemDeErro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Campos Zip/Postal Code em formato errado (menor)",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de cadastro",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queEstouNaTelaDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo First Name com \"Pablo\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoFirstNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Last Name com \"Santos\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoLastNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Password com \"12345\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoPasswordCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Address com \"Rua Andr� Vidal de Negreiros\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoAddressCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo City com \"Petrolina\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoCityCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a opcao State",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarAOpcaoState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Zip/Postal Code com \"563\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoZipPostalCodeCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar uma opcao no campo Country",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarUmaOpcaoNoCampoCountry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Home phone com \"34348890\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoHomePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Mobile phone com \"96550199\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoMobilePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Register",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarNoBotaoRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.oSistemaExibeUmaMensagemDeErro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Campos Zip/Postal Code em formato errado (maior)",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de cadastro",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queEstouNaTelaDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo First Name com \"Pablo\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoFirstNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Last Name com \"Santos\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoLastNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Password com \"12345\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoPasswordCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Address com \"Rua Andr� Vidal de Negreiros\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoAddressCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo City com \"Petrolina\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoCityCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a opcao State",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarAOpcaoState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Zip/Postal Code com \"56350987\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoZipPostalCodeCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar uma opcao no campo Country",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarUmaOpcaoNoCampoCountry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Home phone com \"34348890\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoHomePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Mobile phone com \"96550199\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoMobilePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Register",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarNoBotaoRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.oSistemaExibeUmaMensagemDeErro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Campos Home Phone e Mobile Phone em branco",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de cadastro",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queEstouNaTelaDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo First Name com \"Pablo\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoFirstNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Last Name com \"Santos\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoLastNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Password com \"12345\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoPasswordCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Address com \"Rua Andr� Vidal de Negreiros\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoAddressCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo City com \"Petrolina\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoCityCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a opcao State",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarAOpcaoState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Zip/Postal Code com \"56330\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoZipPostalCodeCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar uma opcao no campo Country",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarUmaOpcaoNoCampoCountry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Register",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarNoBotaoRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.oSistemaExibeUmaMensagemDeErro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "cadastro realizado com sucesso (Mobile Phone informado)",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na tela de cadastro",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queEstouNaTelaDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a opcao Mr. ou Mrs.",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroSteps.selecionarAOpcaoMrOuMrs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo First Name com \"Pablo\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoFirstNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Last Name com \"Santos\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoLastNameCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Password com \"12345\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoPasswordCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Address com \"Rua Andr� Vidal de Negreiros\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoAddressCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo City com \"Petrolina\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoCityCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a opcao State",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarAOpcaoState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Zip/Postal Code com \"56330\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoZipPostalCodeCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar uma opcao no campo Country",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.selecionarUmaOpcaoNoCampoCountry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Home phone com \"34348890\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoHomePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Mobile phone com \"96550199\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.preencherOCampoMobilePhoneCom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Register",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarNoBotaoRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibira tela My Account",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.oSistemaExibiraTelaMyAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/signIn.feature");
formatter.feature({
  "name": "Acessar Sistema",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "cenario Acessar pagina de autenticacao de email",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Signin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na homepage",
  "keyword": "Dado "
});
formatter.match({
  "location": "SignInSteps.queEstejaNaHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Sign in",
  "keyword": "Quando "
});
formatter.match({
  "location": "SignInSteps.clicarNoBotaoSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a tela de autenticacao",
  "keyword": "Entao "
});
formatter.match({
  "location": "SignInSteps.oSistemaExibeATelaDeAutenticacao()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png", null);
formatter.after({
  "status": "passed"
});
});