define(['services/mainSrv'], function(mainSrv){
	
	mainSrv.factory('taskSrv',['$resource', function ($resource){
		return $resource('http://192.168.1.34:8080/app/student_subject_task/:rest',null,{
	    });
	}]);
	
});