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
			 	"<input  placeholder='添加描述'' name='represent' class='represent' />" + 
				"<button class='save_address' value='保存' onclick='saveAddress()'>保存</button>";
			var infoWindow = new BMap.InfoWindow(sContent);
			map.addEventListener("click", showInfo);
			var array;
			function showInfo(e){
				map.clearOverlays();
				marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat));
		        // 创建标注
		        map.addOverlay(marker);
		        marker.addEventListener("click",function(e){
		        	this.openInfoWindow(infoWindow);
				   	e.domEvent.stopPropagation();
		        })
			    var  lng=e.point.lng;
	            var  lat=e.point.lat;
	            array = {lng:lng,lat:lat};
	            window.dataController={
	            	'mapBrige':{
	            		//some comment
	            		'tempPoint':null
	            	}
	            };
	            window.dataController.mapBrige.tempPoint=array;
	            console.log(array);
			}
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