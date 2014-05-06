define(['services/mainSrv'], function(mainSrv){

	mainSrv.factory('authSrv',['$location',function ($location){
		return {
			auth : function (){
				if(!localStorage.getItem('student_id')){
					$location.path('/login');
				}
			}
		};
	}]);
	
});

