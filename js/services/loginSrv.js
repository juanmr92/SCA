define(['services/mainSrv'], function(mainSrv){

	mainSrv.factory('loginSrv',['$resource', function ($resource){
		return $resource('http://192.168.1.33:8080/app/user/login');
	}]);
	
});

