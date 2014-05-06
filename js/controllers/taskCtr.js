define(['controllers/mainCtr',"services/taskSrv","filters/taskFtr"], function(mainCtr){
	
	mainCtr.controller('taskCtr',['$scope','taskSrv','$routeParams',function ($scope,taskSrv,$routeParams){
		
		$scope.msg = null;
		
		$scope.maxResults = -1;
  		$scope.pageNumber = 1;
  		$scope.pageSize = 4;
  		
  		$scope.loadTasks = function(){
  			var requestObject={};
			requestObject.conjunctions={};
			requestObject.conjunctions.studentSubjectId=parseInt($routeParams.studentSubjectId);
			requestObject.pageNumber=$scope.pageNumber;
			requestObject.pageSize=$scope.pageSize;
	  		
	  		taskSrv.save({rest:'listByStudentSubject'},requestObject,function(data){
				if(data.maxResults==0){
					$scope.msg={};
					$scope.msg.text='Aún no se ha registrado tareas en este curso.';
					$scope.msg.type='danger';
				}else{
					$scope.msg=null;
					$scope.tasks = data.dtoList;
					$scope.maxResults = data.maxResults;
					
					$scope.taskRows=[];
					for(var i=0; i<$scope.tasks.length;){
						var tasksCol = [];
						for(var j=0; j<3;j++){
							if(i<$scope.tasks.length){
								tasksCol.push($scope.tasks[i]);
								i++;
							}else{
								break;
							}
						}
						$scope.taskRows.push(tasksCol);							
					}
					
				}
	  		});	
  		};
  		
  		$scope.pageChanged = function(page){
			$scope.pageNumber=page;
			$scope.loadTasks();
		};
		
	}]);
	
});