angular.module("controllers.loginOut",["controllers.platform"])
.controller("loginOut",function(
	$scope,
	$loginOut,
	$location
){
	$loginOut.loginOut(function(err,result){
		if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.success == true){
				$location.path("/platform/login");
				$scope.$emit("loginOut");
			}else{
			}
		}
	})
})