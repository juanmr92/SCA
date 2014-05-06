define(['controllers/mainCtr',"services/assistanceSrv","filters/assistanceFtr"], function(mainCtr){
	
	mainCtr.controller('assistanceCtr',['$scope','assistanceSrv','$routeParams',function ($scope,assistanceSrv,$routeParams){
		
		$scope.msg = null;		
		$scope.maxResults = -1;
  		$scope.pageNumber = 1;
  		$scope.pageSize = 2;
				
		$scope.loadAssists = function(){
			var requestObject={};
			requestObject.conjunctions={};
			requestObject.conjunctions.studentSubjectId=parseInt($routeParams.studentSubjectId);
			requestObject.pageNumber=$scope.pageNumber;
			requestObject.pageSize=$scope.pageSize;
	  		
	  		assistanceSrv.save({rest:'listByStudentSubject'},requestObject,function(data){
				if(data.maxResults==0){
					$scope.msg={};
					$scope.msg.text='Aún no se ha registrado asistencias.';
					$scope.msg.type='danger';
				}else{
					$scope.msg=null;
					$scope.assists = data.dtoList;
					$scope.maxResults = data.maxResults;
				}
			});
		};
		
		$scope.pageChanged = function(page){
			$scope.pageNumber=page;
			$scope.loadAssists();
		};
		
		$scope.closeMsg = function() {
			$scope.msg = null;
		};
		
	}]);
	
});