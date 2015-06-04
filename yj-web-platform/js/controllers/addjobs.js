angular.module("controllers.addjobs",[]) 
.controller("addjobs",function(
	$scope,
	$addjobs
){
	$scope.jobs={name:"",describle:"",duty:"",pay:"",imgName:""};
	$scope.jobsForm = function(){  
		var name = $scope.jobs.name,  
		    describle = $scope.jobs.describle,
		    duty=$scope.jobs.duty,
		    pay=$scope.jobs.pay,
		    imgName=$scope.jobs.imgName;
		$addjobs.addjobs(name,describle,duty,pay,imgName,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					alert("添加成功");   
				}else{
					console.log("添加失败"); 
				}
			}
		})
	}
})