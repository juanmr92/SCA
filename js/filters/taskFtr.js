define(['filters/mainFtr'], function(mainFtr) {
	mainFtr.filter('taskFtr', function() {
		return function(input, type) {
	        if (!angular.isUndefined(input) && !angular.isUndefined(type)) {
	        	var result ="";
	        	var states = {
	        			"name" : {
	        				"0":"Pendiente",
	        				"1": "Completo",
	        				"2": "Incompleto",
	        				"3": "No hizo",
	        			},
	        			"style" : {
	        				"0":"info",
	        				"1": "success",
	        				"2": "warning",
	        				"3": "danger"
	        			}
	        	};
	        	if(type=='name'){
	        		result=states["name"][input];
	        	}else if(type=='style'){
	        		result=states["style"][input];
	        	}
	            return result;
	        } else {
	            return input;
	        }
		};
	});

});