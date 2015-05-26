angular.module("controllers.addMuch",[])
.controller("addMuch",function(
	$scope,
	$addAll,
	$addCar,
	$bindcar
){
	var idNumber=[];
	var _id=[];
	var resultCoachList = [];
	$scope.coach = {
		useworker:{disabled:false,checked:true},
		xferable:{disabled:false,checked:true},
		userabs:{disabled:false,checked:true}
	};
	$scope.coachList = [];
	$scope.addAll=function(){
		var coachList=$scope.coachList;
		var dataList=[];
		for(var index in coachList){
			var name=coachList[index].name,
			    phone=coachList[index].phone,
			    idNumber=coachList[index].idNumber,
			    type=coachList[index].type;
			var obj={"name":name,"phone":phone,"idNumber":idNumber,"type":type};
			dataList[index]=obj;
		}
		var perNum = 100;
		var totalUploadTime = Math.ceil(dataList.length / perNum);
		var currentUpload = 0;//当前传到第几组
		var uploadCoach = function(i){
			var dataListTemp = dataList.slice(perNum*i,perNum*(i+1));
			$addAll.addAll(dataListTemp,function(err,result){
				if(err){
					//进行错误处理,
					alert("sorry,系统出错");
				}else{
					if(result && result.coachList && result.errorList == null){
						var infoList = result.coachList;
						for(var index in infoList){
							var temp = {idNumber:infoList[index].idNumber,coachId:infoList[index]._id};
							resultCoachList.push(temp);
							console.log(resultCoachList);
						}
						if(++currentUpload < totalUploadTime){
							uploadCoach(currentUpload);
						}else{
							//说明几组数据都全部上传完成
							alert("提交成功");
						}
					}else{
						alert("部分数据有误，请查证后重新提交");
						$scope.errorList=result.errorList;
					}
				}
			})
		}
		if(totalUploadTime > 0){
			uploadCoach(currentUpload);
		}else{
			//空数据提示
			alert("您传入的数据为空")
		}
	}
	$scope.cars = {
		useworker:{disabled:false,checked:true},
		xferable:{disabled:false,checked:true},
		userabs:{disabled:false,checked:true}
	};
	$scope.carList = [];
	var carList=$scope.carList;
	$scope.addCar=function(){
		var coachList=$scope.coachList;
		for(index in coachList){
				var car=coachList[index].car
				var obj={"name":car};
				carList[index]=obj;
			}
		var perNum = 100;
		var totalUploadTime = Math.ceil(carList.length / perNum);
		var currentUpload = 0;//当前传到第几组
		var uploadCar = function(i){
			var carListTemp = carList.slice(perNum*i,perNum*(i+1));
			$addCar.addCar(carListTemp,function(err,result){
				if(err){
					//进行错误处理,
					alert("sorry,系统出错");
				}else{
					if(result && result.errorList == null){
						if(++currentUpload < totalUploadTime){
							uploadCar(currentUpload);
						}else{
							//说明几组数据都全部上传完成
							alert("提交成功");
						}
					}else{
						alert("部分数据有误，请查证后重新提交");
						$scope.errorList=result.errorList;
					}
				}
			})
		}
		if(totalUploadTime > 0){
			uploadCar(currentUpload);
		}else{
			//空数据提示
			alert("您传入的数据为空")
		}
	}
	var bindList=[];
    $scope.bindCar=function(){
		var bindCarList=$scope.bindCarList;
		var coachList=$scope.coachList;
		for(index in resultCoachList){
			console.log(resultCoachList);
			var coachIdNum=resultCoachList[index].idNumber;
            var coachid=resultCoachList[index].coachId;
            var idNumber=resultCoachList[index].idNumber;
            var car=coachList[index].car;
            if (idNumber == coachIdNum) {
            	$scope.bindCar._id=coachid;
            	$scope.bindCar.car=car;
            	var _idFinaly=$scope.bindCar._id;
            	var _car=$scope.bindCar.car;
            	var carList={name:_car}
            	var temp={coachId:_idFinaly,car:carList}
            	bindList.push(temp);
            };
		}
		$bindcar.bindcar(bindList,function(err,result){
			if(err){
				alert("sorry,提交失败");
			}else{
				if(result && result.errorList == null){ 
					//$location.path("/split"); 
					alert("绑定成功");  
				}else{
					 $scope.errorList=result.errorList;
				}
			}
		})
	}
})