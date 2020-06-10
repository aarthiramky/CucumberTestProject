package com.stepdefintion;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.base.LibGlobal;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AdactinBookingPageStep extends LibGlobal{

	@Given("^User is on the Book Hotel Page$")
	public void user_is_on_the_Book_Hotel_Page() throws Throwable {
		System.out.println("User is on the Book Hotel Page");
	}

	@When("^User enters or selects \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_or_selects_and(String firstName, String lastName, String billingAddress, String creditCardNo, String creditCardType, String ExpiryMonth,
			String ExpiryYear, String cvvNumber) throws Throwable {
		
		WebElement firstname = driver.findElement(By.id("first_name"));
		
		firstname.sendKeys(firstName);
		
		WebElement lastname = driver.findElement(By.id("last_name"));
		
		lastname.sendKeys(lastName);
		
		WebElement address = driver.findElement(By.id("address"));
		
		address.sendKeys(billingAddress);
		
		WebElement cc_no = driver.findElement(By.id("cc_num"));
		
		cc_no.sendKeys(creditCardNo);
		
		WebElement cc_typeSelect = driver.findElement(By.id("cc_type"));
		
		Select s7 = new Select(cc_typeSelect);
		
		s7.selectByVisibleText(creditCardType);
		
		WebElement cc_exp_monthSelect = driver.findElement(By.id("cc_exp_month"));
		
		Select s8 = new Select(cc_exp_monthSelect);
		
		s8.selectByVisibleText(ExpiryMonth);
		
		WebElement cc_exp_yearSelect = driver.findElement(By.id("cc_exp_year"));
		
		Select s9 = new Select(cc_exp_yearSelect);
		
		s9.selectByVisibleText(ExpiryYear);
		
		WebElement cc_cvv = driver.findElement(By.id("cc_cvv"));
		
		cc_cvv.sendKeys(cvvNumber);
		
	}

	@When("^User clicks on Book Now button$")
	public void user_clicks_on_Book_Now_button() throws Throwable {
		WebElement book_nowBtn = driver.findElement(By.id("book_now"));
		
		book_nowBtn.click();
		
		Thread.sleep(5000);
	}

	@Then("^User navigates to Booking Confirmation Page and OrderID is generated$")
	public void user_navigates_to_Booking_Confirmation_Page_and_OrderID_is_generated() throws Throwable {
		WebElement orderID = driver.findElement(By.id("order_no"));
		
		System.out.println("Order Id"+orderID.getAttribute("value"));
	}

}
