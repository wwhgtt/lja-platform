angular.module("controllers.getImUsers",["controllers.examineNews"]) 
.controller("getImUsers",function(
	$scope,
	$getExamineUser
){
	$scope.examine={name:"",resaon:""};
	$getExamineUser.getExamineUser(function(err,result){
		if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.result == true){
				$scope.imuserLIst=result.contracts;

			}else{
				if(result && result.applyList == null){
					alert("未处理的教练申请为空");
				}
			}
		}
	})
})