$(document).ready(function () {	
	//"use strict";
	var vsSummaryArr =[];
	$.getJSON("json/indicator-list.json", function (data) {
			var dataINList = data;
			rollUpMaker(dataINList);			
		});			
	function rollUpMaker (dataINList){	
		$.each((dataINList['indicators']), function(i, indicator) {
			$.getJSON("json/" + indicator, function (data) {
				var dataIN = data;
				vsSummaryArr[i] = {
					name: (dataIN['indicator']['indicator-name']),
					vsINProgress: (dataIN['indicator']['progress-icon']),
					vsINStatus : (dataIN['indicator']['status-icon'])
				};
			});			
		});
		console.log(vsSummaryArr)
		for (var x = 0; x < 51; x++){
			var allIndicators =  "<p>"+ vsSummaryArr[x]["name"] + "</p>";
			$('#show-indicators').append(allIndicators);
		}	
	}
});
