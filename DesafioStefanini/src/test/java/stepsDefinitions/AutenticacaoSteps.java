package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.AutenticacaoPage;
import pageObjects.SignInPage;



public class AutenticacaoSteps {
	
	@Dado("que estou na tela de autenticacao")
	public void queEstouNaTelaDeAutenticacao() {
		acessarSistema();
		Na(SignInPage.class).clicarBotaoSignIn(); 
		
	}
	
	@Quando("preencher o campo email {string}")
	public void preencherOCampoEmail(String user) {
		Na(AutenticacaoPage.class).preencherCampoEmail(generator());
	}
	
	@Quando("preencher o campo email invalido {string}")
	public void preencherOCampoEmailInvalido(String user) {
		Na(AutenticacaoPage.class).preencherCampoEmailInvalido(user);
	}

	@Quando("clicar no botao create an account")
	public void clicarNoBotaoCreateAnAccount() {
	    Na(AutenticacaoPage.class).clickBotaoCreateAcc();
	}

	@Entao("o sistema exibira tela de cadastro")
	public void oSistemaExibiraTelaDeCadastro() {
		assertTrue(driver.findElement(By.id("account-creation_form")).isDisplayed());
	}
	
	@Entao("o sistema exibira uma mensagem de erro")
	public void oSistemaExibiraUmaMensagemDeErro() throws Exception {
		Thread.sleep(2000);
		//assertTrue(driver.findElement(By.id("create_account_error")).isDisplayed());
		assertEquals("Invalid email address.", driver.findElement(By.cssSelector("#create_account_error > ol > li")).getText());
	}

}
