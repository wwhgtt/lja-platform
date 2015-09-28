angular.module("directives.anoZhe",[])
.directive("anoZhe",function(

){
	return{
		restrict:"A",
		link:function($scope,element,attr){
			var myChart = echarts.init(element.find("#mainStu")[0]);
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
				console.log(diffDays)
				var xAxisArr = [];
				var subject = [];
				var subjectCancle = [];
				for(var index=0 ;index <= diffDays; index++){
					var currentDate = moment(mapData.pre.date).add(index,'day');
					var currentDateStr = currentDate.format("MM-DD");
					var currentComplateStr = currentDate.format("YYYY-MM-DD");
					xAxisArr.push(currentDateStr);
					var subjectOrder = mapData.studentOrder;
					var orderCount = 0;
					for(var k in subjectOrder){
						var studentOrder = subjectOrder[k];
						if(studentOrder.date == currentComplateStr){
							orderCount = studentOrder.count;
							break;
						}
					}
					subject.push(orderCount);
				}
				option.xAxis[0].data = xAxisArr;
				// var orderNumber=[];
				option.series[0].data = subject;
				myChart.setOption(option);
			})
			//周活动情况
			var myCharts = echarts.init(element.find("#mainWeekStu")[0]);
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
					var momentData=moment().week(currentDate).format("MM/DD");
					var weekData=momentData+"--"+moment(momentData).add('6','days').format("MM/DD");
					xAxisArr.push(weekData);
					var subjectOrder = mapDataWeek.studentOrder;
					var orderCount = 0;
					for(var k in subjectOrder){
						var studentOrder = subjectOrder[k];
						if(studentOrder.week == currentDate){
							orderCount = studentOrder.count;
							break;
						}
					}
					subject.push(orderCount);
				}
				options.xAxis[0].data = xAxisArr;
				options.series[0].data = subject;
				myCharts.setOption(options);
			})
//年活动情况
			var myChartYear = echarts.init(element.find("#mainYearStu")[0]);
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
					var subjectOrder = mapDataYear.studentOrder;
					var orderCount = 0;
					for(var k in subjectOrder){
						var studentOrder = subjectOrder[k];
						var date=studentOrder.date;
						var orderYear=date.substr(5,2);
						if(orderYear == currentDate){
							orderCount = studentOrder.count;
							break;
						}
					}
					subject.push(orderCount);
				}
				optionYear.xAxis[0].data = xAxisArr;
				optionYear.series[0].data = subject;
				myChartYear.setOption(optionYear);
			})
		}
	}
})