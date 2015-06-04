angular.module("ljaWebPlatform",[
	"ngRoute",
	"ngMessages",
	"controllers.systemInit",
	"controllers.entering",
	"controllers.login",
	"controllers.initAdmin",
	"controllers.rePwd",
	"controllers.addSiteInfo",
	"controllers.getSiteInfo",
	"controllers.addjobs",
	"controllers.jobList",
	"directives.jobList",
	"directives.basicItem",
	"directives.systemInit",
	"directives.login",
	"directives.upLoad",
	"directives.pwCheck",
	"directives.bmap",
	"directives.getBmap",
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
		}).when("/initAdmin",{
			templateUrl:"template/initAdmin.html",
			controller:"InitAdmin"
		}).when("/rePwd",{
			templateUrl:"template/rePwd.html",
			controller:"RePwd"
		}).when("/addSiteInfo",{
			templateUrl:"template/addSiteInfo.html",
			controller:"addSiteInfo"
		}).when("/getSiteInfo",{
			templateUrl:"template/getSiteInfo.html",
			controller:"getSiteInfo"
		}).when("/addjobs",{
			templateUrl:"template/addjobs.html",
			controller:"addjobs"
		}).when("/getjobs",{
			templateUrl:"template/getjobs.html",
			controller:"jobList"
		})
	 $locationProvider.html5Mode(true);
}) 