'use strict';
var signInPage = function() {
 
    this.setEmail = function(page, email) {
     page.setValue('#email',email);
	 
    };
    this.setPassword = function(page, email) {
    page.setValue('#passwd',email);
    };
    this.clickSubmit = function(page){
      page.click('#SubmitLogin > span')
    };
   
}; 
module.exports = new signInPage();