function check() {
	var name = du.username.value;
	var pwd = du.password.value;

	if (name == "" || pwd == "") {
		alert(" 用户名或密码不能为空 ！")
		du.username.focus();
		du.reset();
		return;
	} else if ( name == "xxx" && pwd == "loveyou" ) {
		//当前页面跳转
		window.location.href="./love.htm"
		//新窗口跳转
		//window.open("./love.htm");
	} else {
		alert(" 用户名或密码不正确 ！");
		du.username.focus();
		du.reset();
		return;
	}

}