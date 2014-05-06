define(['controllers/mainCtr',"services/loginSrv"], function(mainCtr){
	
	mainCtr.controller('loginCtr',['$scope','$location','loginSrv',function ($scope,$location,loginSrv){
		$scope.user={};
		$scope.loginUser = function(){
			loginSrv.save($scope.user,function(data){
				if(data.status==1){
					localStorage.setItem('account',$scope.user.account);					
					localStorage.setItem('password',$scope.user.password);
					if(data.dto.role=='01'){
						localStorage.setItem('student_id',data.dto.id);
						$location.path('/menu');
					}else if(data.dto.role=='02'){
						localStorage.setItem('student_id',data.dto.parent.parentStudent[0].student.id);
						$location.path('/menu');
					}else{
						$scope.result='* Error, vuelva a intentarlo';
					}
				}else{
					$scope.result='* Usuario no valido';
				}
			});
		};
		$scope.logout = function(){
			localStorage.clear();
			$location.path('/login');
		};
	}]);
	
});