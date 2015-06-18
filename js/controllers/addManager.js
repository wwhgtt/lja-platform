angular.module("controllers.addManager",[])  
.controller("addManager",function(
	$scope,
	$addMaker,
	$getMaker
){
	$scope.getManager=function(){
		$scope.addMan=false;
		$scope.get=true;
		$getMaker.getMaker(function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					$scope.managerList=result.userList;
				}else if(result && result.success == false){
					var errorInfo=result.errorInfo;
					alert(errorInfo);
				}
			}
		})  
	}
	$scope.addManager=function(){
		$scope.addMan=true;
		$scope.get=false;  
	}
	$scope.manager = {name:"",password:"",type:"market"};
	$scope.managerForm = function(){
		var userName = $scope.manager.name,  
			password = $scope.manager.password,
			type=$scope.manager.type;
		$addMaker.addMaker(userName,type,password,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					alert("添加成功");
					$scope.manager.name =null;
					$scope.manager.password =null;
				}else if(result && result.success == false){
					var errorInfo=result.errorInfo;
					alert(errorInfo);
				}
			}
		})
	}
})