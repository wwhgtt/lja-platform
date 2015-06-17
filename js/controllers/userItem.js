angular.module("controllers.userItem",["controllers.fuckQiniu"]) 
.controller("userItem",function(
	$scope,
	$getUserItem,
	$getLastUser,
	$getMoreUsers,
	$getLisence,
	Upload,
	$window
){
	var top=30,
	 	incId=0;
 	var firstIncId;
	$getUserItem.getUserItem(top,function(err,result){ 
		if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.userList !== null){
				$scope.userItem=result.userList;
				var userItem=$scope.userItem;
				firstIncId = userItem[0].incId;
			}else{
				if(result && result.userList == null){
					alert("用户为空");
				}
			}
		}
	})
	$scope.getFirstPage=function(){
		$getUserItem.getUserItem(top,function(err,result){ 
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.userList !== null){
					$scope.userItem=result.userList;
				}else{
					if(result && result.userList == null){
						alert("用户为空");
					}
				}
			}
		})
	}
	$scope.getLastPage=function(){
		var top=30;
		$getLastUser.getLastUser(top,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.userList !== null){
					$scope.userItem=result.userList;
				}else{
					if(result && result.userList == null){
						alert("用户为空");
					}
				}
			}
		})
	}
	$scope.getMoreUser = function(type){
		if(type === 'next'){//下页
			var top=30;
			var userItem=$scope.userItem;
			if(userItem.length !== 0 ){
				var lastUser = $scope.userItem[$scope.userItem.length - 1];
				var incId = lastUser.incId;
				$getMoreUsers.getMoreUsers(incId,top,type,function(err,result){
					if(err){
						alert("sorry,访问出错");
						}else{
							if(result && result.success == true){
								$scope.userItem = result.userList;
							}else{
								if(result && result.userList.length == 0){
									alert("用户为空");
								}else{
									alert("sorry,获取失败");
								}
							}
						}
				})
			}else{
				if(userItem.length == 0){
					alert("已经没有数据了");
					$window.location.reload();
				}
			}
		}else{//上页
			var firstUser = $scope.userItem[0];
			if(firstUser){
				var incId = firstUser.incId;
				if(incId !== firstIncId){
					var top=30;
					$getMoreUsers.getMoreUsers(incId,top,type,function(err,result){
						if(err){
							alert("sorry,访问出错");
						}else{
							if(result && result.userList !== null){
								$scope.userItem = result.userList;
							}else{
								if(result && result.userList == null){
									alert("用户为空");
								}else{
									alert("sorry,获取失败");
								}
							}
						}
				  })
				}else{
					alert("已经是第一页了");
					$scope.firstPage=true;
				}
			}else{
				// alert("本页没有任何数据，请返回首页");
				// $window.history.back(-1);
			}
		}
	}
})