angular.module("controllers.testView",[])  
.controller("testView",function(
	$scope,
	$getTest,
	$location
){
	var incId=0,
		minIncId = 0,
	    top=30;
	var firstIncId;
	$getTest.getTest(incId,top,'next',function(err,result){
    	 if(err){
			alert("sorry,访问出错");
		 }else{
			if(result && result.testerList.length !== 0){
				$scope.testerList=result.testerList;
				 minIncId = $scope.testerList[0].incId - 1;
         		 var testerList=$scope.testerList;
				 $scope.firstPage=true;
				 firstIncId = testerList[0].incId;
			}else{
				if(result && result.testerList.length == 0){
					var errorInfo=result.errorInfo;
					alert(errorInfo);
				}else{
					alert("sorry,获取失败");
				}
			}
		 }
    })
    $scope.getMoreView = function(type){
		if(type === 'next'){//下页
			var lastTester = $scope.testerList[$scope.testerList.length - 1];
			var incId = lastTester.incId;
			$getTest.getTest(incId,top,type,function(err,result){
				if(err){
					alert("sorry,访问出错");
					}else{
						if(result && result.testerList.length !== 0){
							$scope.testerList = result.testerList;
							$scope.firstPage=false;
						}else{
							if(result && result.testerList.length == 0){
								$scope.lastPage = true;
								alert("没有下一页了");
							}else{
								alert("sorry,获取失败");
							}
						}
					}
			})
		}else{//上页
			var firstTester = $scope.testerList[0];
			var incId = firstTester.incId;
			if(incId !== firstIncId){
				$getTest.getTest(incId,top,type,function(err,result){
				$scope.testerList = result.testerList;
					if(err){
						alert("sorry,访问出错");
					}else{
						if(result && result.testerList.length !== 0){
						}else{
							if(result && result.testerList.length == 0){
								alert("教练为空");
							}else{
								alert("sorry,获取失败");
							}
						}
					}
			  })
			}else{
				alert("已经是第一页了");
				$scope.firstPage=true;
			}
		}
	}
})
