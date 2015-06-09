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
//添加职位
.service("$addjobs",function(
	$http
){
	return {
		addjobs:function(name,describle,duty,pay,imgName,callback){
			$http.post(BASE_URL + "/platform/officialWebsite/job",{
				name:name,
				describle:describle,
				duty:duty,
				pay:pay,
				imgName:imgName
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
//获取职位
.service("$getjob",function(
	$http
){
   return {
		getjob:function(callback){
			$http.get(BASE_URL + "/platform/officialWebsite/job",{
				
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
//删除职位
.service("$deleteJob",function(
	$http
){
   return {
		deleteJob:function(id,callback){
			$http.delete(BASE_URL + "/platform/officialWebsite/job/"+id,{
				
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
//修改职位
.service("$reviseJobs",function(
	$http
){
   return {
		reviseJobs:function(id,name,duty,pay,describle,imgName,callback){
			$http.put(BASE_URL + "/platform/officialWebsite/job",{
				id:id,
				name:name,
				duty:duty,
				pay:pay,
				describle:describle,
				imgName:imgName
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
//获取教练
.service("$getTest",function(
	$http
){
	return {
		getTest:function(incId,top,type,callback){
			$http.get(BASE_URL + "/platform/officialWebsite/tester",{
				params:{
					incId:incId,
					top:top,
					type:type
				}
			})
			//下面的内容是必须的   表示执行一个回调   如果没有这个回调的话controllerjs里面也就无法执行页面的跳转
			.success(function(data){
				if(type === 'pre'){
					var testerList = data.testerList;
					testerList.sort(function(a,b){
						if(a.incId < b.incId){
							return -1;
						}else if(a.incId > b.incId){
							return 1;
						}else return 0;
					})
				}
				if(callback)callback(null,data);  //这里的null表示err==null  表示没出错 
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//getUserByPhone
.service("$getUser",function(
	$http
){
	return {
		getUser:function(phone,callback){
			$http.get(BASE_URL + "/platform/operate/user/searchByPhone",{
				params:{
					phone:phone
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
//获取首页用户
.service("$getUserItem",function(
	$http
){
	return {
		getUserItem:function(top,callback){
			$http.get(BASE_URL + "/platform/operate/user/firstPage",
				{params:{
					top:top
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
//获取尾页用户
.service("$getLastUser",function(
	$http
){
	return {
		getLastUser:function(top,callback){
			$http.get(BASE_URL + "/platform/operate/user/lastPage",
				{params:{
					top:top
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
//获取用户（上一页下一页）
.service("$getMoreUsers",function(
	$http
){
	return {
		getMoreUsers:function(incId,top,type,callback){
			$http.get(BASE_URL + "/platform/operate/user",{
				params:{
					incId:incId,
					top:top,
					type:type
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
//获取用户获取证件上传凭证 
.service("$getLisence",function(
	$http
){
	return {
		getLisence:function(lisenceType,userId,callback){
			$http.get(BASE_URL + "/platform/operate/user/lisenceUpToken",{
				params:{
					lisenceType:lisenceType,
					userId:userId
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
//图片链接回传给服务器
.service("$postLisence",function(
	$http
){
	return {
		postLisence:function(lisenceType,userId,callback){
			$http.post(BASE_URL + "/platform/operate/user/lisence",{
					lisenceType:lisenceType,
					userId:userId
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
//获取证件照的下载链接
.service("$getDown",function(
	$http
){
	return {
		getDown:function(lisenceType,userId,callback){
			$http.get(BASE_URL + "/platform/operate/user/lisenceGettoken",{
				params:{
					lisenceType:lisenceType,
					userId:userId
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
//审查教练
.service("$examine",function(
	$http
){
	return {
		examine:function(coachId,idNumber,name,teachType,callback){
			$http.post(BASE_URL + "/platform/operate/coach/examine",{
					coachId:coachId,
					idNumber:idNumber,
					name:name,
					teachType:teachType
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
//获取未审查教练
.service("$getExamineUser",function(
	$http
){
	return {
		getExamineUser:function(callback){
			$http.get(BASE_URL + "/platform/operate/coach/applyList",{})
			.success(function(data){
				if(callback)callback(null,data);
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//拒绝审查教练
.service("$resaon",function(
	$http
){
	return {
		resaon:function(coachId,reason,callback){
			$http.post(BASE_URL + "/platform/operate/coach/examineRefuse",{
				coachId:coachId,
				reason:reason
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