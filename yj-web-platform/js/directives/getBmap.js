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
			    $scope.getSite.long=e.point.lng; 
	            $scope.getSite.lat=e.point.lat;
	            var longList=$scope.getSite.long,
	            	latList=$scope.getSite.lat;
	            $scope.siteInfo={longList:longList,latList:latList};
	            $scope.$emit("siteInfoChange",$scope.siteInfo);

			}
			//把获取到的值放到百度地图中去
			$scope.$watchCollection("mapData",function(newMapData){
				for(var index in newMapData){
					(function(){
						var mapData = newMapData[index];
						marker = new BMap.Marker(new BMap.Point(mapData.location[0],mapData.location[1]));
				        // 创建标注
				        map.addOverlay(marker);
						var opts = {
						  width : 200,     // 信息窗口宽度
						  height: 100,     // 信息窗口高度
						  title : "场地信息", // 信息窗口标题
						  enableMessage:true,//设置允许信息窗发送短息
						  message:""
						}
						var infoWindow = new BMap.InfoWindow(mapData.name, opts);  // 创建信息窗口对象 
						console.log(mapData.name);
						marker.addEventListener("click", function(e){
							this.openInfoWindow(infoWindow); //开启信息窗口
							e.domEvent.stopPropagation();
						});
					})(index);
				}
			})
		}
	}

})