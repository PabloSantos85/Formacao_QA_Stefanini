package utils;

import java.util.Random;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import io.cucumber.core.api.Scenario;

public class Utils {

	public static WebDriver driver;

	public static void acessarSistema() {
		System.setProperty("webdriver.chrome.driver", "C:\\Driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

		driver.get("http://automationpractice.com/index.php");

	}

	public static <T> T Na(Class<T> classe) {
		return PageFactory.initElements(driver, classe);
	}

	public static void capturarTela(Scenario scenario) {
		final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "image/png");
	}
	
	public static String generator() {
		String rndString = "abcdefghijklmnopqrstuvxyz1234567890";
		StringBuilder stringGenerator = new StringBuilder();
		Random rnd = new Random();
		while(stringGenerator.length() < 10) {
			int index = (int) (rnd.nextFloat() * rndString.length());
			stringGenerator.append(rndString.charAt(index));
		}
		String randomString = stringGenerator.toString();
		return randomString + "@gmail.com";
		
	}

}
