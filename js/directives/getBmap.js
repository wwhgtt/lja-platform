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
				map.centerAndZoom(cityName,12);
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
	        map.addEventListener("dragend", showInfo);
	        function showInfo(e){
				map.clearOverlays();
				var center = map.getCenter();
				marker = new BMap.Marker(new BMap.Point(center.lng, center.lat));
			    $scope.getSite.long=center.lng; 
	            $scope.getSite.lat=center.lat;
	            var longList=$scope.getSite.long,
	            	latList=$scope.getSite.lat;
	            var bounds = map.getBounds(); //得到边界
				var changdu=bounds.getSouthWest().lng;
				var changduone= bounds.getNorthEast().lng;
				var gaodu=bounds.getNorthEast().lat;
				var gaoduone=bounds.getSouthWest().lat;
				var finall=(changdu-changduone);
				var finallone=(gaodu-gaoduone);
				var resultone=Math.sqrt(Math.pow(finall,2)+Math.pow(finallone,2));
				var distance=resultone/2;
	            $scope.siteInfo={longList:longList,latList:latList,distance:distance};
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
						  title : mapData.address, // 信息窗口标题
						  enableMessage:true,//设置允许信息窗发送短息
						  message:""
						}
						// var mapInfoAddress={name:mapData.name,address:mapData.address};
						var infoWindow = new BMap.InfoWindow(mapData.name, opts);  // 创建信息窗口对象 
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