angular.module("directives.getBmap",[])
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
		}

	}

})