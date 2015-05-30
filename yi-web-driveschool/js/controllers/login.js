angular.module("controllers.login",[])  //controller后面这个名字是无所谓的  只是新定义的一个内容罢了
.controller("Login",function(
	$scope,
	$login,
	$location
){
	$scope.signin = {name:"",password:""};
	$scope.signinForm = function(){  
		var key = $scope.signin.name;   
		var password = $scope.signin.password;
		$login.login(key,password,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success){
					 name=result.userInfo.name;
					 $location.path("/split");
					alert("登录成功");   
				}else{
					console.log("用户名或者密码不对"); 
				}
			}
		})
	}
})