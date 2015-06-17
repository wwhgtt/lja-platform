angular.module("controllers.systemInit",[])
.controller("systemInit",function(
	$scope,
	$initem,
	$location
){
	$initem.initem(function(err,result){
		if(err){
            alert("sorry,访问出错");
		}else{
			if(result && result.success){
				$location.path('/platform/login');
			}else{
				if(result && result.init == false){
					$location.path("/platform/systemInit");
				}else{
					alert("系统出错");
				}	
			}
		}
	})
})