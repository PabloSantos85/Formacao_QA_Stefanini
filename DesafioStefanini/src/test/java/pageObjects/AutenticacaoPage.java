package pageObjects;

import java.util.Random;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class AutenticacaoPage {
	
	public static String generator() {
		String rndString = "abcdefghijklmnopqrstuvxyz1234567890";
		StringBuilder stringGenerator = new StringBuilder();
		Random rnd = new Random();while(stringGenerator.length() < 10) {
			int index = (int) (rnd.nextFloat() * rndString.length());
			stringGenerator.append(rndString.charAt(index));
		}
		String randomString = stringGenerator.toString();
		return randomString + "@gmail.com";
		
	}
	
	@FindBy(id = "email_create")
	private WebElement campoEmail;
	
	@FindBy(id = "email_create")
	private WebElement campoEmailInvalido;
	
	@FindBy(id = "SubmitCreate")
	private WebElement botaoCreateAcc;
	
	
	public void preencherCampoEmail(String generator) {
		campoEmail.sendKeys(generator());
	}
	
	public void preencherCampoEmailInvalido(String user) {
		campoEmailInvalido.sendKeys(user);
	}
	
	public void clickBotaoCreateAcc() {
		botaoCreateAcc.click();
	}
}
	
//	public void inserirEmail(String email) {
//		Na(AutenticacaoPage.class).campoEmail.sendKeys(email);
//	}
	
//	public void clickCreateAcc() {
//		Na(AutenticacaoPage.class).botaoCreateAcc.click();;
//	}
	
//}
