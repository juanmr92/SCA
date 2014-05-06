define(['controllers/mainCtr',"services/markSrv","filters/markFtr"], function(mainCtr){
	
	mainCtr.controller('markCtr',['$scope','markSrv','$routeParams',function ($scope,markSrv,$routeParams){
		
		$scope.msg = null;
		
		$scope.maxResults = -1;
  		$scope.pageNumber = 1;
  		$scope.pageSize = 3;
  		
  		$scope.loadMarks = function(){
  			var requestObject={};
			requestObject.conjunctions={};
			requestObject.conjunctions.studentSubjectId=parseInt($routeParams.studentSubjectId);
			requestObject.pageNumber=$scope.pageNumber;
			requestObject.pageSize=$scope.pageSize;
	  		
			markSrv.save({rest:'listByStudentSubject'},requestObject,function(data){
				if(data.maxResults==0){
					$scope.msg={};
					$scope.msg.text='Aún no se ha registrado notas en este curso.';
					$scope.msg.type='danger';
				}else{
					$scope.msg=null;
					$scope.marks = data.dtoList;
					$scope.maxResults = data.maxResults;
				}
			});
		};
		
		$scope.pageChanged = function(page){
			$scope.pageNumber=page;
			$scope.loadMarks();
		};
		
		$scope.closeMsg = function() {
			$scope.msg = null;
		};
		
	}]);
	
});