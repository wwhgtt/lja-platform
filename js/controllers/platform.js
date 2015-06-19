angular.module("controllers.platform",[])
.controller("platform",function(
	$scope,
	$loginState
){
	$scope.myhref="/platform/login";
	$scope.login="登录";
	$scope.$on("userLogin",function(){
		$scope.login = "退出";
		$scope.myhref="/platform/loginOut";
	})
	$scope.$on("loginOut",function(){
		$scope.login = "登录";
		$scope.myhref="/platform/login";
	})
	$loginState.loginState(function(err,result){
		if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.state ==true){ 
				$scope.login = "退出";
				$scope.myhref="/platform/loginOut";
			}else{
				$scope.login = "登录";
				$scope.myhref="/platform/login";
			}
		}
	})
}) 