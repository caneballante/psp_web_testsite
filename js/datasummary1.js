$(document).ready(function () {	
	//"use strict";

	$.getJSON("json/indicator-list-test.json", function (indicators) {
		//buildIndicatorTable(indicators['indicators'].length);
		$.each((indicators['indicators']), function(row, indicator) {
			fetchIndicator(row, indicator);
		});
	});
	function fetchIndicator(row, indicator) {
		$.getJSON("json/" + indicator, function (indicatorData) {
			updateIndicatorRow(row, indicatorData);
		});			
	}
	function updateIndicatorRow(row, indicatorData) {
		
		
					var vsInProgress = (indicatorData['indicator']['progress-icon']);
					console.log ("*******" + vsInProgress + "*******" )
					if (vsInProgress==="GETTING WORSE"){
						vsInProgressIcon='<img src="images/vitalsigns/icons/gettingworse_sm.jpg" />';
						console.log("!!!!!!!!!!!!!getting worse " + vsInProgressIcon );
					};
				/*	if (vsInProgress==="NOT IMPROVING"){
						vsInProgressIcon='<img src="images/vitalsigns/icons/notimproving_sm.jpg" />';
						console.log(vsInName +"= not improving "  + vsInProgressIcon);
					};
					if (vsInProgress==="MIXED RESULTS"){
						vsInProgressIcon='<img src="images/vitalsigns/icons/mixedresults_sm.jpg" />';
						console.log(vsInName +"= mixed "  + vsInProgressIcon);
					};
					if (vsInProgress==="INSUFFICIENT OR NO DATA"){
						vsInProgressIcon='<img src="images/vitalsigns/icons/notdata_sm.jpg" />';
						console.log(vsInName +"= no data "  + vsInProgressIcon);
					};
					if (vsInProgress==="GETTING BETTER"){
						vsInProgressIcon='<img src="images/vitalsigns/icons/gettingbetter_sm.jpg" />';
						console.log(vsInName +"= getting better "  + vsInProgressIcon);
					};*/
					
					
				var vsInStatus= (indicatorData['indicator']['status-icon']);
					console.log ("*******" + vsInStatus + "*******" )
					/*if (vsInStatus==="BELOW 2020 TARGET"){
						vsInStatusIcon='<img src="images/vitalsigns/icons/belowtarget-sm.jpg" />';
						console.log(vsInStatus +"= below 2020 "  + vsInStatusIcon);
					};
					if (vsInStatus==="NEAR OR ON 2020 TARGET"){
						vsInStatusIcon='<img src="images/vitalsigns/icons/attarget-sm.jpg" />';
						console.log(vsInStatus +"= near "  + vsInStatusIcon);
					};
					if (vsInStatus==="NO 2020 TARGET"){
						vsInStatusIcon='<img src="images/vitalsigns/icons/insufficientornodata_sm.jpg" />';
						console.log(vsInStatus +"= no "  + vsInStatusIcon);
					};*/
					
					
		
		
		
		
		var nextIndicators = '<td width="500px"><span class="indicator-bold ">' + indicatorData['indicator']['indicator-name'] +'</span></td><td> ' + vsInStatus  + '</td><td><span class="indicator-list">' + indicatorData['indicator']['status-icon'] + ' </span></td><td> ' + vsInProgress  + '</td><td><span class="indicator-list">' + indicatorData['indicator']['progress-icon']  + ' </span></td>';
		//var row = $('#summaryTable #' + row);
		console.log('updating indicator row: ' + indicatorData['indicator']['indicator-name']);
		$('#summaryTable #' + row).html(nextIndicators);
		//TODO: update row
	}
	//function buildIndicatorTable(rowCount) {
		// TODO: Add rows
	//}
});

