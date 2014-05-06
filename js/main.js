require.config({
	paths: {
		domReady		: 'lib/require/domReady',
		angular			: 'lib/angular/angular.min',
		angularRoute 	: 'lib/angular/angular-route.min',
		angularResource : 'lib/angular/angular-resource.min',
		bootstrap		: 'lib/bootstrap/bootstrap.min',
		bootstrapui		: 'lib/bootstrap/ui-bootstrap-tpls-0.10.0.min',
		jquery			: 'lib/jquery/jquery'
	},
	shim:  {
		angular	:{
			exports :"angular"
		},
		angularRoute :{
			deps	:["angular"]
		},
		angularResource :{
			deps	:["angular"]
		},
		jquery :{
			exports :"jquery"
		},
		bootstrap :{
			deps	:["jquery"]
		},
		bootstrapui :{
			deps	:["angular"]
		},
		app : {
			deps 	:["angular"]
		}
	},
	urlArgs: "bust=" + (new Date()).getTime(),
	waitSeconds: 0
});
requirejs(["app"]);