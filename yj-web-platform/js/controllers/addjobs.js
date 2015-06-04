angular.module("controllers.addjobs",['ngFileUpload']) 
.controller("addjobs",function(
	$scope,
	$addjobs,
	Upload,
	$location
){
	$scope.jobs={name:"",describle:"",duty:"",pay:"",imgName:""};
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
					$location.path("/getjobs")  
				}else{
					console.log("添加失败"); 
				}
			}
		})
	}
})