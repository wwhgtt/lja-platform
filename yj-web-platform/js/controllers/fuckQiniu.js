angular.module("controllers.fuckQiniu",[]) 
.controller("fuckQiniu",function(
	$scope,
	$getLisence
){
	$scope.users={token:""};
	$scope.postIdCardF=function(user){
		 var lisenceType="coach",
		 	 userId=user._id;
		$getLisence.getLisence(lisenceType,userId,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					// alert("添加成功");
					$scope.users.token=result.upToken;
					console.log($scope.users.token)
				}else{
					console.log("添加失败"); 
				}
			}
		})
	}
})