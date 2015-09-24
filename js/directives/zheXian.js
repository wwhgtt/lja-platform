angular.module("directives.zheXian",[])
.directive("zheXian",function(

){
	return {
		restrict:"A",
		link:function($scope,element,attr){
			//新建echarts
			var start=new Date();
			var t=function(a){
				return a<10?"0"+a:a;
			}
			var time=t(start.getMonth()+1)+"-"+t(start.getDate());
	        var myChart = echarts.init(element[0]);
	        var option = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['科目二预约','科目二取消预约','科目三预约','科目三取消预约']
			    },
			    toolbox: {
			        show : true,
			        feature : {
			            mark : {show: true},
			            dataView : {show: true, readOnly: false},
			            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : []
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'科目二预约',
			            type:'line',
			            // stack: '总量',
			            data:[]
			        },
			        {
			            name:'科目二取消预约',
			            type:'line',
			            // stack: '总量',
			            data:[]
			        },
			        {
			            name:'科目三预约',
			            type:'line',
			            // stack: '总量',
			            data:[]
			        },
			        {
			            name:'科目三取消预约',
			            type:'line',
			            // stack: '总量',
			            data:[]
			        }
			    ]
			};
			$scope.$on("mapData",function(){
				// console.log($scope.mapData)数据已经过来了
				mapData=$scope.mapData;
				var diffDays = moment(mapData.nextDate).diff(mapData.preDate,'day');
				var xAxisArr = [];
				var subject2 = [];
				var subject3 = [];
				var subject2Cancle = [];
				var subject3Cancle = [];
				for(var index=0 ;index <= diffDays; index++){
					var currentDate = moment(mapData.preDate).add(index,'day');
					var currentDateStr = currentDate.format("MM-DD");
					var currentComplateStr = currentDate.format("YYYY-MM-DD");
					xAxisArr.push(currentDateStr);
					var subject2Order = mapData.subject2Order;
					var order2Count = 0;
					for(var k in subject2Order){
						var order2 = subject2Order[k];
						if(order2.date == currentComplateStr){
							order2Count = order2.count;
							break;
						}
					}
					subject2.push(order2Count);
					var subject3Order = mapData.subject3Order;
					var order3Count = 0;
					for(var k in subject3Order){
						var order3 = subject3Order[k];
						if(order3.date == currentComplateStr){
							order3Count = order3.count;
							break;
						}
					}
					subject3.push(order3Count);
					var subject2DeleteOrder = mapData.subject2DeleteOrder;
					var deleteOrder2Count = 0;
					for(var k in subject2DeleteOrder){
						var deleteOrder2 = subject2DeleteOrder[k];
						if(deleteOrder2.date == currentComplateStr){
							deleteOrder2Count = deleteOrder2.count;
							break;
						}
					}
					subject2Cancle.push(deleteOrder2Count);
					var subject3DeleteOrder = mapData.subject3DeleteOrder;
					var deleteOrder3Count = 0;
					for(var k in subject3DeleteOrder){
						var deleteOrder3 = subject3DeleteOrder[k];
						if(deleteOrder3.date == currentComplateStr){
							deleteOrder3Count = deleteOrder3.count;
							break;
						}
					}
					subject3Cancle.push(deleteOrder3Count);
				}
				option.xAxis[0].data = xAxisArr;
				option.series[0].data = subject2;
				option.series[1].data = subject2Cancle;
				option.series[2].data = subject3;
				option.series[3].data = subject3Cancle;
				myChart.setOption(option);
			})
		}
	}
})