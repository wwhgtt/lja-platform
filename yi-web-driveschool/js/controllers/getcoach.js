angular.module("controllers.getcoach",[])  //controller后面这个名字是无所谓的  只是新定义的一个内容罢了
.controller("getcoach",function(
	$scope,
	$getcoach,
	$location
){
	var incId=0,
		minIncId = 0,
	    top=80;
	var firstIncId;
	    $getcoach.getcoach(incId,top,'next',function(err,result){
	    	$scope.coachList=result.coachList;
	    	minIncId = $scope.coachList[0].incId - 1;
	    	// console.log("minIncId ",minIncId);
            var coachList=$scope.coachList;
            $scope.coach={name:"",idNumber:"",phone:"",type:"",incId:""};
	    	if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					$scope.firstPage=true;
					firstIncId = coachList[0].incId;
				}else{
					if(result && result.coachList == null){
						console.log("教练为空");
					}else{
						console.log("sorry,获取失败");
					}
				}
			}
	    })
	$scope.getMoreCoach = function(type){
		if(type === 'next'){//下页
			var lastCoach = $scope.coachList[$scope.coachList.length - 1];
			var incId = lastCoach.incId;
			$getcoach.getcoach(incId,top,type,function(err,result){
				$scope.coachList = result.coachList;
				if(err){
					alert("sorry,访问出错");
					}else{
						if(result && result.success == true){
							$scope.firstPage=false;
						}else{
							if(result && result.coachList == null){
								console.log("教练为空");
							}else{
								console.log("sorry,获取失败");
							}
						}
					}
			})
		}else{//上页
			var firstCoach = $scope.coachList[0];
			var incId = firstCoach.incId;
			if(incId !== firstIncId){
				$getcoach.getcoach(incId,top,type,function(err,result){
				$scope.coachList = result.coachList;
					if(err){
						alert("sorry,访问出错");
					}else{
						if(result && result.coachList !== null){
		                     console.log("获取成功");
						}else{
							if(result && result.commentArray == null){
								console.log("教练为空");
							}else{
								console.log("sorry,获取失败");
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