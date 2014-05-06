define(["controllers/mainCtr","controllers/loginCtr","controllers/subjectCtr",
	"controllers/assistanceCtr","controllers/taskCtr","controllers/markCtr",
	"services/mainSrv","services/authSrv","angularRoute","bootstrapui"],function(){
	var app = angular.module("app",[
		'ngRoute',
		'mainCtr',
		'ui.bootstrap'
	]);

	app.config(['$routeProvider',
		function($routeProvider){
			$routeProvider
			.when("/login",{
				templateUrl : "templates/login.html",
				controller  : "loginCtr"
			})
			.when("/menu",{
				templateUrl : "templates/menu.html",
				resolve :  {
					'auth' :function(authSrv){
						return authSrv.auth();
					}
				}
			})
			.when("/subjects/:option",{
				templateUrl : "templates/subjects.html",
				controller  : "subjectCtr",
				resolve :  {
					'auth' :function(authSrv){
						return authSrv.auth();
					}
				}
			})
			.when("/assistance/:studentSubjectId",{
				templateUrl : "templates/assistance.html",
				controller  : "assistanceCtr",
				resolve :  {
					'auth' :function(authSrv){
						return authSrv.auth();
					}
				}
			})
			.when("/task/:studentSubjectId",{
				templateUrl : "templates/task.html",
				controller  : "taskCtr",
				resolve :  {
					'auth' :function(authSrv){
						return authSrv.auth();
					}
				}
			})
			.when("/mark/:studentSubjectId",{
				templateUrl : "templates/mark.html",
				controller  : "markCtr",
				resolve :  {
					'auth' :function(authSrv){
						return authSrv.auth();
					}
				}
			})
			.otherwise({ redirectTo : "/menu"});
		}]);
	angular.bootstrap(document, ['app']);
	return app;
});