angular.module("controllers.good",[])  //controller后面这个名字是无所谓的  只是新定义的一个内容罢了
.controller("good",function(
	$scope,
	$getgood
){
	var incId=0,
        top=80;
    $scope.comment={name:"",idNumber:"",coachId:"",createDate:"",star:"",studentId:"",stuIdNumber:"",stuName:""};
    $scope.good={createDate:"",star:"",studentName:""};
    $scope.commentTemp={name:""};
    $scope.goodList=[];
    $getgood.getgood(incId,top,'next',function(err,result){
    	if(err){
			alert("sorry,访问出错");
		}else{
			if(result && result.success == true){
			       var coachArray=result.coachArray;
			       var commentArray=result.commentArray;
			       var studentArray=result.studentArray;
			       for(var index in coachArray){
			       	  $scope.comment.name=coachArray[index].name,
			       	  $scope.comment.idNumber=coachArray[index]._id;
			       	  // console.log($scope.comment.idNumber);
				       	  for(var i in commentArray){
					       	  $scope.comment.coachId=commentArray[i].coachId;
					       	  console.log($scope.comment.coachId);
					       	  $scope.comment.createDate=commentArray[i].createDate;
					       	  $scope.comment.star=commentArray[i].star;
					       	  $scope.comment.studentId=commentArray[i].studentId;
					       	  // console.log($scope.comment.studentId);
					       	  for(var b in studentArray){
						       	  $scope.comment.stuIdNumber=studentArray[b]._id;
						       	  // console.log( $scope.comment.stuIdNumber);
						       	  $scope.comment.stuName=studentArray[b].name;
						       }
						       if($scope.comment.idNumber == $scope.comment.coachId && $scope.comment.studentId == $scope.comment.stuIdNumber){
						       	  var coachName=$scope.comment.name,
						       	      createDate=$scope.comment.createDate,
						       	      star=$scope.comment.star,
						       	      studentName=$scope.comment.stuName;
						       	  $scope.commentTemp.name=coachName;
						       	  $scope.good={createDate:createDate,star:star,studentName:studentName};
			                      $scope.goodList.push($scope.good);;
						       }
				       }
			       }
			       console.log($scope.goodList);
			}else{
				if(result && result.commentArray == null){
					console.log("评价为空");
				}else{
					console.log("sorry,获取失败");
				}
			}
		}
    })

})