package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CadastroPage {

	// CheckBoxes
	@FindBy(id = "id_gender1")
	private WebElement checkBoxMr;

	public void clicarCampoGender() {
		checkBoxMr.click();
	}

	@FindBy(id = "id_gender2")
	private WebElement checkBoxMrs;

	public void clicarCampoGender2() {
		checkBoxMrs.click();
	}

	// PersonalSectionName
	@FindBy(id = "customer_firstname")
	private WebElement campoFirstName;

	public void preencherCampoFName(String firstName) {
		campoFirstName.sendKeys(firstName);
	}

	@FindBy(id = "customer_lastname")
	private WebElement campoLastName;

	public void preencherCampoLName(String lastName) {
		campoLastName.sendKeys(lastName);
	}

	// Email
	@FindBy(id = "email")
	private WebElement campoEmail;

	public void preencherOCampoEmail(String Email) {
		campoEmail.sendKeys(Email);
	}

	// Password
	@FindBy(id = "passwd")
	private WebElement campoPassword;

	public void preencherCampoPassword(String password) {
		campoPassword.sendKeys(password);
	}

	// AddressSectionName
	@FindBy(id = "firstname")
	private WebElement AddressCampoFirstName;

	public void preencherCampoAFirstName(String firstName) {
		AddressCampoFirstName.sendKeys(firstName);
	}

	@FindBy(id = "lastname")
	private WebElement AddressCampoLastName;

	public void preencherCampoALName(String lastName) {
		AddressCampoLastName.sendKeys(lastName);
	}

	// Address
	@FindBy(id = "address1")
	private WebElement campoAddress;

	public void preencherCampoAddress(String address) {
		campoAddress.sendKeys(address);
	}

	// City
	@FindBy(id = "city")
	private WebElement campoCity;

	public void preencherCampoCity(String city) {
		campoCity.sendKeys(city);
	}
	
	//State
	@FindBy(id = "id_state")
	private WebElement campoState;
	
	@FindBy(xpath = "//select[@id='id_state']//option[@value='5']")
	private WebElement opcaoState;
	
	public void clicarCampoState() {
		campoState.click();
	}
	
	public void clicarOpcaoState() {
		opcaoState.click();
	}

	// PostCode
	@FindBy(id = "postcode")
	private WebElement campoPostCode;

	public void preencherCampoPostCode(String postCode) {
		campoPostCode.sendKeys(postCode);
	}

	// Country
	@FindBy(id = "uniform-id_country")
	private WebElement campoCountry;

	@FindBy(id = "id_country")
	private WebElement opcaoCountry;

	public void clicarCampoCountry() {
		campoCountry.click();
	}

	public void clicarOpcaoCountry() {
		opcaoCountry.click();
	}
	
	//HomePhone
	@FindBy(id = "phone")
	private WebElement campoHomePhone;
	
	public void preencherCampoHomePhone(String homePhone) {
		campoHomePhone.sendKeys(homePhone);
	}

	// MobilePhone
	@FindBy(id = "phone_mobile")
	private WebElement campoPhoneMobile;

	public void preencherCampoPhoneMobile(String phoneMobile) {
		campoPhoneMobile.sendKeys(phoneMobile);
	}

	// BotaoRegister
	@FindBy(id = "submitAccount")
	private WebElement botaoRegister;

	public void clicarBotaoRegister() {
		botaoRegister.click();
	}

}
