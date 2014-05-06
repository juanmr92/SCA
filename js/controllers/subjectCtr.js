define(['controllers/mainCtr',"services/subjectSrv"], function(mainCtr){
	
	mainCtr.controller('subjectCtr',['$scope','subjectSrv','$routeParams',function ($scope,subjectSrv,$routeParams){
		//$scope.subjects=[{"subject_id" : "001" , "name" : "Matematica 5B"},{"subject_id" : "002" , "name" : "Lenguaje 5B"}];
		$scope.msg = null;
		
		$scope.option = $routeParams.option;
		subjectSrv.get({rest:'listByStudentId',id:localStorage.getItem('student_id')},function(data){
			if(data.maxResults==0){
				$scope.msg={};
				$scope.msg.text='El alumno no tiene cursos asginados';
				$scope.msg.type='danger';
			}else{
				$scope.msg=null;
				$scope.subjects = data.dtoList;
			}
		});
		
		$scope.closeMsg = function() {
			$scope.msg = null;
		};
	}]);
	
});