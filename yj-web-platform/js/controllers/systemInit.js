angular.module("controllers.systemInit",[])
.controller("SystemInit",function(
	$scope,
	$init,
	$location
){
	$init.init(function(err,result){
		console.log("result %o",result);
		if(err){

		}else{
			if(result && result.success){//系统已经初始化
				console.log("result go login")
				$location.path("/login");
			}else{//系统未初始化
				$location.path("/initAdmin");//这个地方设置延迟
			}
		}
	})
	console.log("$scope %o",$scope)
})