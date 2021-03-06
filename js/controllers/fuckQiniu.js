angular.module("controllers.fuckQiniu",[]) 
.controller("fuckQiniu",function(
	$scope,
	$getLisence,
	Upload,
	$postLisence,
	$getDown,
	$examine,
	$getCoachStudent,
	$getCancle,
	$getWeekOrder,
	$getYearOrder,
	$getCancleNum,
	$getWeekOrderNum,
	$getYearOrderNum
){
	$scope.Download={coachUrl:"",driveUrl:"",identityUrl:""};
	$scope.use={Dname:"",Dsite:"",teachType:"",coachLisenceDate:"",studentNum:"",coach:"",photo:""};
	$scope.photoShow = false;
	$scope.zhexiantu= true;
	var coachPhoto="";
	$scope.diff=function(type,user){
		if(type=='lesson'){
			$scope.zhexiantu = true;
			$scope.anoZheXian = false;
			var start=new Date();
			var t=function(a){
				return a<10?"0"+a:a;
			}
			var time=start.getFullYear()+"-"+t(start.getMonth()+1)+"-"+t(start.getDate());
			var coachId=user.id;
			$scope.mapData=[];
			$getCancle.getCancle(coachId,time,function(err,result){
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.success == true){
						$scope.mapData=result.statistics;
						$scope.$broadcast("mapData",$scope.mapData)
					}else{
						alert("出错了");
					}
				}
			})
			var week=moment().week();
			var year=moment().year();
			$getWeekOrder.getWeekOrder(coachId,year,week,function(err,result){
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.success == true){
						$scope.mapDataWeek=result.statistics;
						$scope.$broadcast("mapDataWeek",$scope.mapDataWeek)
					}else{
						alert("出错了");
					}
				}
			})
			$getYearOrder.getYearOrder(coachId,year,function(err,result){
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.success == true){
						$scope.mapDataYear=result.statistics;
						$scope.$broadcast("mapDataYear",$scope.mapDataYear)
					}else{
						alert("出错了");
					}
				}
			})
		}else{
			$scope.zhexiantu = false;
			$scope.anoZheXian = true;
			var start=new Date();
			var t=function(a){
				return a<10?"0"+a:a;
			}
			var time=start.getFullYear()+"-"+t(start.getMonth()+1)+"-"+t(start.getDate());
			var coachId=user.id;
			$scope.mapData=[];
			$getCancleNum.getCancleNum(coachId,time,function(err,result){
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.success == true){
						$scope.mapData=result.statistics;
						$scope.$broadcast("mapData",$scope.mapData)
					}else{
						alert("出错了");
					}
				}
			})
			var week=moment().week();
			var year=moment().year();
			$getWeekOrderNum.getWeekOrderNum(coachId,year,week,function(err,result){
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.success == true){
						$scope.mapDataWeek=result.statistics;
						$scope.$broadcast("mapDataWeek",$scope.mapDataWeek)
					}else{
						alert("出错了");
					}
				}
			})
			$getYearOrderNum.getYearOrderNum(coachId,year,function(err,result){
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.success == true){
						$scope.mapDataYear=result.statistics;
						$scope.$broadcast("mapDataYear",$scope.mapDataYear)
					}else{
						alert("出错了");
					}
				}
			})
		}
	}
	$scope.postIdCardF=function(user){
		var start=new Date();
		var t=function(a){
			return a<10?"0"+a:a;
		}
		var time=start.getFullYear()+"-"+t(start.getMonth()+1)+"-"+t(start.getDate());
		var coachId=user.id;
		$scope.mapData=[];
		$getCancle.getCancle(coachId,time,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					$scope.mapData=result.statistics;
					$scope.$broadcast("mapData",$scope.mapData)
				}else{
					alert("出错了");
				}
			}
		})
		var week=moment().week();
		var year=moment().year();
		$getWeekOrder.getWeekOrder(coachId,year,week,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					$scope.mapDataWeek=result.statistics;
					$scope.$broadcast("mapDataWeek",$scope.mapDataWeek)
				}else{
					alert("出错了");
				}
			}
		})
		$getYearOrder.getYearOrder(coachId,year,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					$scope.mapDataYear=result.statistics;
					$scope.$broadcast("mapDataYear",$scope.mapDataYear)
				}else{
					alert("出错了");
				}
			}
		})
		$getCoachStudent.getCoachStudent(coachId,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					$scope.studentList=result.studentList;
				}else{
					alert("出错了");
				}
			}
		})
		coachPhoto = "";
		$scope.photoShow = !$scope.photoShow;
	 	userId=user.id;
		var lisenceList=user.lisence;
		if(lisenceList){
			if(lisenceList.coach){
				coachPhoto="教练证,";
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
				coachPhoto=coachPhoto+"驾驶证,";
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
				coachPhoto=coachPhoto+"身份证";
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
		if(role == "student"){
			$scope.roleStutent=true;
			$scope.use.coach=user.coach;
		}else{
			$scope.roleCoach=true;
			if(user.driveSchool){
				var driveSchool=user.driveSchool;
				$scope.use.Dname=driveSchool.name;
			}
			if(user.site){
				var name=user.site.name;
				$scope.use.Dsite=name;
			}
			var teachType=user.teachType;
			if(teachType == 0){
				$scope.use.teachType="一对一"
			}else{
				$scope.use.teachType="一对多"
			}
			$scope.use.coachLisenceDate=user.coachLisenceDate;
			$scope.use.studentNum=user.studentNum;
		}
	}
})
