angular.module("directives.getBmap",["controllers.getSiteInfo"])
.directive("getBmap",function(
	$timeout
){
	return{
		restrict:'A',
		link:function($scope,element,attr){
			var map = new BMap.Map("getMap");
			function myFun(result){
				var cityName=result.name;
				map.setCenter(cityName);
				map.centerAndZoom(cityName,15);
			}
			var myCity = new BMap.LocalCity();
			myCity.get(myFun);
			map.enableScrollWheelZoom(true);
			//搜索功能
			$scope.getsite={address:""};
			var local = new BMap.LocalSearch(map, {
		       renderOptions:{map: map}
	        });
	        var handler;
	        $scope.$watchCollection("getsite",function(newValue,oldValue){
	        	if(handler){
	        		$timeout.cancel(handler);
	        	}
	        	handler = $timeout(function(){
	        		console.log("newValue ",newValue)
	        		var address = newValue.address;
	        		if(address){
	        			local.search(address);
	        		}
	        	},500);
	        })
	        $scope.searchAddress = function(){
	        	var address = $scope.getsite.address;
	        	local.search(address);
	        }
	        //获取地图中心点并显示出返回的数据
	        map.addEventListener("click", showInfo);
	        function showInfo(e){
				map.clearOverlays();
				marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat));
			    $scope.getSite.long=e.point.lng; //现在的问题是这个long不能与controllers里面的long一致
	            $scope.getSite.lat=e.point.lat;
	            console.log($scope.getSite.long);
	            console.log($scope.getSite.lat)
			}
		}

	}

})