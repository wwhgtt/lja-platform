angular.module("controllers.examineNews",[]) 
.controller("examineNews",function(
	$scope,
	$examine,
	$window,
	$resaon,
	$getDown,
	$getUserById
){
    $scope.examine={id:"",teachType:"",name:"",resaon:"",urlCoach:"",userId:"",urlID:"",urlOther:"",urlCoach:"",urlIDa:"",urlOthera:"",phone:""};
	$scope.examines=function(imuser){
	    var lisenceType="coach";
		var userId=imuser.userId;
		$getUserById.getUserById(userId,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					$scope.examine.name=result.user.name;
					$scope.examine.phone=result.user.phone;
					$scope.examine.teachType=result.user.teachType+'';
					$scope.examine.id=result.user.idNumber;
				}else{
					var errorInfo=result.errorInfo;
				    alert(errorInfo);
				}
			}
		})
		$getDown.getDown(lisenceType,userId,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
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
					$scope.examine.urlOthera=result.downloadUrl;
				}else{
					alert("出错了");
				}
			}
		})
		$scope.examineCoach=function(){
			var idNumber=$scope.examine.id,
				teachType=parseInt($scope.examine.teachType,10),
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
		var lisenceType="coach";
		var userId=imuser.userId;
		$getDown.getDown(lisenceType,userId,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
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
	$scope.showLarge=function(url){
		$scope.largeImg=true;
		$scope.myHref= url;
	}
	$scope.showLarger=function(url){
		$scope.largeImage=true;
		$scope.myHref= url;
	}
})