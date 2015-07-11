angular.module("directives.bmap",[])
.directive("addBmap",function(
	$timeout
){
	return {
		restrict: 'A',
		link:function($scope,element,attr){
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
			 	"<input  placeholder='添加描述' name='represent' class='represent' />" +"</br>"+
			 	"<input  placeholder='场地位置' name='address' class='address' id='addressMap'  />"+
				"<button class='save_address' value='保存' onclick='saveAddress()'>保存</button>";
			var gc = new BMap.Geocoder();//地址解析类
			map.addEventListener("click", function(e){
				gc.getLocation(e.point, function(rs){
			        showInfo(e.point, rs);
			    });
			    
			});
			var array;
			function showInfo(pt,rs){
				map.clearOverlays();
				marker = new BMap.Marker(new BMap.Point(pt.lng, pt.lat));
		        // 创建标注
		        map.addOverlay(marker);
		        var addComp = rs.addressComponents;
    			window.addr =  addComp.city + addComp.district+ 
    			addComp.street+ addComp.streetNumber ;
    			var infoWindow = new BMap.InfoWindow(sContent);

		        marker.addEventListener("click",function(e){
		        	this.openInfoWindow(infoWindow);
		        	document.getElementById("addressMap").value=window.addr;
				   	e.domEvent.stopPropagation();
		        })
			    var  lng=pt.lng;
	            var  lat=pt.lat;
	            array = {lng:lng,lat:lat};
	            window.dataController={
	            	'mapBrige':{
	            		//some comment
	            		'tempPoint':null
	            	}
	            };
	            window.dataController.mapBrige.tempPoint=array;
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