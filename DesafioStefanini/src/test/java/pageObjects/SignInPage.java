package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SignInPage {
	
	@FindBy(linkText = "Sign in" )
	private WebElement botaoSignIn;
	
	public void clicarBotaoSignIn() {
		botaoSignIn.click();
	}
	
}
