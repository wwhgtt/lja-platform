angular.module("controllers.test",[]) 
.controller("test",function(
	$scope
){
	console.log("$scope %o",$scope);
	$scope.user={email:""};
})