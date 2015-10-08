angular.module("directives.zheXian",[])
.directive("zheXian",function(

){
	return {
		restrict:"A",
		link:function($scope,element,attr){
			//新建echarts
	        var myChart = echarts.init(element.find("#main")[0]);
	        var option = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['日预约情况']
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
			            name:'日预约情况',
			            type:'line',
			            // stack: '总量',
			            data:[]
			        }
			    ]
			};
			$scope.$on("mapData",function(){
				// console.log($scope.mapData)数据已经过来了
				mapData=$scope.mapData;
				var diffDays = moment(mapData.next.date).diff(mapData.pre.date,'day');
				var xAxisArr = [];
				var subject = [];
				var subjectCancle = [];
				for(var index=0 ;index <= diffDays; index++){
					var currentDate = moment(mapData.pre.date).add(index,'day');
					var currentDateStr = currentDate.format("MM-DD");
					var currentComplateStr = currentDate.format("YYYY-MM-DD");
					xAxisArr.push(currentDateStr);
					var subjectOrder = mapData.order;
					var orderCount = 0;
					for(var k in subjectOrder){
						var order = subjectOrder[k];
						if(order.date == currentComplateStr){
							orderCount = order.count;
							break;
						}
					}
					subject.push(orderCount);
					var subjectDeleteOrder = mapData.orderDelete;
					var deleteOrderCount = 0;
					for(var k in subjectDeleteOrder){
						var deleteOrder = subjectDeleteOrder[k];
						if(deleteOrder.date == currentComplateStr){
							deleteOrderCount = deleteOrder.count;
							break;
						}
					}
					subjectCancle.push(deleteOrderCount);
				}
				option.xAxis[0].data = xAxisArr;
				var orderSum=[];
				// var orderNumber=[];
				for(var index in subjectCancle){
					orderSum[index]=subject[index]+subjectCancle[index];
				}
				option.series[0].data = orderSum;
				myChart.setOption(option);
			})
			//周活动情况
			var myCharts = echarts.init(element.find("#mainWeek")[0]);
	        var options = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['周预约情况']
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
			            name:'周预约情况',
			            type:'line',
			            // stack: '总量',
			            data:[]
			        }
			    ]
			};
			$scope.$on("mapDataWeek",function(){
				mapDataWeek=$scope.mapDataWeek;
				var diffDays = mapDataWeek.next.date-mapDataWeek.pre.date;
				var xAxisArr = [];
				var subject = [];
				var subjectCancle = [];
				for(var index=0 ;index <= diffDays; index++){
					var currentDate = mapDataWeek.pre.date+index;
					var momentData=moment().isoWeek(currentDate).startOf('week').add('1','day').format("MM/DD");
					var weekData=momentData+"--"+moment(momentData).add('6','days').format("MM/DD");
					xAxisArr.push(weekData);
					var subjectOrder = mapDataWeek.order;
					var orderCount = 0;
					for(var k in subjectOrder){
						var order = subjectOrder[k];
						if(order.week == currentDate){
							orderCount = order.count;
							break;
						}
					}
					subject.push(orderCount);
					var subjectDeleteOrder = mapDataWeek.orderDelete;
					var deleteOrderCount = 0;
					for(var k in subjectDeleteOrder){
						var deleteOrder = subjectDeleteOrder[k];
						if(deleteOrder.week == currentDate){
							deleteOrderCount = deleteOrder.count;
							break;
						}
					}
					subjectCancle.push(deleteOrderCount);
				}
				options.xAxis[0].data = xAxisArr;
				var orderSum=[];
				// var orderNumber=[];
				for(var index in subjectCancle){
					orderSum[index]=subject[index]+subjectCancle[index];
				}
				options.series[0].data = orderSum;
				myCharts.setOption(options);
			})
//年活动情况
			var myChartYear = echarts.init(element.find("#mainYear")[0]);
	        var optionYear = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['月预约情况']
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
			            name:'月预约情况',
			            type:'line',
			            // stack: '总量',
			            data:[]
			        }
			    ]
			};
			$scope.$on("mapDataYear",function(){
				mapDataYear=$scope.mapDataYear;
				var diffDays = 11;
				var xAxisArr = [];
				var subject = [];
				var subjectCancle = [];
				for(var index=0 ;index <= diffDays; index++){
					var currentDate = index+1;
					var t=function(a){
						return a<10?"0"+a:a;
					}
					xAxisArr.push(t(currentDate));
					var subjectOrder = mapDataYear.order;
					var orderCount = 0;
					for(var k in subjectOrder){
						var order = subjectOrder[k];
						var date=order.date;
						var orderYear=date.substr(5,2);
						if(orderYear == currentDate){
							orderCount = order.count;
							break;
						}
					}
					subject.push(orderCount);
					var subjectDeleteOrder = mapDataYear.orderDelete;
					var deleteOrderCount = 0;
					for(var k in subjectDeleteOrder){
						var deleteOrder = subjectDeleteOrder[k];
						var date=deleteOrder.date;
						var orderYear=date.substr(5,2);
						if(orderYear == currentDate){
							deleteOrderCount = deleteOrder.count;
							break;
						}
					}
					subjectCancle.push(deleteOrderCount);
				}
				optionYear.xAxis[0].data = xAxisArr;
				var orderSum=[];
				// var orderNumber=[];
				for(var index in subjectCancle){
					orderSum[index]=subject[index]+subjectCancle[index];
				}
				optionYear.series[0].data = orderSum;
				myChartYear.setOption(optionYear);
			})
		}
	}
})