angular.module("directives.good",[])
.directive("good",function(

){
	return {
		restrict:"E",
		templateUrl:"template/goodItem.html",
		link:function($scope,element,attr){
			
		}
	}
})