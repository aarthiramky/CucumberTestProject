package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) 
@CucumberOptions(features = { "src/test/resources" },glue="com\\stepdefintion", plugin= {"html:src\\test\\resources\\Reports\\HTMLReports",
		"json:src\\test\\resources\\Reports\\JsonReports\\report.json","junit:src\\test\\resources\\Reports\\XMLReports\\report.xml"})
public class TestRunnerClass {
	
}
