angular.module("controllers.signalcoach",[])  //controller后面这个名字是无所谓的  只是新定义的一个内容罢了
.controller("signalcoach",function(
	$scope,
	$signalcoach
){
	$scope.signalForm = function(){  
		var name = $scope.coachList.name;   
		var phone = $scope.coachList.telphone;
		var idNumber = $scope.coachList.idNumber;
		var type = $scope.coachList.type;
		$scope.coachList={name:name,phone:phone,idNumber:idNumber,type:type};
		var coachList=[];
		coachList.push($scope.coachList);
		$signalcoach.signalcoach(coachList,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success){ 
					alert("添加成功");//接下来就应该考虑添加以后显示出来，并另行添加一个input
                    $scope.$emit("success",coachList);
				}else{
					alert("您格式有误，请重新输入"); 
				}
			}
		})
	}
})