angular.module("controllers.examineNews",[]) 
.controller("examineNews",function(
	$scope,
	$addnameremark,
	$agreecontract,
	$rejectcontract,
	$window
){
	var Cstatus= $scope.imuser.Cstatus;
	if(Cstatus == 1){
		$scope.imuser.Cstatus="待审核"
	}else if(Cstatus == 2){
		$scope.imuser.Cstatus="已审核"
	}else if(Cstatus == 3){
		$scope.imuser.Cstatus="已拒绝"
	}
    $scope.examine={id:"",teachType:"",name:"",resaon:"",urlCoach:"",userId:"",urlID:"",urlOther:"",urlCoach:"",urlIDa:"",urlOthera:"",phone:""};
	$scope.examineCoach=function(id){
		var nameremark=$scope.examine.name;
		$addnameremark.addnameremark(id,nameremark,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.result == true){
					$agreecontract.agreecontract(id,function(err,result){
						if(err){
							alert("sorry,访问出错");
						}else{
							if(result && result.result == true){
								alert("审核成功");
								// $window.location.reload();
							}else{
								if(result && result.msg){
									alert(result.msg);
								}
							}
						}
					})
				}else{
					if(result && result.msg){
						alert(result.msg);
					}
				}
			}
		})
	}
	$scope.examineResaon=function(id){
		var resaon=$scope.examine.resaon;
		$rejectcontract.rejectcontract(id,resaon,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.result == true){
					alert("提交成功");
					// $window.location.reload();
				}else{
					if(result && result.msg){
						alert(result.msg);
					}
				}
			}
		})
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