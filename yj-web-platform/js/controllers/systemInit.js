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
				//跳到登录界面
				$location.path = "/login";
			}else{//系统未初始化
				//跳到初始化界面
			}
		}
	})
	console.log("$scope %o",$scope)
})