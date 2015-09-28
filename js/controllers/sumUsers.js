angular.module("controllers.sumUsers",[])
.controller("sumUsers",function(
	$scope,
	$getCancleYY,
	$getWeekOrderYY,
	$getYearOrderYY
){
	var start=new Date();
	var t=function(a){
		return a<10?"0"+a:a;
	}
	var time=start.getFullYear()+"-"+t(start.getMonth()+1)+"-"+t(start.getDate());
	$scope.mapData=[];
	$getCancleYY.getCancleYY(time,function(err,result){
		if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.success == true){
				$scope.mapData=result.statistics;
				$scope.$broadcast("mapData",$scope.mapData)
			}else{
				alert("出错了");
			}
		}
	})
	var week=moment().week();
	var year=moment().year();
	$getWeekOrderYY.getWeekOrderYY(year,week,function(err,result){
		if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.success == true){
				$scope.mapDataWeek=result.statistics;
				$scope.$broadcast("mapDataWeek",$scope.mapDataWeek)
			}else{
				alert("出错了");
			}
		}
	})
	$getYearOrderYY.getYearOrderYY(year,function(err,result){
		if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.success == true){
				$scope.mapDataYear=result.statistics;
				$scope.$broadcast("mapDataYear",$scope.mapDataYear)
			}else{
				alert("出错了");
			}
		}
	})
})