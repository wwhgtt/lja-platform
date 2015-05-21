angular.module("controllers.stutent",[])  //controller后面这个名字是无所谓的  只是新定义的一个内容罢了
.controller("stutent",function(
	$scope,
	$stutent
){
	$scope.stutent = {name:"",telphone:"",idNumber:"",coachId:""};
	// console.log("signal %o",$scope.signal);
	$scope.stutentForm = function(){
		var name = $scope.stutent.name;   
		var phone = $scope.stutent.telphone;
		var idNumber = $scope.stutent.idNumber;
		var coachId = $scope.stutent.coachId;
		$stutent.stutent(name,phone,idNumber,coachId,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success){ 
					alert("添加成功");  
				}else{
					console.log("sorry,添加失败"); 
				}
			}
		})
	}
})

