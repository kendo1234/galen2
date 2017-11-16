this.WelcomePage = $page("welcome page", {
        loginButton: ".button-login"
});


this.LoginPage = $page("Login page", {
        username:"input[name='login.username']",
        password: "input[name='login.password']",
        loginButton: ".button-login",

	loginAsUser: loggedFunction("Login user with email ${_1} and password ${_2}", function (username, password) {
		this.username.typeText(username);
		this.password.typeText(password);
		this.loginButton.click();
	})
});




