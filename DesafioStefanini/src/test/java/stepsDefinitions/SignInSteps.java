package stepsDefinitions;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.SignInPage;

import static org.junit.Assert.assertEquals;
import static utils.Utils.*;

import org.openqa.selenium.By;

public class SignInSteps {
	
	
	@Dado("que esteja na homepage")
	public void queEstejaNaHomepage() {
	    acessarSistema();
	}

	@Quando("clicar no botao Sign in")
	public static void clicarNoBotaoSignIn() {
		Na(SignInPage.class).clicarBotaoSignIn(); 
	}

	@Entao("o sistema exibe a tela de autenticacao")
	public static void oSistemaExibeATelaDeAutenticacao() {
	    assertEquals("AUTHENTICATION", driver.findElement(By.className("page-heading")).getText());
	}
	
}
