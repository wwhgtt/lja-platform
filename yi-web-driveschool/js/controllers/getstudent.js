angular.module("controllers.getstudent",[])  //controller后面这个名字是无所谓的  只是新定义的一个内容罢了
.controller("getstudent",function(
	$scope,
	$getstudent,
	$location
){
	var incId=0,
		minIncId = 0,
	    top=80;
	var firstIncId;
	    $getstudent.getstudent(incId,top,'next',function(err,result){
	    	$scope.studentList=result.studentList;
	    	minIncId = $scope.studentList[0].incId - 1;
            var studentList=$scope.studentList;
            $scope.student={name:"",idNumber:"",phone:""};
	    	if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
				    $scope.firstPage=true;
				    firstIncId = studentList[0].incId;
				}else{
					if(result && result.studentList == null){
						console.log("学员为空");
					}else{
						console.log("sorry,获取失败");
					}
				}
			}
	    })
	$scope.getMoreStudent = function(type){
		if(type === 'next'){//下页
			var lastStudent = $scope.studentList[$scope.studentList.length - 1];
			var incId = lastStudent.incId;
			$getstudent.getstudent(incId,top,type,function(err,result){
				$scope.studentList = result.studentList;
				if(err){
					alert("sorry,访问出错");
					}else{
						if(result && result.success == true){
						   $scope.firstPage=false;
						}else{
							if(result && result.studentList == null){
								console.log("学员为空");
							}else{
								console.log("sorry,获取失败");
							}
						}
					}
			})
		}else{//上页
			var firstStudent = $scope.studentList[0];
			var incId = firstStudent.incId;
			if(incId !== firstIncId){
				$getstudent.getstudent(incId,top,type,function(err,result){
				$scope.studentList = result.studentList;
				if(err){
						alert("sorry,访问出错");
					}else{
						if(result && result.success == true){
						    console.log("获取成功");
						}else{
							if(result && result.commentArray == null){
								console.log("学员为空");
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