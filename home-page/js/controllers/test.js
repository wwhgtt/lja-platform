angular.module("controllers.test",[]) 
.controller("test",function(
	$scope,
	$postEmail
){
	$scope.user ={email:""};
	$scope.postemail = function(){
		var email=$scope.user.email;
		$postEmail.postEmail(email,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true){
					alert("submit success");   
				}else{
					alert("sorry,submit false"); 
				}
			}
		})
	}
})