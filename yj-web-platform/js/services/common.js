angular.module("services.common",[])
.service("$driveSchool",function(
	$http
){
	return {
		add:function(opt,callback){//name,tel,principal,principalTel,businessLicenseId,areaCode
			$http.post(BASE_URL + '/platform/operate/driveSchool/add',{
				name:opt.name,
				tel:opt.tel,
				principal:opt.principal,
				principalTel:opt.principalTel,
				businessLicenseId:opt.businessLicenseId,
				areaCode:opt.areaCode
			})
		}
	}
})
.service("$login",function(
	$http
){
	return {
		login:function(userName,password,callback){
			$http.post(BASE_URL + "/platform/login",{
				userName:userName,
				password:password
			})
		}
	}
})


//检测系统是否已初始化管理员

.service("$init",function($http,$location){
    var promise=$http({
    	method:'GET',
    	url:BASE_URL+'/platform/checklint'
    });
    promise.success(function($location){
    	$location.path=BASE_URL + '/platform/login' ;
    });
    promise.error(function($location){
    	$location.path=BASE_URL + '/platform/initAdmin' ;
    });
})