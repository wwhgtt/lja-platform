angular.module("controllers.fuckQiniu",[]) 
.controller("fuckQiniu",function(
	$scope,
	$getLisence,
	Upload,
	$postLisence,
	$getDown,
	$examine
){
	$scope.Download={coachUrl:"",driveUrl:"",identityUrl:""};
	$scope.photoShow = false;
	$scope.postIdCardF=function(user){
		$scope.photoShow = !$scope.photoShow;
	 	userId=user._id;
		var lisenceList=user.lisence;
		if(lisenceList){
			for(var index in lisenceList){
				(function(indexTemp){
					$getDown.getDown(indexTemp,userId,function(err,result){
						if(err){
							alert("sorry,访问出错");
						}else{
							if(result && result.success == true){
								$scope.Download[indexTemp + "Url"]=result.downloadUrl;
							}else{
								alert("出错了");
							}
						}
					})
				})(index);
			}
		}
		$scope.upload = function(files,type){
			$getLisence.getLisence(type,userId,function(err,result){
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.success == true){
						var token = result.upToken;
						var env = result.env;
						if (files && files.length){
				            var file = files[0];
				            var key = env+"/" + userId;
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
				                $postLisence.postLisence(type,userId,function(err,result){
				                	if(err){
										alert("sorry,访问出错");
									}else{
										if(result && result.success == true){
											if(!user.lisence){
												user.lisence = {};
											}
											user.lisence[type] = key;
											$scope.Download[type + "Url"] = result.downloadUrl;
										}else{
												alert("出错了");
											}
										}
									}
				                )
				            });
				        }
					}
				}
			})			
		}
	}
})