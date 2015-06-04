angular.module("controllers.imgUpLoad",['ngFileUpload'])
.controller('imgUpLoad', function(
	$scope,
	Upload
){
	console.log("$scope %o",$scope);
	$scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.log = '';
    $scope.upload = function(files){
    	console.log(files);
        if (files && files.length) {
            var file = files[0];
            Upload.upload({
            	url:BASE_URL+"/platform/officialWebsite/job/imgUpload",
            	file: file
            }).success(function (data, status, headers, config) {
        	    alert("上传成功");
                $scope.log = 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data) + '\n' + $scope.log;
            });
        }
    };
})