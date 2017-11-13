
var welcomePage = new WelcomePage(driver);
welcomePage.loginButton.click();

var loginPage = new LoginPage(driver);
loginPage.waitForIt();

loginPage.username.typeText("testuser@example.com");
loginPage.password.typeText("test123");
loginPage.loginButton.click();
