define(['services/mainSrv'], function(mainSrv){
	
	mainSrv.factory('subjectSrv',['$resource', function ($resource){
		return $resource('http://192.168.1.34:8080/app/student_subject/:rest/:id',null,{
	       });
	}]);
	
});