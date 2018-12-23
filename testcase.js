var homePage = require('./HomePage');
var allure = require("nightwatch-allure-adapter");
var loginPage = require('./loginpage');
var data = require('./data.json');
module.exports = {
  'Test Case 01' : function (client) {
	  reporter: allure.write
      homePage.gotoHomePage(client, data.url);
      homePage.clickSignIn(client);
	  loginPage.setEmail(client,data.email);
	  loginPage.setPassword(client,data.password);
	  loginPage.clickSubmit(client);
     
      
  }
};