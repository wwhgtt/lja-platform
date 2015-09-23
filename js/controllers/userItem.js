angular.module("controllers.userItem",["controllers.fuckQiniu"]) 
.controller("userItem",function(
	$scope,
	$getUserItem,
	$getLastUser,
	$getMoreUsers,
	$getLisence,
	Upload,
	$window,
	$getCount 
){
	var getCount=function(type){
		$getCount.getCount(function(err,result){
			if(err){
					alert("sorry,访问出错");
			}else{
				if(result && result.success== true){
					var count=result.count;
					if(type=="coach"){
						$scope.number=count.coach;
					}else if(type=="student"){
						$scope.number=count.student;
					}else{
						$scope.number=count.none;
					}
				}else{
					alert("没有用户");
				}
			}
		})
	}
	var top=30,
	 	index=0;
 	var firstIncId;
 	var type="coach";
	$getUserItem.getUserItem(index,top,type,function(err,result){ 
		if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.success == true){
				$scope.userItem=result.userList;
				getCount("coach");
			}else{
				if(result && result.success == false){
					var errorInfo=result.errorInfo;
					alert(errorInfo);
				}
			}
		}
	})
	$scope.getCoachDetaile=function(){
		index=0;
		var type="coach";
		$scope.haveCoach =false;
		$getUserItem.getUserItem(index,top,type,function(err,result){ 
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					$scope.userItem=result.userList;
					getCount("coach");
				}else{
					if(result && result.success == false){
						var errorInfo=result.errorInfo;
						alert(errorInfo);
					}
				}
			}
		})
	}
	$scope.getStudentDetaile=function(){
		index=0;
		var top=30,
			type="student";
		$scope.haveCoach =true;
		$getUserItem.getUserItem(index,top,type,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					$scope.userItem=result.userList;
					getCount("student");
				}else{
					if(result && result.success == false){
						var errorInfo=result.errorInfo;
						alert(errorInfo);
					}
				}
			}
		})
	}
	
	$scope.getNoIdentify=function(){
		index=0;
		var	top=30,
			type="none";
		$scope.haveCoach =false;
		$getUserItem.getUserItem(index,top,type,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					$scope.userItem=result.userList;
					getCount("none");
				}else{
					if(result && result.success == false){
						var errorInfo=result.errorInfo;
						alert(errorInfo);
					}
				}
			}
		})
	}
	$scope.getFirstPage=function(){
		var role=$scope.userItem[0].role;
		if(role == "coach"){
			var type="coach";
			index=0;
			top=30;
			$getUserItem.getUserItem(index,top,type,function(err,result){ 
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.userList !== null){
						$scope.userItem=result.userList;
						getCount(type);
					}else{
						if(result && result.success == false){
							var errorInfo=result.errorInfo;
							alert(errorInfo);
						}
					}
				}
			})
		}else if(role == "student"){
			var type="student";
			index=0;
			top=30;
			$getUserItem.getUserItem(index,top,type,function(err,result){ 
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.userList !== null){
						$scope.userItem=result.userList;
						getCount(type);
					}else{
						if(result && result.success == false){
							var errorInfo=result.errorInfo;
							alert(errorInfo);
						}
					}
				}
			})
		}else{
			var type="none";
			index=0;
			top=30;
			$getUserItem.getUserItem(index,top,type,function(err,result){ 
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.userList !== null){
						$scope.userItem=result.userList;
						getCount(type);
					}else{
						if(result && result.success == false){
							var errorInfo=result.errorInfo;
							alert(errorInfo);
						}
					}
				}
			})
		}
	}
	$scope.getLastPage=function(){
	    index=Math.ceil($scope.number/30)-1;
	    var role=$scope.userItem[0].role;
		var top=30;
		if(role == "coach"){
			var type="coach";
			$getUserItem.getUserItem(index,top,type,function(err,result){
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.userList !== null){
						$scope.userItem=result.userList;
					}else{
						if(result && result.success == false){
							var errorInfo=result.errorInfo;
							alert(errorInfo);
						}
					}
				}
			})
		}else if(role == "student"){
			var type="student";
			$getUserItem.getUserItem(index,top,type,function(err,result){
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.userList !== null){
						$scope.userItem=result.userList;
					}else{
						if(result && result.success == false){
							var errorInfo=result.errorInfo;
							alert(errorInfo);
						}
					}
				}
			})
		}else{
			var type="none";
			$getUserItem.getUserItem(index,top,type,function(err,result){
				if(err){
					alert("sorry,访问出错");
				}else{
					if(result && result.userList !== null){
						$scope.userItem=result.userList;
					}else{
						if(result && result.success == false){
							var errorInfo=result.errorInfo;
							alert(errorInfo);
						}
					}
				}
			})
		}
	}
	$scope.getMoreUser = function(typer){
		if(typer === 'next'){//下页
			var top=30;
			var number=Math.ceil($scope.number/30)-1;
			// alert(index);
			if(index < number){
				index=index+1;
				var userItem=$scope.userItem;
				if(userItem.length !== 0 ){
					var role=userItem[0].role;
					if(role == "coach"){
						var type="coach";
						$getUserItem.getUserItem(index,top,type,function(err,result){
							if(err){
								alert("sorry,访问出错");
							}else{
								if(result && result.userList !== null){
									$scope.userItem=result.userList;
								}else{
									if(result && result.success == false){
										var errorInfo=result.errorInfo;
										alert(errorInfo);
									}
								}
							}
						})
					}else if(role == "student"){

						var type="student";
						$getUserItem.getUserItem(index,top,type,function(err,result){
							if(err){
								alert("sorry,访问出错");
							}else{
								if(result && result.userList !== null){
									$scope.userItem=result.userList;
								}else{
									if(result && result.success == false){
										var errorInfo=result.errorInfo;
										alert(errorInfo);
									}
								}
							}
						})
					}else{
						var type="none";
						$getUserItem.getUserItem(index,top,type,function(err,result){
							if(err){
								alert("sorry,访问出错");
							}else{
								if(result && result.userList !== null){
									$scope.userItem=result.userList;
								}else{
									if(result && result.success == false){
										var errorInfo=result.errorInfo;
										alert(errorInfo);
									}
								}
							}
						})
					}
				}
			}else{
				alert("已经没有数据了");
			}
		}else{//上页
			if(index !== 0){
				index=index-1;
				var top=30;
				var userItem=$scope.userItem;
				if(userItem.length !== 0 ){
					var role=$scope.userItem[0].role;
					if(role == "coach"){
						var type="coach";
						$getUserItem.getUserItem(index,top,type,function(err,result){
							if(err){
								alert("sorry,访问出错");
							}else{
								if(result && result.userList !== null){
									$scope.userItem=result.userList;
								}else{
									if(result && result.success == false){
										var errorInfo=result.errorInfo;
										alert(errorInfo);
									}
								}
							}
						})
					}else if(role == "student"){
						var type="student";
						$getUserItem.getUserItem(index,top,type,function(err,result){
							if(err){
								alert("sorry,访问出错");
							}else{
								if(result && result.userList !== null){
									$scope.userItem=result.userList;
								}else{
									if(result && result.success == false){
										var errorInfo=result.errorInfo;
										alert(errorInfo);
									}
								}
							}
						})
					}else{
						var type="none";
						$getUserItem.getUserItem(index,top,type,function(err,result){
							if(err){
								alert("sorry,访问出错");
							}else{
								if(result && result.userList !== null){
									$scope.userItem=result.userList;
								}else{
									if(result && result.success == false){
										var errorInfo=result.errorInfo;
										alert(errorInfo);
									}
								}
							}
						})
					}
				}
			}else{
				alert("已经是第一页了");
				$scope.firstPage=true;
			}
		}
	}
})