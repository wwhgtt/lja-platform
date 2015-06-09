angular.module("controllers.fuckQiniu",[]) 
.controller("fuckQiniu",function(
	$scope,
	$getLisence,
	Upload,
	$postLisence,
	$getDown,
	$examine
){
	$scope.users={token:"",id:""};
	$scope.postIdCardF=function(user){
		 var lisenceType="coach",
		 	 userId=user._id;
		$scope.users.id=userId;
		$getLisence.getLisence(lisenceType,userId,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					$scope.users.token=result.upToken;
					$scope.$watch('files', function () {
				        $scope.upload($scope.files);
				    });
				    $scope.log = '';
				    $scope.upload = function(files){
				        if (files && files.length){
				            var file = files[0];
				            var token=$scope.users.token;
				            var key=$scope.users.id;
				            Upload.upload({
				            	url:"http://upload.qiniu.com/",
				            	fields:{
				            		key:key,
				            		token:token
				            	},
				            	file: file
				            }).success(function (data, status, headers, config){
				            	alert("上传成功");
				                $scope.log = 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data) + '\n' + $scope.log;
				                $postLisence.postLisence(lisenceType,userId,function(err,result){
				                	if(err){
										alert("sorry,访问出错");
									}else{
										if(result && result.success == true){
											console.log("图片链接回传给服务器");
										}else{
												alert("出错了");
											}
										}
									}
				                )
				            });
				        }
				    };
				}else{
					console.log("添加失败"); 
				}
			}
		})
		$scope.Download={url:""};
		$scope.getDownload=function(){
			// var lisenceType="identity";
			$getDown.getDown(lisenceType,userId,function(err,result){
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.success == true){
						console.log("成功");
						$scope.Download.url=result.downloadUrl;
						$scope.DownSuccess=true;
					}else{
						alert("出错了");
					}
				}
			})
		}
	}
})