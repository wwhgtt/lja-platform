angular.module("controllers.getUser",["controllers.userItem","controllers.fuckQiniu"]) 
.controller("getUser",function(
	$scope,
	$getUser
){
	$scope.user = {phone:"",_id:""};
	$scope.finaUser = function(){  
		var phone = $scope.user.phone;  
		$getUser.getUser(phone,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success== true){
					$scope.user=result.user;
					$scope.phone=true;
				}else{
					alert("没有该用户");
				}
			}
		})
	}
	
	// $scope.postIdCardF=function(){

	// }
})