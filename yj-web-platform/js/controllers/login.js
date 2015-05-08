angular.module("controllers.login",[])
.controller("Login",function(
	$scope,
	$login
){
	$scope.signin = {name:"",password:""};
	$scope.signinForm = function(){
		console.log("signinForm");
		var name = $scope.signin.name;
		var password = $scope.signin.password;

		$login.login(name,password,function(err,result){//err == null
			//function
			if(err){
				console.log("用户名或者密码不对");
			}else{
				if(result && result.success){
					$location.path=BASE_URL + '/platform/initAdmin';
				}else{
					console.log("用户名或者密码不对");
					
				}
			}
		})
	}
})