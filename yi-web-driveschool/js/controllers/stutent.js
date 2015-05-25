angular.module("controllers.stutent",[])  //controller后面这个名字是无所谓的  只是新定义的一个内容罢了
.controller("stutent",function(
	$scope,
	$stutent
){
	$scope.stutentForm = function(){
		var name = $scope.stutent.name;   
		var phone = $scope.stutent.telphone;
		var idNumber = $scope.stutent.idNumber;
		$scope.studentList={name:name,phone:phone,idNumber:idNumber};
		var studentList=[];
		studentList.push($scope.studentList);
		$stutent.stutent(studentList,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success){ 
					alert("添加成功");
					$scope.$emit("success",studentList);  
				}else{
					alert("您格式有误，请重新输入"); 
				}
			}
		})
	}
})

