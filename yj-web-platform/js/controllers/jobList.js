angular.module("controllers.jobList",[])  //controller后面这个名字是无所谓的  只是新定义的一个内容罢了
.controller("jobList",function(
	$scope,
	$getjob,
	$deleteJob,
	$location
){
	$getjob.getjob(function(err,result){
    	if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.success == true){
				jobList=result.jobList;
				$scope.jobList=jobList;
				for(index in jobList){
					var imgName=jobList[index].imgName;
					jobList[index].url=BASE_URL+"/websiteData/img/"+imgName;
				}
			}else{
				if(result && result.coachList == null){
				}else{
				}
			}
		}
    })
    //删除职位
    $scope.deleteJob=function(id){
   		$deleteJob.deleteJob(id,function(err,result){
     		if(err){
			 	alert("sorry,访问出错");
			 }else{
			 	if(result && result.success == true){
			 		alert("删除成功"); 
			 		
			 	}else{
			 		console.log("删除失败"); 
			 	}
			 }
     	})
     }
})
