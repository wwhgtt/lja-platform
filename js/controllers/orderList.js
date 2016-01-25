angular.module("controllers.orderList",[])
.controller("orderList",function(
	$scope,
	$fixPrice,
	$fixstatus
){
	var Status= $scope.order.Status;
	if(Status == 1){
		$scope.order.Status="完成"
	}else if(Status == 2){
		$scope.order.Status="取消"
	}else if(Status == 3){
		$scope.order.Status="跟进中"
	}else if(Status == 0){
		$scope.order.Status="跟进中"
	}else if(Status == 4){
		$scope.order.Status="咨询订单"
	}
	$scope.examines=function(order){
		var orderid=order.Id;
		var price=order.OrderPrice;
		var commision=order.OrderCommission;
		$fixPrice.fixPrice(orderid,price,commision,function(err,result){
			if(err){
			 	alert("sorry,访问出错");
			 }else{
			 	if(result && result.result == true){
			 		// $scope.orderList=result.orders;
			 		alert("保存成功")
			 	}else if (result && result.msg){
			 		var errorInfo=result.msg;
			 		alert(errorInfo);
			 	}
			 }
		})
	}
	$scope.update=function(order){
		var orderid=order.Id;
		var status=order.status;
		var cancelreason=order.Cancelreason;
		$fixstatus.fixstatus(orderid,status,cancelreason,function(err,result){
			if(err){
			 	alert("sorry,访问出错");
			 }else{
			 	if(result && result.result == true){
			 		// $scope.orderList=result.orders;
			 		alert("保存成功")
			 	}else if (result && result.success == false){
			 		var errorInfo=result.errorInfo;
			 		alert(errorInfo);
			 	}
			 }
		})
	}
})