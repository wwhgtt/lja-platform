angular.module("controllers.jobsList",['ngFileUpload'])  
.controller("jobsList",function(
	$scope,
	$getjob,
	Upload,
	$reviseJobs
){
	$getjob.getjob(function(err,result){
    	if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.success == true){
				var jobsList=result.jobList;
				$scope.jobsList=jobsList;
				for(index in jobsList){
					var imgName=jobsList[index].imgName;
					jobsList[index].url=BASE_URL+"/websiteData/img/"+imgName;
				}
			}else{
				if(result && result.jobList == null){
					console.log("sorry,职位为空")
				}else{ 

				}
			}
		}
    })
    $scope.jobs={imgName:""};
    $scope.$watch('files', function () {
    	$scope.upload($scope.files);
    });
    $scope.log = '';
	$scope.upload = function(files){
        if (files && files.length) {
            var file = files[0];
            Upload.upload({
            	url:BASE_URL+"/platform/officialWebsite/job/imgUpload",
            	file: file
            }).success(function (data, status, headers, config) {
            	alert("上传成功");
                $scope.log = 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                $scope.jobs.imgName=data.fileName;
            });
        }
    };
    $scope.reviseJobs=function(job){
    	job.url=BASE_URL+"/websiteData/img/"+$scope.jobs.imgName;
	    var name=job.name,
	    	describle=job.describle,
	    	duty=job.duty,
	    	pay=job.pay,
	    	imgName=job.imgName,
	    	id=job.id,
	    	imgName=$scope.jobs.imgName;
	    $reviseJobs.reviseJobs(id,name,describle,duty,pay,imgName,function(err,result){
	    	if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					alert("修改成功");
				}else{
					alert("修改失败");
				}
			}
	    })
    }
})