angular.module("controllers.addAllStu",[])
.controller("addAllStu",function(
	$scope,
	$addAllStu
){
	$scope.student = {
		useworker:{disabled:false,checked:true},
		xferable:{disabled:false,checked:true},
		userabs:{disabled:false,checked:true}
	};
	$scope.studentList = [];
	$scope.addAll=function(){
		var studentList=$scope.studentList;
		$addAllStu.addAllStu(studentList,function(err,result){
			if(err){
				alert("sorry,提交失败");
			}else{
				if(result && result.errorList == null){ 
					
					alert("提交成功");  
				}else{
					 $scope.errorList=result.errorList;
				}
			}
		})
	}
})