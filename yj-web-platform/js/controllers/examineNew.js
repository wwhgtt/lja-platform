angular.module("controllers.examineNews",[]) 
.controller("examineNews",function(
	$scope,
	$examine,
	$window,
	$resaon
){
    $scope.examine={id:"",teachType:"",name:"",resaon:""};
	$scope.examines=function(imuser){
	    $scope.showExamine = true;
	    $scope.showReason = false;
		$scope.examineCoach=function(){
			var idNumber=$scope.examine.id,
			teachType=$scope.examine.teachType,
			name=$scope.examine.name,
			coachId=imuser.userId;
			$examine.examine(coachId,idNumber,name,teachType,function(err,result){
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.success == true){
						alert("审核成功");
						$window.location.reload();
					}else{
						var errorInfo=result.errorInfo;
					    alert(errorInfo);
					}
				}
			})
		}
	}
	$scope.examineRefuseCoach=function(imuser){
		$scope.showExamine = false;
		$scope.showReason = true;
		$scope.examineResaon=function(){
			var reason=$scope.examine.resaon;
			var coachId=imuser.userId;
			$resaon.resaon(coachId,reason,function(err,result){
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.success == true){
						alert("拒绝审核成功");
						$window.location.reload();
					}else{
						var errorInfo=result.errorInfo;
					    alert(errorInfo);
					}
				}
			})
		}
	}
})