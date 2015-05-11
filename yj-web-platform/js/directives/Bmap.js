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
			var point = new BMap.Point(116.417854,39.921988);
			var marker = new BMap.Marker(point);  // 创建标注
			map.addOverlay(marker);              // 将标注添加到地图中
			map.centerAndZoom(point, 15);
			var opts = {
			  width : 200,     // 信息窗口宽度
			  height: 100,     // 信息窗口高度
			  title : "海底捞王府井店" , // 信息窗口标题
			  enableMessage:true,//设置允许信息窗发送短息
			  message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
			}
			var infoWindow = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts);  // 创建信息窗口对象 
			marker.addEventListener("click", function(){          
				map.openInfoWindow(infoWindow,point); //开启信息窗口
			});
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
		}
	}
})