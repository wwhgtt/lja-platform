angular.module("controllers.userItemTemp",[])
.controller("userItemTemp",function(
	$scope,
	$getCancle,
	$getCoachStudent
){
	$scope.photoShow = false;
	var coachPhoto="";
	$scope.postIdCard=function(user){
		var start=new Date();
		var t=function(a){
			return a<10?"0"+a:a;
		}
		var time=start.getFullYear()+"-"+t(start.getMonth()+1)+"-"+t(start.getDate());
		var coachId=user.id;
		$scope.mapDataNext=[];
		$getCancle.getCancle(coachId,time,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					$scope.mapDataNext=result.statistics;
					$scope.$broadcast("mapDataNext",$scope.mapDataNext)
				}else{
					alert("出错了");
				}
			}
		})
		$getCoachStudent.getCoachStudent(coachId,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					$scope.studentList=result.studentList;
				}else{
					alert("出错了");
				}
			}
		})
		coachPhoto = "";
		$scope.photoShow = !$scope.photoShow;
	 	userId=user.id;
		var lisenceList=user.lisence;
		if(lisenceList){
			if(lisenceList.coach){
				coachPhoto="教练证,";
			}
			if(lisenceList.drive){
				coachPhoto=coachPhoto+"驾驶证,";
			}
			if(lisenceList.identity){
				coachPhoto=coachPhoto+"身份证";
			}
		}
		$scope.use.photo=coachPhoto;
		//获取用户更多信息
		var role=user.role;
		if(role == "student"){
			$scope.roleStutent=true;
			$scope.use.coach=user.coach;
		}else{
			$scope.roleCoach=true;
			if(user.driveSchool){
				var driveSchool=user.driveSchool;
				$scope.use.Dname=driveSchool.name;
			}
			if(user.site){
				var name=user.site.name;
				$scope.use.Dsite=name;
			}
			var teachType=user.teachType;
			if(teachType == 0){
				$scope.use.teachType="一对一"
			}else{
				$scope.use.teachType="一对多"
			}
			$scope.use.coachLisenceDate=user.coachLisenceDate;
			$scope.use.studentNum=user.studentNum;
		}
	}
})