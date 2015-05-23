angular.module("controllers.coachcars",[])
.controller("coachcars",function(
	$scope,
	$addCar
){
	$scope.cars = {
		useworker:{disabled:false,checked:true},
		xferable:{disabled:false,checked:true},
		userabs:{disabled:false,checked:true}
	};
	$scope.carList = [];
	$scope.addCar=function(){
		var carList=$scope.carList;
		$addCar.addCar(carList,function(err,result){
			if(err){
				alert("sorry,提交失败");
			}else{
				if(result && result.success){ 
					//$location.path("/split"); 
					alert("提交成功");  
				}else{
					 $scope.errorList=result.errorList;
				}
			}
		})
	}
})