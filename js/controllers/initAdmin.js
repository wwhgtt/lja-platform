angular.module("controllers.initAdmin",[])  
.controller("InitAdmin",function(
	$scope,
	$Init,
	$location  
){
	$scope.init = {name:"",password1:"",password2:""};
	$scope.initForm= function(){  
		var userName = $scope.init.name;   
		var password1 = $scope.init.password1;
        var password2 = $scope.init.password2;
		$Init.init(userName,password1,password2,function(err,result){ 
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.role){ 
					$location.path("/paltform");   
				}else{
					console.log("用户名或者密码不对"); 
				}
			}
		})
	}
})
