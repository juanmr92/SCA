define(["services/mainSrv","filters/mainFtr"],function(){
	var mainCtr = angular.module('mainCtr',['mainSrv','mainFtr']);
	return mainCtr;
});