angular.module("directives.largeImg",[])
.directive("largeImg",function(

){
	return {
		restrict:"A",
		link:function($scope,element,attr){
			var value2 = 0;
			$('.largeImg').rotate({ 
			    bind: {
			        click: function(){
			            value2 +=90;
			            $(this).rotate({
			                animateTo: value2
			            });
			        }
			    }
			});
		}
	}
})