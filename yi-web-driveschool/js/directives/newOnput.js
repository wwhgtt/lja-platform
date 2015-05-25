angular.module("directives.newOnput",[])
.directive("newOnput",function(

){
	return {
		restrict:"C",
		templateUrl:"template/newOuput.html",
		link:function($scope,element,attr){
			$scope.$on("success",function(){
                $scope.stutent.name=null;
                $scope.stutent.telphone=null;
                $scope.stutent.idNumber=null;
			})
		}
	}
})