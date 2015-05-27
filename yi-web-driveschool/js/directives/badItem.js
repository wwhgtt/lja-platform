angular.module("directives.badItem",[])
.directive("badItem",function(

){
	return {
		restrict:"E",
		templateUrl:"template/badItem.html",
		link:function($scope,element,attr){
			
		}
	}
})