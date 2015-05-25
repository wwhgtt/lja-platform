angular.module("directives.bindCar",[])
.directive("bindCar",function(

){
	return {
		restrict:"E",
		templateUrl:"template/bindCar.html",
		link:function($scope,element,attr){
			
		}
	}
})