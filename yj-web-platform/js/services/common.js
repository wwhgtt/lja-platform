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
			//下面的内容是必须的   表示执行一个回调   如果没有这个回调的话controllerjs里面也就无法执行页面的跳转
			.success(function(data){
				if(callback)callback(null,data);  //这里的null表示err==null  表示没出错 
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})

//管理员登录
.service("$login",function(
	$http
){
	return {
		login:function(userName,password,callback){
			$http.post(BASE_URL + "/platform/login",{
				userName:userName,
				password:password
			})
			//下面的内容是必须的   表示执行一个回调   如果没有这个回调的话controllerjs里面也就无法执行页面的跳转
			.success(function(data){
				if(callback)callback(null,data);  //这里的null表示err==null  表示没出错 
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
//系统初始化
.service("$Init",function(
	$http
){
	return {
		init:function(userName,password1,password2,callback){
			$http.post(BASE_URL + "/platform/initAdmin",{
				userName:userName,
				password1:password1,
				password2:password2
			})
			//下面的内容是必须的   表示执行一个回调   如果没有这个回调的话controllerjs里面也就无法执行页面的跳转
			.success(function(data){
				if(callback)callback(null,data);  //这里的null表示err==null  表示没出错 
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})

//平台端重置密码
.service("$RePwd",function(
	$http
){
	return {
		rePwd:function(businessLicenseId,callback){
			$http.post(BASE_URL + "/platform/operate/driveSchool/resetPwd",{
				businessLicenseId:businessLicenseId
			})
			//下面的内容是必须的   表示执行一个回调   如果没有这个回调的话controllerjs里面也就无法执行页面的跳转
			.success(function(data){
				if(callback)callback(null,data);  //这里的null表示err==null  表示没出错 
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})

//添加场地信息
.service("$AddSiteInfo",function(
	$http
){
	return {
		addSiteInfo:function(long,lat,name,callback){
			long = parseFloat(long);
			lat = parseFloat(lat);
			$http.post(BASE_URL + "/platform/operate/siteInfo/add",{
				long:long,
				lat:lat,
				name:name
			})
			//下面的内容是必须的   表示执行一个回调   如果没有这个回调的话controllerjs里面也就无法执行页面的跳转
			.success(function(data){
				if(callback)callback(null,data);  //这里的null表示err==null  表示没出错 
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})

//获取场地信息
.service("$GetSiteInfo",function(
	$http
){
	return {
		getSiteInfo:function(long,lat,distance,callback){
			long = parseFloat(long);
			lat = parseFloat(lat);
			distance=parseFloat(distance);
			$http.get(BASE_URL + "/platform/operate/siteInfo/get",
				{params:{
					long:long,
					lat:lat,
					distance:distance
				}		
			})
			//下面的内容是必须的   表示执行一个回调   如果没有这个回调的话controllerjs里面也就无法执行页面的跳转
			.success(function(data){
				if(callback)callback(null,data);  //这里的null表示err==null  表示没出错 
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})