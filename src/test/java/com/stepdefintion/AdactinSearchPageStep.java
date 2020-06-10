package com.stepdefintion;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.base.LibGlobal;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AdactinSearchPageStep extends LibGlobal {

	@Given("^User is on the Search Hotel Page$")
	public void user_is_on_the_Search_Hotel_Page() throws Throwable {
		System.out.println("User is on the Search Page");
	}

	@When("^User selects \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_selects_and(String location, String hotel, String roomtype, String noOfRooms, String adultsPerRoom,
			String childrenPerRoom) throws Throwable {
		WebElement locationSelect = driver.findElement(By.id("location"));

		WebElement hotelSelect = driver.findElement(By.id("hotels"));

		WebElement roomTypeSelect = driver.findElement(By.id("room_type"));

		WebElement room_nosSelect = driver.findElement(By.id("room_nos"));

		WebElement adult_roomSelect = driver.findElement(By.id("adult_room"));

		WebElement child_roomSelect = driver.findElement(By.id("child_room"));

		Select s1 = new Select(locationSelect);

		s1.selectByVisibleText(location);

		Select s2 = new Select(hotelSelect);

		s2.selectByVisibleText(hotel);

		Select s3 = new Select(roomTypeSelect);

		s3.selectByValue(roomtype);

		Select s4 = new Select(room_nosSelect);

		s4.selectByValue(noOfRooms);

		int adultRoomNos = Integer.parseInt(adultsPerRoom);

		Select s5 = new Select(adult_roomSelect);

		s5.selectByIndex(adultRoomNos);

		Select s6 = new Select(child_roomSelect);

		int childrenRoomNos = Integer.parseInt(childrenPerRoom);

		s6.selectByIndex(childrenRoomNos);

	}

	@When("^User clicks on Search Page$")
	public void user_clicks_on_Search_Page() throws Throwable {
		WebElement searchBtn = driver.findElement(By.id("Submit"));

		searchBtn.click();
	}

	@Then("^User navigates to Select User Page$")
	public void user_navigates_to_Select_User_Page() throws Throwable {
		System.out.println("User is on Select User Page");
	}

	@When("^User selects from the search result$")
	public void user_selects_from_the_search_result() throws Throwable {
		WebElement radioBtn = driver.findElement(By.id("radiobutton_0"));

		radioBtn.click();
	}

	@When("^User clicks on Continue button$")
	public void user_clicks_on_Continue_button() throws Throwable {
		WebElement continueBtn = driver.findElement(By.id("continue"));

		continueBtn.click();
	}

	@Then("^User navigates to Book a Hotel Page$")
	public void user_navigates_to_Book_a_Hotel_Page() throws Throwable {
		System.out.println("User is on Book Hotel Page");
	}

}
