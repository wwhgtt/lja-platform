angular.module("directives.newInput",[])
.directive("newInput",function(

){
	return {
		restrict:"C",
		templateUrl:"template/newInput.html",
		link:function($scope,element,attr){
			$scope.$on("success",function(){
                $scope.coachList.name=null;
                $scope.coachList.telphone=null;
                $scope.coachList.idNumber=null;
                $scope.coachList.type=null;
			})
		}
	}
})