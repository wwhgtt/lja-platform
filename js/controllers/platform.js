angular.module("controllers.platform",[])
.controller("platform",function(
	$scope,
	$loginState
){
	$scope.myhref="/platform/login";
	$scope.login="登录";
	$scope.$on("userLogin",function(){
		$scope.loginDetile=true;
		$scope.login = "退出";
		$scope.myhref="/platform/loginOut";
	})
	$scope.$on("loginOut",function(){
		$scope.loginDetile=true;
		$scope.login = "登录";
		$scope.myhref="/platform/login";
	})
	$loginState.loginState(function(err,result){
		if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.result ==true){
				$scope.loginDetile=true; 
				$scope.login = "退出";
				$scope.myhref="/platform/loginOut";
			}else{
				$scope.loginDetile=true;
				$scope.login = "登录";
				$scope.myhref="/platform/login";
			}
		}
	})
}) 