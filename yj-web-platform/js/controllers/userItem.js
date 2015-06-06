angular.module("controllers.userItem",[]) 
.controller("userItem",function(
	$scope,
	$getUserItem
){
	var top=1;
	$getUserItem.getUserItem(top,function(err,result){ 
		if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.userList !== null){
				$scope.userItem=result.userItem;
				alert("获取成功") 
			}else{
				if(result && result.userList == null){
					alert("用户为空");
				}
			}
		}
	})
	
})