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
			.success(function(data){
				if(callback)callback(null,data);
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})

//检测系统是否已初始化管理员

.service("$init",function(
	$http,
	$location
){
	return {
		init:function(callback){
			var promise=$http({
		    	method:'GET',
		    	url:BASE_URL+'/platform/checkInit'
		    });

		    promise.success(function(data){//{success:false/true}
		    	if(callback)callback(null,data);
		    });

		    promise.error(function(err){
		    	if(callback)callback(err);
		    });
		}
	}
   
})