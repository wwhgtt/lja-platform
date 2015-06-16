angular.module("directives.testView",[])
.directive("testView",function(

){
	return {
		restrict:"E",
		templateUrl:"template/views.html",
		link:function($scope,element,attr){
			
		}
	}
})