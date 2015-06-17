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
	$scope.Download={url:"",Durl:"",IUrl:""};
	$scope.postIdCardF=function(user){
		var lisenceType="coach",
	 	userId=user._id;
		$scope.users.id=userId;
		var lisenceList=user.lisence;
		if(lisenceList){
			if(lisenceList.coach){
			    var lisenceType="coach";
				$getDown.getDown(lisenceType,userId,function(err,result){
					if(err){
						alert("sorry,访问出错");
					}else{
						if(result && result.success == true){
							$scope.jiashi = true;
							$scope.Download.url=result.downloadUrl;
						}else{
							alert("出错了");
						}
					}
				})
			}else{
				$scope.jiashizheng=true;
			}
			if(lisenceList.drive){
			    var lisenceType="drive";
				$getDown.getDown(lisenceType,userId,function(err,result){
					if(err){
						alert("sorry,访问出错");
					}else{
						if(result && result.success == true){
							$scope.jiaolian = true;
							$scope.Download.Durl=result.downloadUrl;
						}else{
							alert("出错了");
						}
					}
				})
			}else{
				$scope.jiaolianzheng = true;
			}
			if(lisenceList.identity){
			    var lisenceType="identity";
				$getDown.getDown(lisenceType,userId,function(err,result){
					if(err){
						alert("sorry,访问出错");
					}else{
						if(result && result.success == true){
							$scope.shenfen = true;
							$scope.Download.Iurl=result.downloadUrl;
						}else{
							alert("出错了");
						}
					}
				})
			}else{
				$scope.shenfenzheng=true;
			}
		}else{
			alert("该用户还没有上传任何证件");
			$scope.jiashizheng=true;
			$scope.jiaolianzheng = true;
			$scope.shenfenzheng=true;
		}
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
											alert("图片链接已回传给服务器");
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
					console.log("无需添加"); 
				}
			}
		})
		var lisenceType="drive";
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
											alert("图片链接回传给服务器");
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
					console.log("无需添加"); 
				}
			}
		})
		var lisenceType="identity";
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
											alert("图片链接回传给服务器");
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
					console.log("无需添加"); 
				}
			}
		})
	}
})