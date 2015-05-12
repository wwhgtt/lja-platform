angular.module("directives.bmap",[])
.directive("addBmap",function(
	$timeout
){
	return {
		restrict: 'A',
		link:function($scope,element,attr){
			console.log("Bmap",BMap);
			console.log("element",element);

			var map = new BMap.Map("allmap");
			
			function myFun(result){
				var cityName = result.name;
				map.setCenter(cityName);
				map.centerAndZoom(cityName,12);
			}
			var myCity = new BMap.LocalCity();
			myCity.get(myFun);
			map.enableScrollWheelZoom(true);

			var sContent =
				"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>天安门</h4>" + 
				"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...</p>" + 
				"</div>";
			var infoWindow = new BMap.InfoWindow(sContent);

			map.addEventListener("click", showInfo);

			function showInfo(e){
				map.clearOverlays();
				marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat));
		        // 创建标注
		        map.addOverlay(marker);
		        marker.addEventListener("click",function(e){
		        	this.openInfoWindow(infoWindow);
				   	e.domEvent.stopPropagation();
		        })
			}

			//
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
		}
	}
})