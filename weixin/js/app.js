angular.module("YJA",[
	"ngRoute",
	"ngMessages",
	"ui.router",
	"contenteditable",
	"controllers.YJA",
	"services.common"
])
.config(function(
	$stateProvider,
	$locationProvider,
	$urlRouterProvider
){   
	$stateProvider
		.state('YJA',{
				url:"/YJA",
				templateUrl:"template/menu.html",
				controller:"YJA"
			})
		$urlRouterProvider.otherwise("/YJA");
		$locationProvider.html5Mode(true);
}) 
