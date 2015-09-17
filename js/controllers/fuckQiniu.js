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
	$scope.use={Dname:"",Dsite:"",teachType:"",coachLisenceDate:"",studentNum:"",coach:"",photo:""};
	$scope.photoShow = false;
	var coachPhoto="";
	$scope.postIdCardF=function(user){
		$scope.photoShow = !$scope.photoShow;
	 	userId=user.id;
		var lisenceList=user.lisence;
		if(lisenceList){
			if(lisenceList.coach){
				coachPhoto="教练证";
				var lisenceType="coach";
				$getDown.getDown(lisenceType,userId,function(err,result){
					if(err){
						alert("sorry,访问出错");
					}else{
						if(result && result.success == true){
							$scope.Download.coachUrl=result.downloadUrl;
						}else{
							alert("出错了");
						}
					}
				})
			}
			if(lisenceList.drive){
				coachPhoto=coachPhoto+",驾驶证";
				var lisenceType="drive";
				$getDown.getDown(lisenceType,userId,function(err,result){
					if(err){
						alert("sorry,访问出错");
					}else{
						if(result && result.success == true){
							$scope.Download.driveUrl=result.downloadUrl;
						}else{
							alert("出错了");
						}
					}
				})
			}
			if(lisenceList.identity){
				coachPhoto=coachPhoto+",身份证";
				var lisenceType="identity";
				$getDown.getDown(lisenceType,userId,function(err,result){
					if(err){
						alert("sorry,访问出错");
					}else{
						if(result && result.success == true){
							$scope.Download.identityUrl=result.downloadUrl;
						}else{
							alert("出错了");
						}
					}
				})
			}
		}
		$scope.use.photo=coachPhoto;
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
		//获取用户更多信息
		var role=user.role;
		if(role == "coach"){
			$scope.roleCoach=true;
			var driveSchool=user.driveSchool;
			var name=user.site.name;
			$scope.use.Dname=driveSchool.name;
			$scope.use.Dsite=name;
			var teachType=user.teachType;
			if(teachType == 0){
				$scope.use.teachType="一对一"
			}else{
				$scope.use.teachType="一对多"
			}
			$scope.use.coachLisenceDate=user.coachLisenceDate;
			$scope.use.studentNum=user.studentNum;
		}else if(role == "student"){
			$scope.roleStutent=true;
			$scope.use.coach=user.coach;
		}else{
			alert("没有更多信息可待查询")
		}
	}
})