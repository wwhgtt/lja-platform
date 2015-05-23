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
//添加单个学员
.service("$signalcoach",function(
	$http
){
	return {
		signalcoach:function(name,phone,idNumber,type,callback){
			$http.post(BASE_URL + "/school/coach/add",{
				name:name,
				phone:phone,
				idNumber:idNumber,
				type:type
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
//批量添加教练
.service("$addAll",function(
	$http
){
	return {
		addAll:function(coachList,callback){
			$http.post(BASE_URL + "/school/coach/addAll",{
				coachList:coachList
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
		stutent:function(name,phone,idNumber,coachId,callback){
			$http.post(BASE_URL + "/school/student/add",{
				name:name,
				phone:phone,
				idNumber:idNumber,
				coachId:coachId
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
		addCar:function(carList,callback){
			$http.post(BASE_URL + "/school/car/addAll",{
				carList:carList
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


