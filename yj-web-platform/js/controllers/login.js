angular.module("controllers.login",[])  //controller后面这个名字是无所谓的  只是新定义的一个内容罢了
.controller("Login",function(
	$scope,
	$login,
	$location  //这个引入的是common里面定义的服务名字   相当于把服务引进来
){
	$scope.signin = {name:"",password:""};//先设置一个存放页面输入数据的对象；其实就是一个json数组；
	$scope.signinForm = function(){  // 调用html页面里面的ng-submit函数；
		console.log("signinForm");
		console.log("signin %o",$scope.signin);
		var userName = $scope.signin.name;   //html页面里面的ng-module设置的内容    数据绑定
		var password = $scope.signin.password;

		$login.login(userName,password,function(err,result){//err == null           $login是之前定义的服务  login是一个json对象  是服务定义后的内容（存放）  err必须为第一个参数
			//function
			if(err){//这个代表的是服务本身出错后的程序
				alert("sorry,访问出错");
			}else{
				if(result && result.role){ //result代表的是服务访问成功且有返回值表示密码正确
				}else{
					console.log("用户名或者密码不对"); //服务访问成功  但是输入的密码不正确

				}
			}
		})
	}
})