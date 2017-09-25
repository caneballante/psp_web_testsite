$(document).ready(function () {	
		var vsINProgressIcon;
	
		console.log("data summary if ran")
		$.getJSON("json/indicator-list.json", function (data6) {
				dataINList = data6;
				rollUpMaker(dataINList);
				
			});			
		function rollUpMaker (dataINList){
			$('#show-indicators').append("<table class='table'><tr><td>INDICATOR</td><td colspan='2'>STATUS<strong></strong></td><td colspan='2'>PROGRESS</td></tr>");

			$.each((dataINList['indicators']), function(i, indicator) {
				$.getJSON("json/" + indicator, function (data4) {
					dataIN = data4;
					var vsINName = (dataIN['indicator']['indicator-name']);
					
					
					var vsINProgress = (dataIN['indicator']['progress-icon']);
					console.log ("*******" + vsINProgress + "*******" )
					if (vsINProgress==="GETTING WORSE"){
						vsINProgressIcon='<img src="images/vitalsigns/icons/gettingworse_sm.jpg" />';
						console.log(vsINName +"= getting worse " + vsINProgressIcon );
					};
					if (vsINProgress==="NOT IMPROVING"){
						vsINProgressIcon='<img src="images/vitalsigns/icons/notimproving_sm.jpg" />';
						console.log(vsINName +"= not improving "  + vsINProgressIcon);
					};
					if (vsINProgress==="MIXED RESULTS"){
						vsINProgressIcon='<img src="images/vitalsigns/icons/mixedresults_sm.jpg" />';
						console.log(vsINName +"= mixed "  + vsINProgressIcon);
					};
					if (vsINProgress==="INSUFFICIENT OR NO DATA"){
						vsINProgressIcon='<img src="images/vitalsigns/icons/notdata_sm.jpg" />';
						console.log(vsINName +"= no data "  + vsINProgressIcon);
					};
					if (vsINProgress==="GETTING BETTER"){
						vsINProgressIcon='<img src="images/vitalsigns/icons/gettingbetter_sm.jpg" />';
						console.log(vsINName +"= getting better "  + vsINProgressIcon);
					};
					
					
					var vsINStatus= (dataIN['indicator']['status-icon']);
					console.log ("*******" + vsINStatus + "*******" )
					if (vsINStatus==="BELOW 2020 TARGET"){
						vsINStatusIcon='<img src="images/vitalsigns/icons/belowtarget-sm.jpg" />';
						console.log(vsINStatus +"= below 2020 "  + vsINStatusIcon);
					};
					if (vsINStatus==="NEAR OR ON 2020 TARGET"){
						vsINStatusIcon='<img src="images/vitalsigns/icons/attarget-sm.jpg" />';
						console.log(vsINStatus +"= near "  + vsINStatusIcon);
					};
					if (vsINStatus==="NO 2020 TARGET"){
						vsINStatusIcon='<img src="images/vitalsigns/icons/insufficientornodata_sm.jpg" />';
						console.log(vsINStatus +"= no "  + vsINStatusIcon);
					};
					
					
					/*var allIndicators = '<tr><td><span class="indicator-list"> <strong>' + vsINName + ' </strong></span> </td><td> <span class="indicator-list"> ' + vsINProgress + " " + vsINProgressIcon  + " </span></td><td><span class="indicator-list">  " + vsINStatus + " " + vsINStatusIcon + '</span></td></tr>';*/
					var allIndicators = '<tr><td width="500px"><span class="indicator-list">' + vsINName +'</span></td><td> ' + vsINStatusIcon  + '</td><td><span class="indicator-list">' + vsINStatus + ' </span></td><td> ' + vsINProgressIcon  + '</td><td><span class="indicator-list">' + vsINProgress + ' </span></td></tr>';
				
					$('#show-indicators table').append(allIndicators);
				});			
			});
			$('#show-indicators table').append("</table>");
			
		
			
			
		};
});
