angular.module("controllers.imgUpLoad",[])
.controller("imgUpLoad",function(
	$scope,
	$upload
){
	console.log("$scope %o",$scope);
	$scope.onFileSelect = function($files) {
		for (var i = 0; i < $files.length; i++) {
			var file = $files[i];
			var data =  {myObj: $scope.myModelObj};
			$scope.upload=function(){
				$upload.upload(data,file,function(err,result){
					if(err){
						alert("sorry,访问出错");
					}else{
						if(result && result.success == true){ 
							console.log("上传成功"); 
						}else{
							console.log("用户名或者密码不对"); 
						}
					}
			    })
			}
		};
	}
})