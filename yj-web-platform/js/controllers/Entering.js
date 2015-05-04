angular.module("controllers.entering",[])
.controller("Entering",function(
	$scope,
	$driveSchool,
	$login
){
	console.log("$scope %o",$scope)
	$scope.opt = [];
	$scope.addDriveSchool = function(){
		$scope.opt.push({name:"",businessLicenseId:"",tel:"",principal:"",principalTel:"",areaCode:""})
	} 
	$scope.signupForm=function(){
		var Data=$scope.opt;
		
		var jsonData = JSON.stringify(Data); 
		console.log(jsonData);
	}

	/*$scope.addDriveSchool = function(){
		var opt = {
			name:"我去",
			tel:"15928681212",
			principal:"阿萨德",
			principalTel:"142341234134",
			areaCode:"028",
			businessLicenseId:"546464654654654646"
		}
		$driveSchool.add(opt);
	}
	$scope.login = function(){
		$login.login("秦阳","123457")
	}*/

})
