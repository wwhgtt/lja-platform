angular.module("services.common",[])
.service("$driveSchool",function(
	$http
){
	return {
		add:function(Data,callback){
			$http.post(BASE_URL + '/platform/operate/driveSchool/add',{
				name:Data
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
.service("$getOrder",function(
	$http
){
	return {
		getOrder:function(callback){
			$http.post(BASE_URL + '/zhujbwx/getgoodorders',{
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
//修改订单价格
.service("$fixPrice",function(
	$http
){
	return {
		fixPrice:function(orderid,price,commision,callback){
			$http.post(BASE_URL + '/zhujbwx/chgorderprice',{
				orderid:orderid,
				price:price,
				commision:commision
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
//修改状态
.service("$fixstatus",function(
	$http
){
	return {
		fixstatus:function(orderid,status,cancelreason,callback){
			$http.post(BASE_URL + '/zhujbwx/chgorderstatus',{
				orderid:orderid,
				status:status,
				cancelreason:cancelreason
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
.service("$getMaker",function(
	$http
){
	return {
		getMaker:function(callback){
			$http.post(BASE_URL + '/zhujbwx/getcashlist',{
				
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
//提现成功
.service("$success",function(
	$http
){
	return {
		success:function(cashid,callback){
			$http.post(BASE_URL + '/zhujbwx/getcashsucc',{
				cashid:cashid
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
//提现失败
.service("$faile",function(
	$http
){
	return {
		faile:function(cashid,cancelreason,callback){
			$http.post(BASE_URL + '/zhujbwx/getcashfail',{
				cashid:cashid,
				remark:cancelreason
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
//添加管理员
.service("$addMaker",function(
	$http
){
	return {
		addMaker:function(userName,type,password,callback){
			$http.post(BASE_URL + '/platform/operate/manager',{
				userName:userName,
				type:type,
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
//绘图
.service("$getCancle",function(
	$http
){
	return {
		getCancle:function(coachId,time,callback){
			$http.get(BASE_URL + '/platform/statistics/coach/subject',{
				params:{
					coachId:coachId,
					date:time
				}
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
//绘图
.service("$getCancleNum",function(
	$http
){
	return {
		getCancleNum:function(coachId,time,callback){
			$http.get(BASE_URL + '/platform/statistics/coach/student',{
				params:{
					coachId:coachId,
					date:time
				}
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
//管理员登录
.service("$login",function(
	$http
){
	return {
		login:function(userName,password,callback){
			$http.post(BASE_URL+"/zhujbwx/login",{
				mname:userName,
				passwd:password
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
//管理员退出
.service("$loginOut",function(
	$http
){
	return {
		loginOut:function(callback){
			$http.post(BASE_URL + "/zhujbwx/loginout",{
				
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

//添加备注名
.service("$addnameremark",function(
	$http
){
	return {
		addnameremark:function(id,nameremark,callback){
			$http.post(BASE_URL + "/zhujbwx/addnameremark",{
				contractid:id,
				nameremark:nameremark
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
//审核通过
.service("$agreecontract",function(
	$http
){
	return {
		agreecontract:function(id,callback){
			$http.post(BASE_URL + "/zhujbwx/agreecontract",{
				contractid:id
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

//拒绝审核
.service("$rejectcontract",function(
	$http
){
	return {
		rejectcontract:function(id,reason,callback){
			$http.post(BASE_URL + "/zhujbwx/rejectcontract",{
				contractid:id,
				rejectreason:reason
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
//根据教练ID获取所属学员
.service("$getCoachStudent",function(
	$http
){
	return {
		getCoachStudent:function(coachId,callback){
			$http.get(BASE_URL + "/platform/operate/user/studentList/byCoachId",{
				params:{
					coachId:coachId
				}
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
//平台端检测初始化管理员
.service("$initem",function(
	$http
){
	return {
		initem:function(callback){
			$http.get(BASE_URL + "/platform/checkInit",{

			})
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
		getUserItem:function(index,top,type,callback){
			$http.get(BASE_URL + "/platform/operate/user/",
				{params:{
					index:index,
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
			$http.post(BASE_URL + "/zhujbwx/getcontracts",{})
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
//获取用户总数
.service("$getCount",function(
	$http
){
	return {
		getCount:function(callback){
			$http.get(BASE_URL + "/platform/operate/user/count",{
				
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
//检测登录状态
.service("$loginState",function(
	$http
){
	return {
		loginState:function(callback){
			$http.post(BASE_URL+"/zhujbwx/trylogin")
			.success(function(data){
				if(callback)callback(null,data);
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//通过Id搜索用户
.service("$getUserById",function(
	$http
){
	return {
		getUserById:function(userId,callback){
			$http.get(BASE_URL + "/platform/operate/user/byId",{
				params:{
					userId:userId
				}
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
//教练排序
.service("$getLiveNess",function(
	$http
){
	return {
		getLiveNess:function(index,top,studentNum,callback){
			$http.get(BASE_URL + "/platform/rank/coach/byStudentNum",{
				params:{
					index:index,
					top:top,
					studentNum:studentNum
				}
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
//排序教练的数量
.service("$getLive",function(
	$http
){
	return {
		getLive:function(studentNum,callback){
			$http.get(BASE_URL + "/platform/rank/coach/count",{
				params:{
					studentNum:studentNum
				}
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
//按周获取教练活跃度
.service("$getWeekOrder",function(
	$http
){
	return {
		getWeekOrder:function(coachId,year,week,callback){
			$http.get(BASE_URL + "/platform/statistics/coach/subject",{
				params:{
					coachId:coachId,
					year:year,
					date:week
				}
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
//按周获取教练活跃度
.service("$getWeekOrderNum",function(
	$http
){
	return {
		getWeekOrderNum:function(coachId,year,week,callback){
			$http.get(BASE_URL + "/platform/statistics/coach/student",{
				params:{
					coachId:coachId,
					year:year,
					date:week
				}
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
//按年获取教练活跃度
.service("$getYearOrder",function(
	$http
){
	return {
		getYearOrder:function(coachId,year,callback){
			$http.get(BASE_URL + "/platform/statistics/coach/subject",{
				params:{
					coachId:coachId,
					year:year
				}
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
//按年获取教练活跃度
.service("$getYearOrderNum",function(
	$http
){
	return {
		getYearOrderNum:function(coachId,year,callback){
			$http.get(BASE_URL + "/platform/statistics/coach/student",{
				params:{
					coachId:coachId,
					year:year
				}
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
//获取用户注册情况
.service("$getYearOrderYY",function(
	$http
){
	return {
		getYearOrderYY:function(year,callback){
			$http.get(BASE_URL + "/platform/statistics/user/register",{
				params:{
					year:year
				}
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
//获取用户注册情况
.service("$getWeekOrderYY",function(
	$http
){
	return {
		getWeekOrderYY:function(year,week,callback){
			$http.get(BASE_URL + "/platform/statistics/user/register",{
				params:{
					year:year,
					date:week
				}
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
//绘图
.service("$getCancleYY",function(
	$http
){
	return {
		getCancleYY:function(time,callback){
			$http.get(BASE_URL + '/platform/statistics/user/register',{
				params:{
					date:time
				}
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