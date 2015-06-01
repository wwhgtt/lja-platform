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