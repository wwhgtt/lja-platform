angular.module("ljaWebPlatform",[
	"ngRoute",
	"ngMessages",
	"ui.router",
	"contenteditable",
	"controllers.systemInit",
	"controllers.entering",
	"controllers.cashList",
	"controllers.login",
	"controllers.initAdmin",
	"directives.orderList",
	"controllers.rePwd",
	"directives.cashList",
	"controllers.orderList",
	"controllers.addSiteInfo",
	"controllers.getSiteInfo",
	"controllers.addjobs",
	"controllers.platform",
	"controllers.addManager",
	"controllers.userItem",
	"controllers.liveness",
	"controllers.loginOut",
	"controllers.sumUsers",
	"controllers.getImUsers",
	"directives.userItem",
	"controllers.testView",
	"controllers.userItemTemp",
	"directives.schoolList",
	"directives.managerList",
	"controllers.jobList",
	"controllers.jobsList",
	"controllers.getUser",
	"directives.jobList",
	"directives.zhXian",
	"directives.nextXian",
	"directives.jobsList",
	"directives.imuserList",
	"directives.basicItem",
	"directives.anoZhe",
	"directives.zheXian",
	"directives.largeImg",
	"directives.numberList",
	"directives.login",
	"directives.useItem",
	"directives.studentList",
	"directives.testView",
	"directives.upLoad",
	"directives.pwCheck",
	"directives.bmap",
	"directives.getBmap",
	"services.common"
])
.config(function(
	$stateProvider,
	$locationProvider,
	$urlRouterProvider,
	$httpProvider,
	$rootScopeProvider
){   
	
	$stateProvider
		.state('platform',{
				url:"/platform",
				templateUrl:"template/menu.html",
				controller:"platform"
			})
		.state('platform.addDriveSchool',{
			url:"/addDriveSchool",
			views:{
				'menuContent':{
					templateUrl:"template/addDriveSchool.html",
					controller:"Entering"
				}
			}
		})
		.state('platform.checkInit',{
			url:"/checkInit",
			views:{
				'menuContent':{
					templateUrl:"template/systemInit.html",
					controller:"systemInit"
				}
			}
		})
		.state('platform.systemInit',{
			url:"/systemInit",
			views:{
				'menuContent':{
					templateUrl:"template/systemItem.html",
					controller:"initAdmin"
				}
			}
		})
		.state('platform.manageUser',{
			url:"/manageUser",
			views:{
				'menuContent':{
					templateUrl:"template/addManager.html",
					controller:"addManager"
				}
			}
		})
		.state('platform.login',{
			url:"/login",
			views:{
				"menuContent":{
					templateUrl:"template/login.html",
					controller:"Login"
				}
			}
		})
		.state('platform.loginOut',{
			url:"/loginOut",
			views:{
				"menuContent":{
					templateUrl:"template/loginOut.html",
					controller:"loginOut"
				}
			}
		})
		.state('platform.initAdmin',{
			url:"/initAdmin",
			views:{
				'menuContent':{
					templateUrl:"template/initAdmin.html",
					controller:"InitAdmin"
				}
			}
		})
		.state('platform.rePwd',{
			url:"/rePwd",
			views:{
				'menuContent':{
					templateUrl:"template/rePwd.html",
					controller:"RePwd"
				}
			}
		})
		.state('platform.addSiteInfo',{
			url:"/addSiteInfo",
			views:{
				'menuContent':{
					templateUrl:"template/addSiteInfo.html",
					controller:"addSiteInfo"
				}
			}
		})
		.state('platform.getSiteInfo',{
			url:"/getSiteInfo",
			views:{
				'menuContent':{
					templateUrl:"template/getSiteInfo.html",
					controller:"getSiteInfo"
				}
			}
		})
		.state('platform.addjobs',{
			url:"/addjobs",
			views:{
				'menuContent':{
					templateUrl:"template/addjobs.html",
					controller:"addjobs"
				}
			}
		})
		.state('platform.getjobs',{
			url:"/getjobs",
			views:{
				'menuContent':{
					templateUrl:"template/getjobs.html",
					controller:"jobList"
				}
			}
		})
		.state('platform.reviseJob',{
			url:"/reviseJob",
			views:{
				'menuContent':{
					templateUrl:"template/reviseJob.html",
					controller:"jobsList"
				}
			}
		})
		.state('platform.LookTest',{
			url:"/LookTest",
			views:{
				'menuContent':{
					templateUrl:"template/testView.html",
					controller:"testView"
				}
			}
		})
		.state('platform.searchUser',{
			url:"/searchUser",
			views:{
				'menuContent':{
					templateUrl:"template/phoneByUser.html",
					controller:"getUser"
				}
			}
		})
		.state('platform.getImUsers',{
			url:"/getImUsers",
			views:{
				'menuContent':{
					templateUrl:"template/getImUsers.html",
					controller:"getImUsers"
				}
			}
		})
		.state('platform.liveness',{
			url:"/liveness",
			views:{
				'menuContent':{
					templateUrl:"template/liveness.html",
					controller:"liveness"
				}
			}
		})
		.state('platform.sumUsers',{
			url:"/sumUsers",
			views:{
				'menuContent':{
					templateUrl:"template/sumUsers.html",
					controller:"sumUsers"
				}
			}
		})
		$urlRouterProvider.otherwise("/platform");
		$locationProvider.html5Mode(true);

		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	    var param = function (obj) {
	        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

	        for (name in obj) {
	            value = obj[name];

	            if (value instanceof Array) {
	                for (i = 0; i < value.length; ++i) {
	                    subValue = value[i];
	                    fullSubName = name + '[' + i + ']';
	                    innerObj = {};
	                    innerObj[fullSubName] = subValue;
	                    query += param(innerObj) + '&';
	                }
	            }
	            else if (value instanceof Object) {
	                for (subName in value) {
	                    subValue = value[subName];
	                    fullSubName = name + '[' + subName + ']';
	                    innerObj = {};
	                    innerObj[fullSubName] = subValue;
	                    query += param(innerObj) + '&';
	                }
	            }
	            else if (value !== undefined && value !== null)
	                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
	        }

	        return query.length ? query.substr(0, query.length - 1) : query;
	    };

	    // Override $http service's default transformRequest
	    $httpProvider.defaults.transformRequest = [function (data) {
	        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
	    }];
}) 
