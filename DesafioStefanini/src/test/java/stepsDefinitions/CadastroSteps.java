package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static utils.Utils.Na;
import static utils.Utils.acessarSistema;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.AutenticacaoPage;
import pageObjects.CadastroPage;
import pageObjects.SignInPage;

public class CadastroSteps {

	@Dado("que estou na tela de cadastro")
	public void queEstouNaTelaDeCadastro() {
		acessarSistema();
		Na(SignInPage.class).clicarBotaoSignIn();
		Na(AutenticacaoPage.class).preencherCampoEmail("pablossantos2543@gmail.com");
		Na(AutenticacaoPage.class).clickBotaoCreateAcc();

	}

	@Quando("selecionar a opcao Mr. ou Mrs.")
	public void selecionarAOpcaoMrOuMrs() {
		Na(CadastroPage.class).clicarCampoGender();
	}

	@Quando("preencher o campo First Name com {string}")
	public void preencherOCampoFirstNameCom(String firstName) {
		Na(CadastroPage.class).preencherCampoFName(firstName);
	}

	@Quando("preencher o campo Last Name com {string}")
	public void preencherOCampoLastNameCom(String lastName) {
		Na(CadastroPage.class).preencherCampoLName(lastName);
	}

//	@Quando("preencher o campo email com {string}")
//	public void preencherOCampoEmailCom(String email) {
//		Na(CadastroPage.class).preencherOCampoEmail(email);
//	}

	@Quando("preencher o campo Password com {string}")
	public void preencherOCampoPasswordCom(String password) {
		Na(CadastroPage.class).preencherCampoPassword(password);

	}

	@Quando("preencher o campo Address com {string}")
	public void preencherOCampoAddressCom(String address) {
		Na(CadastroPage.class).preencherCampoAddress(address);
	}

	@Quando("preencher o campo City com {string}")
	public void preencherOCampoCityCom(String city) {
		Na(CadastroPage.class).preencherCampoCity(city);
	}

	@Quando("selecionar a opcao State")
	public void selecionarAOpcaoState() {
		Na(CadastroPage.class).clicarCampoState();
		Na(CadastroPage.class).clicarOpcaoState();
	}

	@Quando("preencher o campo Zip\\/Postal Code com {string}")
	public void preencherOCampoZipPostalCodeCom(String postCode) {
		Na(CadastroPage.class).preencherCampoPostCode(postCode);
	}

	@Quando("selecionar uma opcao no campo Country")
	public void selecionarUmaOpcaoNoCampoCountry() {
		Na(CadastroPage.class).clicarCampoCountry();
		Na(CadastroPage.class).clicarOpcaoCountry();
	}

	@Dado("preencher o campo Home phone com {string}")
	public void preencherOCampoHomePhoneCom(String homePhone) {
		Na(CadastroPage.class).preencherCampoHomePhone(homePhone);
	}

	@Quando("preencher o campo Mobile phone com {string}")
	public void preencherOCampoMobilePhoneCom(String phoneMobile) {
		Na(CadastroPage.class).preencherCampoPhoneMobile(phoneMobile);
	}

	@Quando("clicar no botao Register")
	public void clicarNoBotaoRegister() {
		Na(CadastroPage.class).clicarBotaoRegister();

	}

	@Entao("o sistema exibira tela My Account")
	public void oSistemaExibiraTelaMyAccount() {
		assertEquals("MY ACCOUNT", driver.findElement(By.xpath("//h1[@class='page-heading']")).getText());
	}

	@Entao("o sistema exibe uma mensagem de erro")
	public void oSistemaExibeUmaMensagemDeErro() {
		assertEquals("There is 1 error", driver.findElement(By.cssSelector(".alert>p")).getText());
	}

}
