angular.module("controllers.examineNews",[]) 
.controller("examineNews",function(
	$scope,
	$examine,
	$window,
	$resaon,
	$getDown
){
    $scope.examine={id:"",teachType:"",name:"",resaon:"",urlCoach:"",userId:"",urlID:"",urlOther:"",urlCoach:"",urlIDa:"",urlOthera:""};
	$scope.examines=function(imuser){
	    $scope.showExamine = true;
	    $scope.showReason = false;
	    var lisenceType="coach";
		var userId=imuser.userId;
		$getDown.getDown(lisenceType,userId,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					console.log("成功");
					$scope.examine.urlCoacha=result.downloadUrl;
				}else{
					alert("出错了");
				}
			}
		})
		var lisenceType="identity";
		$getDown.getDown(lisenceType,userId,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					console.log("成功");
					$scope.examine.urlIDa=result.downloadUrl;
				}else{
					alert("出错了");
				}
			}
		})
		var lisenceType="drive";
		$getDown.getDown(lisenceType,userId,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					console.log("成功");
					$scope.examine.urlOthera=result.downloadUrl;
				}else{
					alert("出错了");
				}
			}
		})
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
		var lisenceType="coach";
		var userId=imuser.userId;
		$getDown.getDown(lisenceType,userId,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					console.log("成功");
					$scope.examine.urlCoach=result.downloadUrl;
				}else{
					alert("出错了");
				}
			}
		})
		var lisenceType="identity";
		$getDown.getDown(lisenceType,userId,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					console.log("成功");
					$scope.examine.urlID=result.downloadUrl;
				}else{
					alert("出错了");
				}
			}
		})
		var lisenceType="drive";
		$getDown.getDown(lisenceType,userId,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					console.log("成功");
					$scope.examine.urlOther=result.downloadUrl;
				}else{
					alert("出错了");
				}
			}
		})
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