angular.module("controllers.addMuch",[])
.controller("addMuch",function(
	$scope,
	$addAll
){
	$scope.coach = {
		useworker:{disabled:false,checked:true},
		xferable:{disabled:false,checked:true},
		userabs:{disabled:false,checked:true}
	};
	$scope.coachList = [];
	$scope.addAll=function(){
		var coachList=$scope.coachList;
		$addAll.addAll(coachList,function(err,result){
			if(err){
				alert("sorry,提交失败");
			}else{
				if(result && result.errorList){ 
					//$location.path("/split"); 
					alert("提交成功");  
				}else{
					console.log("请确认格式正确"); 
				}
			}
		})
	}
})