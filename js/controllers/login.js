angular.module("controllers.login",[])  
.controller("Login",function(
	$scope,
	$login,
	$location  
){
	$scope.signin = {name:"",password:""};
	$scope.signinForm = function(){  
		var userName = $scope.signin.name;   
		var password = $scope.signin.password;
		$login.login(userName,password,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.role == "admin"){ 
					$location.path("/platform");
					$scope.$emit("userLogin");
				}else{
					alert("用户名或者密码不对"); 
				}
			}
		})
	}
})