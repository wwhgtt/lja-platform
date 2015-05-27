angular.module("services.common",[])
.service("$login",function(
	$http
){
	return {
		login:function(key,password,callback){
			$http.post(BASE_URL + "/basic/login",{
				key:key,
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
//添加单个教练
.service("$signalcoach",function(
	$http
){
	return {
		signalcoach:function(coachList,callback){
			$http.post(BASE_URL + "/school/coach/addAll",{
				coachList:coachList
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
//批量添加教练
.service("$addAll",function(
	$http
){
	return {
		addAll:function(dataListTemp,callback){
			$http.post(BASE_URL + "/school/coach/addAll",{
				coachList:dataListTemp
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
//添加单个学员
.service("$stutent",function(
	$http
){
	return {
		stutent:function(studentList,callback){
			$http.post(BASE_URL + "/school/student/addAll",{
				studentList:studentList
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
//批量添加学员
.service("$addAllStu",function(
	$http
){
	return {
		addAllStu:function(studentList,callback){
			$http.post(BASE_URL + "/school/student/addAll",{
				studentList:studentList
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
//批量上传教练车
.service("$addCar",function(
	$http
){
	return {
		addCar:function(carListTemp,callback){
			$http.post(BASE_URL + "/school/car/addAll",{
				carList:carListTemp
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
//绑定教练与车
.service("$bindcar",function(
	$http
){
	return {
		bindcar:function(bindList,callback){
			$http.post(BASE_URL + "/school/coach/bindCar",{
				bindList:bindList
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
.service("$getcoach",function(
	$http
){
	return {
		getcoach:function(incId,top,type,callback){
			$http.get(BASE_URL + "/school/coach/get",{
				params:{
					incId:incId,
					top:top,
					type:type
				}
			})
			//下面的内容是必须的   表示执行一个回调   如果没有这个回调的话controllerjs里面也就无法执行页面的跳转
			.success(function(data){
				if(type === 'pre'){
					var coachList = data.coachList;
					coachList.sort(function(a,b){
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
//获取学员
.service("$getstudent",function(
	$http
){
	return {
		getstudent:function(incId,top,type,callback){
			$http.get(BASE_URL + "/school/student/get",{
				params:{
					incId:incId,
					top:top,
					type:type
				}
			})
			//下面的内容是必须的   表示执行一个回调   如果没有这个回调的话controllerjs里面也就无法执行页面的跳转
			.success(function(data){
				if(type === 'pre'){
					var studentList = data.studentList;
					studentList.sort(function(a,b){
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
//获取好评
.service("$getgood",function(
	$http
){
	return {
		getgood:function(incId,top,type,callback){
			$http.get(BASE_URL + "/school/comment/good",{
				params:{
					incId:incId,
					top:top,
					type:type
				}
			})
			//下面的内容是必须的   表示执行一个回调   如果没有这个回调的话controllerjs里面也就无法执行页面的跳转
			.success(function(data){
				if(type === 'pre'){
					var commentArray = data.commentArray;
					commentArray.sort(function(a,b){
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
//获取差评
.service("$getbad",function(
	$http
){
	return {
		getbad:function(incId,top,type,callback){
			$http.get(BASE_URL + "/school/comment/negative",{
				params:{
					incId:incId,
					top:top,
					type:type
				}
			})
			//下面的内容是必须的   表示执行一个回调   如果没有这个回调的话controllerjs里面也就无法执行页面的跳转
			.success(function(data){
				if(type === 'pre'){
					var commentArray = data.commentArray;
					commentArray.sort(function(a,b){
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