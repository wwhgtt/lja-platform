angular.module("controllers.getSiteInfo",[]) 
.controller("getSiteInfo",function(
	$scope,
	$GetSiteInfo
){
	$scope.getSite={long:"",lat:"",distance:"2"};
	$scope.mapData = [];
    var distance = $scope.getSite.distance;
	$scope.$on("siteInfoChange",function(){
		var long=$scope.siteInfo.longList,
		 	lat=$scope.siteInfo.latList;
		 	$GetSiteInfo.getSiteInfo(long,lat,distance,function(err,result){
		 	if(err){
		 		alert("sorry,访问出错");
		 	}else{
		 		if(result && result.constructor==Array){ 
		 			$scope.mapData = result;
				}else{
		 			alert("sorry，获取失败") 
		 		}
		 	}
		})
	})
})