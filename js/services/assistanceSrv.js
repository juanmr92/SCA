define(['services/mainSrv'], function(mainSrv){
	
	mainSrv.factory('assistanceSrv',['$resource', function ($resource){
		return $resource('http://192.168.1.34:8080/app/assistance/:rest',null,{
	       });
	}]);
	
});