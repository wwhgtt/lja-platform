angular.module("controllers.login",[])  
.controller("Login",function(
	$scope,
	$login,
	$location  
){
	$scope.signin = {name:"",password:""};
	$scope.signinForm = function(){  
		console.log("signinForm");
		console.log("signin %o",$scope.signin);
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
					console.log("用户名或者密码不对"); 

				}
			}
		})
	}
})