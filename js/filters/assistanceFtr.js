define(['filters/mainFtr'], function(mainFtr) {
	mainFtr.filter('assistanceFtr', function() {
		return function(input, type) {
	        if (!angular.isUndefined(input) && !angular.isUndefined(type)) {
	        	var result ="";
	        	var states = {
	        			"name" : {
	        				"0":"--",
	        				"1": "Asistió",
	        				"2": "Falta",
	        				"3": "Tardanza",
	        				"4": "Tardanza Justificada",
	        				"5": "Falta Justificada"
	        			},
	        			"style" : {
	        				"0":"default",
	        				"1": "success",
	        				"2": "danger",
	        				"3": "warning",
	        				"4": "warning",
	        				"5": "warning"
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