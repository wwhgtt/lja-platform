angular.module("controllers.jobList",[])  //controller后面这个名字是无所谓的  只是新定义的一个内容罢了
.controller("jobList",function(
	$scope,
	$getjob
){
	$getjob.getjob(function(err,result){
	    	if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
				}else{
					if(result && result.coachList == null){
					}else{
					}
				}
			}
	    })
})