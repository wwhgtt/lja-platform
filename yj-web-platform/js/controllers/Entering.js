angular.module("controllers.entering",[])
.controller("Entering",function(
	$scope,
	$driveSchool
){
	console.log("$scope %o",$scope)
	$scope.opt = [];
	$scope.addDriveSchool = function(){
		$scope.opt.push({name:"",businessLicenseId:"",tel:"",principal:"",principalTel:"",areaCode:""})
	} 
	$scope.signupForm=function(){
		var Data=$scope.opt;
		
		var jsonData = JSON.stringify(Data); 
		$driveSchool.add($scope.opt,function(err,result){//err == null           $login是之前定义的服务  login是一个json对象  是服务定义后的内容（存放）  err必须为第一个参数
			//function
			if(err){//这个代表的是服务本身出错后的程序
				alert("sorry,访问出错");
			}else{
				if(result && result.success){ //result代表的是服务访问成功且有返回值表示密码正确
					alert("添加成功");   //跳转到驾校管理页面去
				}else{
					//console.log("用户名或者密码不对"); //服务访问成功  但是输入的密码不正确
                    alert("sorry,添加失败，请稍后重试");
				}
			}
		})
	}
})
