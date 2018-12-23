var homePage = function() {
   
   	this.gotoHomePage = function(page, url1)
	{
		page.url(url1)
	  
      page.waitForElementVisible('body', 1000)
	}
	
	this.clickSignIn = function(page)
	{
		page.click('#header > div.nav > div > div > nav > div.header_user_info')
	  
    }
   
}; 
module.exports = new homePage();
