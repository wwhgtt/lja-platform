angular.module("services.common",[])
.service("$postEmail",function(
	$http
){
	return{
		postEmail:function(email,callback){
			$http.post(BASE_URL + "/platform/withOutLogin/tester",{
				email:email
			})
			.success(function(data){
				if(callback)callback(null,data);
			})
			.error(function(error){
				if(callback)callback(error);
			})
		}
	}
})
