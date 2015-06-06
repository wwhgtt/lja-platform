angular.module("controllers.userItem",[]) 
.controller("userItem",function(
	$scope,
	$getUserItem,
	$getLastUser
){
	var top=1;
	$scope.user={_id:"",phone:"",createDate:""};
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
})