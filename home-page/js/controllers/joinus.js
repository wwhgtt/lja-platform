angular.module("controllers.joinus",["controllers.jobList"]) 
.controller("joinus",function(
     $scope,
     $getjob
){
     $scope.jobList={name:"",duty:"",pay:"",describle:"",imgName:""};
     $getjob.getjob(function(err,result){
          if (err) {
               alert("sorry,visited failed");
          }else{
               if(result){
                    $scope.jobList=result;
                    var jobList=$scope.jobList;
                    for(index in jobList){
                         var imgName=result[index].imgName;
                         jobList[index].url=BASE_URL+"/websiteData/img/"+imgName;
                    }
               }
          }
     })
})