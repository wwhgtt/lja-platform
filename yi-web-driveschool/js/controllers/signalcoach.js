angular.module("controllers.signalcoach",[])  //controller后面这个名字是无所谓的  只是新定义的一个内容罢了
.controller("signalcoach",function(
	$scope,
	$signalcoach
){
	$scope.signal = {name:"",telphone:"",idNumber:"",type:""};
	console.log("signal %o",$scope.signal);
	$scope.signalForm = function(){  
		console.log("signalForm");
		
		var name = $scope.signal.name;   
		var phone = $scope.signal.telphone;
		var idNumber = $scope.signal.idNumber;
		var type = $scope.signal.type;
		$signalcoach.signalcoach(name,phone,idNumber,type,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success){ 
					// $location.path("/entering"); 
					alert("添加成功");  
				}else{
					console.log("sorry,添加失败"); 
				}
			}
		})
	}
})