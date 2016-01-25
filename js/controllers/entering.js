angular.module("controllers.entering",[])
.controller("Entering",function(
	$scope,
	$getOrder
){
	$getOrder.getOrder(function(err,result){
		if(err){
		 	alert("sorry,访问出错");
		 }else{
		 	if(result && result.result == true){
		 		$scope.orderList=result.orders;
		 	}else if (result && result.success == false){
		 		var errorInfo=result.errorInfo;
		 		alert(errorInfo);
		 	}
		 }
	})
})