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
	$getCount.getCount(function(err,result){
		if(err){
				alert("sorry,访问出错");
		}else{
			if(result && result.success== true){
				$scope.number=result.count;
			}else{
				alert("没有用户");
			}
		}
	})
	var top=30,
	 	index=0;
 	var firstIncId;
	$getUserItem.getUserItem(index,top,function(err,result){ 
		if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.success == true){
				$scope.userItem=result.userList;
				var userItem=$scope.userItem;
				firstIncId = userItem[0].incId;
			}else{
				if(result && result.success == false){
					var errorInfo=result.errorInfo;
					alert(errorInfo);
				}
			}
		}
	})
	$scope.getFirstPage=function(){
		var index=0;
		$getUserItem.getUserItem(index,top,function(err,result){ 
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
	$scope.getLastPage=function(){
	    index=Math.ceil($scope.number/30)-1;
		var top=30;
		$getUserItem.getUserItem(index,top,function(err,result){
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
	$scope.getMoreUser = function(type){
		if(type === 'next'){//下页
			var top=30;
			var number=Math.ceil($scope.number/30)-1;
			if(index < number){
				index=index+1;
				var userItem=$scope.userItem;
				if(userItem.length !== 0 ){
					$getUserItem.getUserItem(index,top,function(err,result){
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
				}
			}else{
				alert("已经没有数据了");
				// $window.location.reload();
			}
		}else{//上页
			if(index !== 0){
				index=index-1;
				var top=30;
				$getUserItem.getUserItem(index,top,function(err,result){
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
		}
	}
})