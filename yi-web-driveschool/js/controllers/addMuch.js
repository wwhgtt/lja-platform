angular.module("controllers.addMuch",[])
.controller("addMuch",function(
	$scope
){
	$scope.coach = {
		value:"",
		useworker:{disabled:false,checked:true},
		xferable:{disabled:false,checked:true},
		userabs:{disabled:false,checked:true},
		out:""
	};
	$scope.coachList = [];
})