angular.module("directives.login",[])
.directive("login",function(

){
	return {
		restrict:"E",
		templateUrl:"template/login.html",
		link:function($scope,element,attr){
			
		}
	}
})
angular.module("directives.orderList",[])
.directive("orderList",function(

){
	return {
		restrict:"E",
		templateUrl:"template/orderList.html",
		link:function($scope,element,attr){
			
		}
	}
})

angular.module("directives.cashList",[])
.directive("cashList",function(

){
	return {
		restrict:"E",
		templateUrl:"template/cashList.html",
		link:function($scope,element,attr){
			
		}
	}
})