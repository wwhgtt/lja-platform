angular.module("controllers.platform",[])
.controller("platform",function(
	$scope
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
})