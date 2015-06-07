angular.module("controllers.userItem",[]) 
.controller("userItem",function(
	$scope,
	$getUserItem,
	$getLastUser,
	$getMoreUsers
){
	var top=1,
	 	incId=0;
 	var firstIncId;
	$scope.user={_id:"",phone:"",createDate:""};
	$getUserItem.getUserItem(top,function(err,result){ 
		if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.userList !== null){
				$scope.userItem=result.userList;
				var userItem=$scope.userItem;
				firstIncId = userItem[0].incId;
				alert("获取成功");
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
					alert("获取成功");
				}else{
					if(result && result.userList == null){
						alert("用户为空");
					}
				}
			}
		})
	}
	$scope.getLastPage=function(){
		var top=200;
		$getLastUser.getLastUser(top,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.userList !== null){
					$scope.userItem=result.userList;
					alert("获取成功");
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
			var top=2;
			var lastUser = $scope.userItem[$scope.userItem.length - 1];
			var incId = lastUser.incId;
			$getMoreUsers.getMoreUsers(incId,top,type,function(err,result){
				if(err){
					alert("sorry,访问出错");
					}else{
						if(result && result.success == true){
							$scope.userItem = result.userList;
						}else{
							if(result && result.userList == null){
								console.log("用户为空");
							}else{
								console.log("sorry,获取失败");
							}
						}
					}
			})
		}else{//上页
			var firstUser = $scope.userItem[0];
			if(firstUser){
				var incId = firstUser.incId;
				if(incId !== firstIncId){
					var top=1;
					$getMoreUsers.getMoreUsers(incId,top,type,function(err,result){
						if(err){
							alert("sorry,访问出错");
						}else{
							if(result && result.userList !== null){
								$scope.userItem = result.userList;
			                    console.log("获取成功");
							}else{
								if(result && result.userList == null){
									console.log("用户为空");
								}else{
									console.log("sorry,获取失败");
								}
							}
						}
				  })
				}else{
					alert("已经是第一页了");
					$scope.firstPage=true;
				}
			}else{
				alert("本页没有任何数据，请返回首页");
			}
		}
	}
})