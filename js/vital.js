$(document).ready(function () {	
	
	//Initialize variables and arrays
	//var dataJS;
	//var dataIN;
	
	var whatPage;
	console.log("vital.js loaded")
	
	//untested for loop to open close nav without changing pages
/*	for (i= 0; i<11; i++){
		console.log(i);
		$("#nav" + i).click(function(){
			$("#nav" + i).addClass("subNavOn");	
			console.log ("nav fired")
		});
	}
*/
	//NAVIGATION
	$("#nav" + navSelected).addClass("active");
	$("#nav" + navSelected).addClass("subNavOn");
	if (subNavSelected != "non"){
		$("#subnav" + subNavSelected).addClass("active");
	};
	
	function bulletMaker (bullitefy){
		var bulletStart = bullitefy.replace(new RegExp('~SL', 'g'), '</p><ul><li>');
		var bulletMiddle = bulletStart.replace(new RegExp('~EL', 'g'), '</li></ul><p>');
		var bulletEnd = bulletMiddle.replace(new RegExp('~B', 'g'), '</li><li>');
		return(bulletEnd);
	};
	
	function paragraphMaker (paragraphify){
		var addParagraph = paragraphify.replace(new RegExp('~P', 'g'), '</p><p>');
		var wrapParagraph = '<p>' + addParagraph + '</p>';
		return(wrapParagraph);
	};
	
	function colorMaker (colorify){
		console.log("colormaker runs! and received ="+colorify);
		if (colorify === "Healthy Human Population"){
			colorify = "green-header";
			return(colorify);
		}
		if (colorify === "Vibrant Quality of Life"){
			colorify = "orange-header";
			return(colorify);
		}
		if (colorify === "Thriving Species and Food Web"){
			colorify = "pink-header";
			return(colorify);
		}
		if (colorify === "Protected and Restored Habitat"){
			colorify = "purp-header";
			return(colorify);
		}
		if (colorify === "Abundant Water Quantity"){
			colorify = "blue-header";
			return(colorify);
		}
		if (colorify === "Healthy Water Quality"){
			colorify = "aqua-header";
			return(colorify);
		}
		
		
	}
	//VITAL SIGNS 
	
	if (whatIN === 0){
		
		console.log("vital if ran")
		
	
		//load vital sign data
		$.getJSON("json/" + whatVS, function (data2) {
			dataVS = data2;
			vsDataShow();
		});


		function vsDataShow () {	

			//goal
			var vsGoal = (dataVS['vitalSign']['goal']);
			var vsGoalColor = colorMaker(vsGoal);
			console.log("color = " +vsGoalColor);
			$('#show-goal').html(vsGoal);
			$('#show-goal').addClass(vsGoalColor);

			//name
			var vsName = (dataVS['vitalSign']['name']);
			$('#show-name').html(vsName);
			$('#show-name').addClass(vsGoalColor);

			//lead
			var vsLead = (dataVS['vitalSign']['lead']);
			$('#show-lead').html(vsLead);

			//contact
			var vsContact = (dataVS['vitalSign']['contact']);
			$('#show-contact').html(vsContact);
			
			//last updated
			var vsLastUpdated = (dataVS['vitalSign']['last-updated']);
			$('#show-vs-last-updated').html(vsLastUpdated);

			//what
			var vsWhat = ('<p>' + dataVS['vitalSign']['what'] + '</p>');
			var vsWhatBullit = bulletMaker(vsWhat);
			var vsWhatBullitHtml = paragraphMaker(vsWhatBullit);
			$('#show-what').html(vsWhatBullitHtml);

			//assessment
			var vsKeyMessages = (dataVS['vitalSign']['key-messages']);
			var vsKeyMessagesBullit = bulletMaker(vsKeyMessages);
			var vsKeyMessagesHtml = paragraphMaker(vsKeyMessagesBullit);
			$('#show-key-messages').html(vsKeyMessagesHtml);

			//rating - removed
			//$.each((dataVS['vitalSign']['progress_rating']), function(i, rating) {
			//	ratingArray.push(rating);
			//});
			/*buildChart(ratingArray);*/

			//indicators
			$.each((dataVS['vitalSign']['indicators']), function(i, indicator) {
				$.getJSON("json/" + indicator, function (data4) {
					dataIN = data4;
					var vsINName= (dataIN['indicator']['indicator-name']);
					
					
					var vsINProgress= (dataIN['indicator']['progress-icon']);
					if (vsINProgress==="GETTING WORSE"){
					vsINProgress='<img src="images/vitalsigns/icons/gettingworse-lg.png" />';
					};
					if (vsINProgress==="NOT IMPROVING"){
					vsINProgress='<img src="images/vitalsigns/icons/notimproving-lg.png" />';
	
					};
					if (vsINProgress==="MIXED RESULTS"){
					vsINProgress='<img src="images/vitalsigns/icons/mixedresults-lg.png" />';
	
					};
					if (vsINProgress==="INSUFFICIENT OR NO DATA"){
					vsINProgress='<img src="images/vitalsigns/icons/nodata-lg.png" />';

					};
					if (vsINProgress==="GETTING BETTER"){
					vsINProgress='<img src="images/vitalsigns/icons/gettingbetter-lg.png" />';
					};
					
					
					var vsINStatus= (dataIN['indicator']['status-icon']);
					if (vsINStatus==="BELOW 2020 TARGET"){
					vsINStatus='<img src="images/vitalsigns/icons/belowtarget-lg.png" />';
					};
					if (vsINStatus==="NEAR OR ON 2020 TARGET"){
						vsINStatus='<img src="images/vitalsigns/icons/attarget-lg.png" />';
					};
					if (vsINStatus==="NO 2020 TARGET"){
						vsINStatus='<img src="images/vitalsigns/icons/notarget-lg.png" />';
					};
					if (vsINStatus==="INSUFFICIENT OR NO DATA"){
						vsINStatus='<img src="images/vitalsigns/icons/nodatastatus-lg.png" />';
					};
					
					
					
					
					
					
					var allIndicators = '<p>' + vsINName + ' = <strong>Status:</strong> ' + vsINStatus + ' <strong>Progress: </strong>' + vsINProgress + '</p>';
					$('#show-indicators').append(allIndicators);
				});			
			});

			//highlights
			//var vsHighlights = (dataVS['vitalSign']['highlights']);
			//var vsHighlightsBullit = bulletMaker(vsHighlights);
			//var vsHighlightsHtml = paragraphMaker(vsHighlightsBullit);
		//	$('#show-highlight').html(vsHighlightsHtml);

			//highlight photos
		//	var vsHighlightPhoto = (dataVS['vitalSign']['highlight_photo']);
		//	$('#show-highlight-photo').html(vsHighlightPhoto);

			//links
			$.each((dataVS['vitalSign']['links']['section1']), function(i, thelink) {
				//	var vsLinkURL = (linkSet['link-name']);
					var vslinkShow  = '<p>' + thelink + '<p>';
					$('#show-links-sec1').append(vslinkShow);
			});
				$.each((dataVS['vitalSign']['links']['section2']), function(i, thelink) {
				//	var vsLinkURL = (linkSet['link-name']);
					var vslinkShow  = '<p>' + thelink + '<p>';
					$('#show-links-sec2').append(vslinkShow);
			});
				$.each((dataVS['vitalSign']['links']['section3']), function(i, thelink) {
				//	var vsLinkURL = (linkSet['link-name']);
					var vslinkShow  = '<p>' + thelink + '<p>';
					$('#show-links-sec3').append(vslinkShow);
			});

		};
	
		
//--------------------------------INDICATOR------------------------------------------		
		
		
	};
	//INDICATOR
	if (whatVS === 0){
		console.log("indicator if ran")
	
		$.getJSON("json/" + whatIN, function (data3) {
			dataIN = data3;
			inDataShow();
			console.log("JSON GET ran")
		});

		/*var massiveArray= [];
		for(i = 0; i<25; i++){
			$.getJSON("json/test" + i + ".json", function (data) {
			console.log(data['indicator']['indicator-progress'])	
			massiveArray[i]=(data['indicator']['indicator-progress']);
		});
		console.log("did i run?" +massiveArray[1])
	*/
		function inDataShow () {
			console.log("indicator is working");

			//goal
			var inGoal = (dataIN['indicator']['goal']);
		
			//this is used anywhere I want to set the color
			var inGoalColor = colorMaker(inGoal);
			console.log(inGoalColor);
			$('#show-in-goal').html(inGoal);
			$('#show-in-goal').addClass(inGoalColor);

			//vital sign
			var inVitalSign = (dataIN['indicator']['vitalsign']);
		
			$('#show-in-vitalsign').html(inVitalSign);
			$('#show-in-vitalsign').addClass(inGoalColor);

			//indicator
			var inIndicator = (dataIN['indicator']['indicator-name']);
			$('#show-in-name').html(inIndicator);
			$('#show-in-name').addClass(inGoalColor);

			//lead
			var inLead = (dataIN['indicator']['lead']);
			$('#show-in-lead').html(inLead);

			//contact
			var inContact = (dataIN['indicator']['contact']);
			$('#show-in-contact').html(inContact);

			//logo
			var inLogo = (dataIN['indicator']['logo-link']);
			var inlogoHtml  = '<img src="images/vitalsigns/logos/' + inLogo + '.jpg" width="150" height="101" alt=""/>';
			$('#show-in-logo').html(inlogoHtml);

			//last updated
			var inLastUpdated = (dataIN['indicator']['last-updated']);
			$('#show-in-last-updated').html(inLastUpdated);

			//status icon
			var inStatusIcon = (dataIN['indicator']['status-icon']);
			if (inStatusIcon==="BELOW 2020 TARGET"){
				inStatusIcon='<img src="images/vitalsigns/icons/belowtarget-lg.png" />';
			};
			if (inStatusIcon==="NEAR OR ON 2020 TARGET"){
				inStatusIcon='<img src="images/vitalsigns/icons/attarget-lg.png" />';
			};
			if (inStatusIcon==="NO 2020 TARGET"){
				inStatusIcon='<img src="images/vitalsigns/icons/notarget-lg.png" />';
			};
			if (inStatusIcon==="INSUFFICIENT OR NO DATA"){
				inStatusIcon='<img src="images/vitalsigns/icons/nodatastatus-lg.png" />';
			};
			$('#show-in-status-icon').html(inStatusIcon);
			
			//progress icon
			var inProgressIcon = (dataIN['indicator']['progress-icon']);
			if (inProgressIcon==="GETTING WORSE"){
				inProgressIcon='<img src="images/vitalsigns/icons/gettingworse-lg.png" />';
			};
			if (inProgressIcon==="NOT IMPROVING"){
				inProgressIcon='<img src="images/vitalsigns/icons/notimproving-lg.png" />';
	
			};
			if (inProgressIcon==="MIXED RESULTS"){
				inProgressIcon='<img src="images/vitalsigns/icons/mixedresults-lg.png" />';
	
			};
			if (inProgressIcon==="INSUFFICIENT OR NO DATA"){
				inProgressIcon='<img src="images/vitalsigns/icons/nodata-lg.png" />';

			};
			if (inProgressIcon==="GETTING BETTER"){
				inProgressIcon='<img src="images/vitalsigns/icons/gettingbetter-lg.png" />';
	
			};
			$('#show-in-progress-icon').html(inProgressIcon);		
					
				
			
			
			
			/*//progress icon tagline
			var inProgressIconTag = ('<p>' + dataIN['indicator']['progress-icon-tagline'] + '</p>');
			$('#show-in-progress-icon-tag').html(inProgressIconTag);*/

			//Progress Description
			var inProgressDesc = (dataIN['indicator']['progress-description']);
			var inProgressDesc = bulletMaker(inProgressDesc);
			var inProgressDescHtml = paragraphMaker(inProgressDesc);
			$('#show-in-progress-desc').html(inProgressDescHtml);

			
			//what
			var inWhat = (dataIN['indicator']['what']);
			var inWhatBullets = bulletMaker(inWhat);
			var inWhatHtml = paragraphMaker(inWhatBullets);
			$('#show-in-what').html(inWhatHtml);

			
			//data 
			$.each((dataIN['indicator']['data']), function(i, dataSet) {
				var inDataTitle = '<p>'+(dataSet['title'])+'</p>';
				var inDataSubhead = '<p><em>'+(dataSet['subhead'])+'</em></p>';
				var inDataFigure = '<img class="img-responsive" src="images/vitalsigns/' + (dataSet['figure-link']) + '"  alt=""/>';
				var inDataCaption = '<p><em>'+(dataSet['caption'])+'</em></p>';
				var inDataSource = '<p class="caption"><em>'+(dataSet['source'])+'</em></p><br>';
				var inDataDescription = (dataSet['description']);
				var inDataDescriptionBullets = bulletMaker(inDataDescription);
				var inDataDescriptionHtml = paragraphMaker(inDataDescriptionBullets);
				//	var vslinkShow  = '<a href=' + vsLinkURL + '>' + vsLinkName '</a>';
					//var inlinkShow  = '<p><a href="' + inLinkURL + '">' + inLinkName + '</a></p>';
				$('#show-in-data').append(inDataTitle);
				$('#show-in-data').append(inDataSubhead);
				$('#show-in-data').append(inDataFigure);
				$('#show-in-data').append(inDataCaption);
				$('#show-in-data').append(inDataSource);
				$('#show-in-data').append(inDataDescriptionHtml);
			});
			
			//more description
			var inMoreDescription = (dataIN['indicator']['more-description']);
			//check if field is empty
			if (inMoreDescription === ""){
				$('#show-in-more-description-header').hide();
				$('#show-in-more-description').hide();
			} else {
				var inMoreDescriptionFmt = inMoreDescription.replace(new RegExp('~P', 'g'), '</p><p>');
				var inMoreDescriptionHtml = '<p>' + inMoreDescriptionFmt + '</p>';
				$('#show-in-more-description').html(inMoreDescriptionHtml);
			};
			
			
			//why happening
			var inWhyHappen = (dataIN['indicator']['why-happening']);
			//check if field is empty
			if (inWhyHappen === ""){
				$('#show-in-why-happen').hide();
				$('#show-in-why-happen-header').hide();
			} else {
				var inWhyBullets = bulletMaker(inWhyHappen);
				var inWhyHappenHtml = paragraphMaker(inWhyBullets);
				$('#show-in-why-happen').html(inWhyHappenHtml);
			};
				
			
			
			//references
			var inReferences = (dataIN['indicator']['references']);
			//check if field is empty
			if (inReferences === ""){
				$('#show-in-references').hide();
				$('#show-in-references-header').hide();	
			} else {
				var inReferencesFmt = inReferences.replace(new RegExp('~P', 'g'), '</p><p>');
				var inReferencesHtml = '<p>' + inReferencesFmt + '</p>';
				$('#show-in-references').html(inReferencesHtml);
			};	
			
			//target
			var inTarget = (dataIN['indicator']['target']);
			var inTargetFmt = inTarget.replace(new RegExp('~P', 'g'), '</p><p>');
			var inTargetHtml = '<p>' + inTargetFmt + '</p>';
			$('#show-in-target').html(inTargetHtml);

			//interim target
			var inInterimTarget = (dataIN['indicator']['interim-target']);
			var inInterimTargetBullets = bulletMaker(inInterimTarget);
			var inInterimTargetHtml = paragraphMaker(inInterimTargetBullets);
			$('#show-in-interim-target').html(inInterimTargetHtml);
			
			//interim target table title
			var inInterimTargetTableTitle = (dataIN['indicator']['interim-target-title']);
			var inInterimTargetTableTitleFmt = inInterimTargetTableTitle.replace(new RegExp('~P', 'g'), '</p><p>');
			var inInterimTargetTableTitleHtml = '<p>' + inInterimTargetTableTitleFmt + '</p>';
			$('#show-in-interim-target-table-title').html(inInterimTargetTableTitleHtml);

			//interim target table
			var inInterimTargetTableLink = (dataIN['indicator']['interim-target-table']);
			console.log(inInterimTargetTableLink);
			var inInterimTargetTableHTML = '<img class="img-responsive" src="images/vitalsigns/' + inInterimTargetTableLink  + '"  alt=""/>';
			console.log(inInterimTargetTableHTML);
			$('#show-in-interim-target-table').html(inInterimTargetTableHTML);

			//map
			var inMap = (dataIN['indicator']['map-link']);
			//this is a graphic link
			
			//map text
			var inMapText = (dataIN['indicator']['map-link-text']);
			var inMapTextFmt = inMap.replace(new RegExp('~P', 'g'), '</p><p>');
			var inMapTextHtml = '<p>' + inMapTextFmt + '</p>';
			$('#show-in-map-text').html(inMapTextHtml);
			
			//links
			$.each((dataIN['indicator']['links']), function(i, linkSet) {
					var inLinkURL = (linkSet['link-url']);
					var inLinkName = (linkSet['link-name']);
				//	var vslinkShow  = '<a href=' + vsLinkURL + '>' + vsLinkName '</a>';
					var inlinkShow  = '<p><a href="' + inLinkURL + '">' + inLinkName + '</a></p>';
					$('#show-in-links').append(inlinkShow);
				});
		};
	};
});

