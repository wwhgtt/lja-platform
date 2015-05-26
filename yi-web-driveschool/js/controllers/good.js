angular.module("controllers.good",[])  //controller后面这个名字是无所谓的  只是新定义的一个内容罢了
.controller("good",function(
	$scope,
	$getgood
){
	$scope.getGood=function(){
		var incId=0,
	        top=80;
	    $getgood.getgood(incId,top,function(err,result){
	    	if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
				    console.log("获取成功");   
				}else{
					if(result && result.commentArray == null){
						console.log("评价为空");
					}else{
						console.log("sorry,获取失败");
					}
				}
			}
	    })
	}
})