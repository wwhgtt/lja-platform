angular.module("services.common",[])
.service("$addjobs",function(
	$http
){
	return {
		addjobs:function(name,describle,duty,pay,imgName,callback){
			$http.post(BASE_URL + '/platform/officialWebsite/job',{
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