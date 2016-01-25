angular.module("controllers.addManager",[])  
.controller("addManager",function(
	$scope,
	$getMaker
){
	$getMaker.getMaker(function(err,result){
		if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.result == true){
				$scope.cashLIst=result.cashusers;
			}else if(result && result.msg){
				var errorInfo=result.msg;
				alert(errorInfo);
			}
		}
	})  
})