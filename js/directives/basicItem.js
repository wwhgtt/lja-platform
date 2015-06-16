angular.module("directives.basicItem",[])
.directive("schoolItem",function(

){
	return {
		restrict:"E",
		templateUrl:"template/schoolItem.html",
		link:function($scope,element,attr){
			
		}
	}
})