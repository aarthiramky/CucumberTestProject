package com.stepdefintion;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import com.base.LibGlobal;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class AdactinLoginPageStep  extends LibGlobal{
	

	@Given("^User is on the Adactin Login Page$")
	public void user_is_on_the_Adactin_Login_Page() throws Throwable {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://adactin.com/HotelApp/");
	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"Standard$")
	public void user_enters_and_Standard(String s1, String s2) throws Throwable {
		WebElement txtUserName = driver.findElement(By.id("username"));
		txtUserName.sendKeys(s1);
		WebElement txtPassword = driver.findElement(By.id("password"));
		txtPassword.sendKeys(s2);

	}

	@When("^User clicks on Login button$")
	public void user_clicks_on_Login_button() throws Throwable {
		WebElement btnLogin = driver.findElement(By.id("login"));
		btnLogin.click();
	}

	@Then("^User logged in and verify welcome message$")
	public void user_logged_in_and_verify_welcome_message() throws Throwable {
		boolean b = driver.getCurrentUrl().contains("SearchHotel");
		Assert.assertTrue("verify next page", b);
		//driver.quit();
	}
	
	
}
