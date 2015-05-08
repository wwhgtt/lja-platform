angular.module("ljaWebPlatform",[
	"ngRoute",
	"ngMessages",
	"controllers.systemInit",
	"controllers.entering",
	"controllers.login",
	/*"controllers.signupControllers",*/
	"directives.basicItem",
	"directives.systemInit",
	"directives.login",
	"services.common"
])
.config(function(
	$routeProvider,
	$locationProvider
){   
	$routeProvider
		.when("/",{
			templateUrl:"template/systemInit.html",
			controller:"SystemInit"
		}).when("/entering",{
			templateUrl:"template/entering.html",
			controller:"Entering"
		}).when("/login",{
			templateUrl:"template/login.html",
			controller:"Login"
		})
	 $locationProvider.html5Mode(true);
}) 