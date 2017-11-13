
load("myPages.js");

beforeTest(function (){
	var driver = createDriver("http://testapp.galenframework.com", "1024x768");
	session.put("driver", driver);
});


test("My notes page", function(){
	var driver = session.get("driver");

	var welcomePage = new WelcomePage(driver);
	welcomePage.loginButton.click();

	var loginPage =  new LoginPage(driver);
	loginPage.username.typeText("testuser@example.com");
	loginPage.password.typeText("test123");
	loginPage.loginButton.click();

	checkLayout(driver, "mynotes.gspec", "desktop");
	});

afterTest(function () {
	var driver = session.get("driver");
	driver.quit();
});


var devices = {
	mobile: {
		deviceName: "mobile",
		tags: ["mobile"],
		size: "500x600"
	},
	desktop: {
		deviceName: "desktop",
		tags: ["desktop"],
		size: "1024x768"
	}
};

forAll(devices, function () {
	test("Home page on ${devicename}", function (device){
	var driver = session.get("driver");
	resize(driver, device.size);
	checkLayout(driver, "home.gspec", device.tags);
	});
});
