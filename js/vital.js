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
	
	
	if (whatIN === 0){
		
		console.log("vital if ran")
		//VITAL SIGNS 
	
		//load vital sign data
		$.getJSON("json/" + whatVS, function (data2) {
			dataVS = data2;
			vsDataShow();
		});


		function vsDataShow () {	

			//goal
			var vsGoal = ('<p>' + dataVS['vitalSign']['goal'] + '</p>');
			$('#show-goal').html(vsGoal);

			//name
			var vsName = ('<p>' + dataVS['vitalSign']['name'] + '</p>');
			$('#show-name').html(vsName);

			//lead
			var vsLead = ('<p>' + dataVS['vitalSign']['lead'] + '</p>');
			$('#show-lead').html(vsLead);

			//contact
			var vsContact = ('<p>' + dataVS['vitalSign']['contact'] + '</p>');
			$('#show-contact').html(vsContact);

			//what
			var vsWhat = ('<p>' + dataVS['vitalSign']['what'] + '</p>');
			$('#show-what').html(vsWhat);

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
					var vsINStatus= (dataIN['indicator']['status-icon']);
					var allIndicators = '<p> <strong>Indicator name:</strong> ' + vsINName + ' <strong>Status:</strong> ' + vsINStatus + ' <strong>Progress: </strong>' + vsINProgress + '</p>'
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
			$.each((dataVS['vitalSign']['links']), function(i, linkSet) {
					var vsLinkURL = (linkSet['link-name']);
					var vsLinkName = (linkSet['link-url']);
				//	var vslinkShow  = '<a href=' + vsLinkURL + '>' + vsLinkName '</a>';
					var vslinkShow  = '<p><a href=">' + vsLinkURL + '">' + vsLinkName + '</a></p>';
					$('#show-links').append(vslinkShow);
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
			var inGoalHtml = paragraphMaker(inGoal);
			$('#show-in-goal').html(inGoalHtml);

			//vital sign
			var inVitalSign = (dataIN['indicator']['vitalsign']);
			var inVitalHtml = paragraphMaker(inVitalSign);
			$('#show-in-vitalsign').html(inVitalHtml);

			//indicator
			var inIndicator = (dataIN['indicator']['indicator-name']);
			var inIndicatorHtml = paragraphMaker(inIndicator);
			$('#show-in-name').html(inIndicatorHtml);

			//lead
			var inLead = (dataIN['indicator']['lead']);
			var inLeadHtml = paragraphMaker(inLead);
			$('#show-in-lead').html(inLeadHtml);

			//contact
			var inContact = (dataIN['indicator']['contact']);
			var inContactHtml = paragraphMaker(inContact);
			$('#show-in-contact').html(inContactHtml);

			//logo
			var inLogo = (dataIN['indicator']['logo-link']);
			var inlogoHtml  = '<img src="images/vitalsigns/logos/' + inLogo + '.jpg" width="150" height="101" alt=""/>';
			$('#show-in-logo').html(inlogoHtml);

			//last updated
			var inLastUpdated = ('<p>' + dataIN['indicator']['last-updated'] + '</p>');
			$('#show-in-last-updated').html(inLastUpdated);

			//status icon
			var inStatusIcon = ('<p>' +dataIN['indicator']['status-icon']+ '</p>');
			$('#show-in-status-icon').html(inStatusIcon);

			//progress icon
			var inProgressIcon = ('<p>' +dataIN['indicator']['progress-icon']+ '</p>');
			$('#show-in-progress-icon').html(inProgressIcon);

			//progress icon tagline
			var inProgressIconTag = ('<p>' + dataIN['indicator']['progress-icon-tagline'] + '</p>');
			$('#show-in-progress-icon-tag').html(inProgressIconTag);

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
				var inDataCaption = '<p>'+(dataSet['caption'])+'</p>';
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

