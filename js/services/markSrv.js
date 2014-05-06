define(['services/mainSrv'], function(mainSrv){
	
	mainSrv.factory('markSrv',['$resource', function ($resource){
		return $resource('http://192.168.1.34:8080/app/student_subject_mark/:rest',null,{
	       });
	}]);
	
});