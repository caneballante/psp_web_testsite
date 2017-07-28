$(document).ready(function () {	
	
		console.log("data summary if ran")
		$.getJSON("json/indicator-list.json", function (data6) {
				dataINList = data6;
				rollUpMaker(dataINList);
				
			});			
		function rollUpMaker (dataINList){
			$.each((dataINList['indicators']), function(i, indicator) {
				$.getJSON("json/" + indicator, function (data4) {
					dataIN = data4;
					var vsINName= (dataIN['indicator']['indicator-name']);
					var vsINProgress= (dataIN['indicator']['progress-icon']);
					var vsINStatus= (dataIN['indicator']['status-icon']);
					var allIndicators = '<p> <strong>Indicator name:</strong> ' + vsINName + ' <strong>Status:</strong> ' + vsINStatus + ' <strong>Progress: </strong>' + vsINProgress + '</p></br>'
					$('#show-indicators').append(allIndicators);
				});			
			});
		}
});