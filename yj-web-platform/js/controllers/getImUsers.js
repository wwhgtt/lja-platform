angular.module("controllers.getImUsers",[]) 
.controller("getImUsers",function(
	$scope,
	$getExamineUser
){
	$getExamineUser.getExamineUser(function(err,result){
		if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.applyList !== null){
				$scope.imuserLIst=result.applyList;
			}else{
				if(result && result.applyList == null){
					alert("未处理的教练申请为空");
				}
			}
		}
	})
})