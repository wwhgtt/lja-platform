angular.module("controllers.platform",[])
.controller("platform",function(
	$scope,
	$window
){
	$scope.login="登录";
	$scope.$on("userLogin",function(){
		$scope.login = "退出";
	})
})