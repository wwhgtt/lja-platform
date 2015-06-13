angular.module("controllers.entering",[])
.controller("Entering",function(
	$scope,
	$driveSchool,
	$getSchool
){
	$scope.opt={name:""};
	$scope.addSchoolRepeat=function(){
		$scope.addSchool = true;
		$scope.getSchool = false;
	}
	$scope.addDriveSchool=function(){
		var Data=$scope.opt.name;
		$driveSchool.add(Data,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					alert("添加成功");
					$scope.opt.name= null;  
				}else{
                    alert("sorry,添加失败，请稍后重试");
				}
			}
		})
	}
	$scope.getSchoolRepeat=function(){
		$getSchool.getSchool(function(err,result){
			if(err){
			 	alert("sorry,访问出错");
			 }else{
			 	if(result && result.success == true){
			 		$scope.addSchool = false;
			 		$scope.getSchool = true;
			 		$scope.schoolList=result.driveSchoolList;
			 	}else{
			 		console.log("删除失败"); 
			 	}
			 }
		})
	}
})