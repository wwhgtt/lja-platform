angular.module("controllers.liveness",[])
.controller("liveness",function(
	$scope,
	$getLiveNess,
	$getLive
){
	var index=0,
		top=30;
	var studentNum=1;
	$getLive.getLive(studentNum,function(err,result){
		if(err){
			alert("sorry,访问出错")
		}else{
			if(result && result.success==true){
				$scope.number=result.count;
			}else{
				var errorInfo=result.errorInfo;
				alert(errorInfo)
			}
		}
	})
	$getLiveNess.getLiveNess(index,top,studentNum,function(err,result){
		if(err){
			alert("sorry,访问出错")
		}else{
			if(result && result.success==true){
				$scope.userList=result.userList;
			}else{
				var errorInfo=result.errorInfo;
				alert(errorInfo)
			}
		}
	})
	$scope.getFirstPage=function(){
		index=0;
		top=30;
		$getLiveNess.getLiveNess(index,top,studentNum,function(err,result){ 
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success==true){
					$scope.userList=result.userList;
				}else{
					var errorInfo=result.errorInfo;
					alert(errorInfo)
				}
			}
		})
	}
	$scope.getLastPage=function(){
	    index=Math.ceil($scope.number/30)-1;
		var top=30;
		$getLiveNess.getLiveNess(index,top,studentNum,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success==true){
					$scope.userList=result.userList;
				}else{
					var errorInfo=result.errorInfo;
					alert(errorInfo)
				}
			}
		})
	}
	$scope.getMoreUser = function(typer){
		if(typer === 'next'){//下页
			var top=30;
			var number=Math.ceil($scope.number/30)-1;
			if(index < number){
				index=index+1;
				var userList=$scope.userList;
				if(userList.length !== 0 ){
					$getLiveNess.getLiveNess(index,top,studentNum,function(err,result){
						if(err){
							alert("sorry,访问出错");
						}else{
							if(result && result.success==true){
								$scope.userList=result.userList;
							}else{
								var errorInfo=result.errorInfo;
								alert(errorInfo)
							}
						}
					})
				}
			}else{
				alert("已经没有数据了");
			}
		}else{//上页
			if(index !== 0){
				index=index-1;
				var top=30;
				var userList=$scope.userList;
				if(userList.length !== 0 ){
					$getLiveNess.getLiveNess(index,top,studentNum,function(err,result){
						if(err){
							alert("sorry,访问出错");
						}else{
							if(result && result.success==true){
								$scope.userList=result.userList;
							}else{
								var errorInfo=result.errorInfo;
								alert(errorInfo)
							}
						}
					})
				}
			}else{
				alert("已经是第一页了");
			}
		}
	}
})