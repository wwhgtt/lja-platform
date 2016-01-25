angular.module("controllers.cashList",[])
.controller("cashList",function(
	$scope,
	$success,
	$faile
){
	var Status= $scope.cash.Status;
	if(Status == 1){
		$scope.cash.Status="处理成功"
	}else if(Status == 2){
		$scope.cash.Status="处理失败"
	}else if(Status == 0){
		$scope.cash.Status="申请中"
	}
	$scope.update=function(cash){
		var cashid=cash.Id;
		var status=cash.status;
		var cancelreason=cash.remark;
		if(status == 1){
			$success.success(cashid,function(err,result){
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
		}else if(status == 2){
			if(!cancelreason){
				alert("请填入失败原因")
			}else{
				$faile.faile(cashid,cancelreason,function(err,result){
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
		}
	}
})