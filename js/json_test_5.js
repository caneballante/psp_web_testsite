$(document).ready(function () {	
	
	//Initialize variables and arrays
	var dataJS;
	var dataIN;
	var ratingArray = [];

	//NAVIGATION
	$("#nav" + navSelected).addClass("active");
	$("#nav" + navSelected).addClass("subNavOn");
	if (subNavSelected != "non"){
		$("#subnav" + subNavSelected).addClass("active");
	};
	
	
	if (whatIN === 0){
		//VITAL SIGNS 
		//load headings
		$.getJSON('json/vs_headings.json', function (data1) {
			headingsVS = data1;
			vsHeadingsShow();
		});
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
			var vsKeyMessagesSafe = vsKeyMessages.replace(new RegExp('<', 'g'), 'DELETED');
			var vsKeyMessagesFmt = vsKeyMessagesSafe.replace(new RegExp('~B', 'g'), '</li><li>');
			var vsKeyMessagesHtml = '<ul><li>' + vsKeyMessagesFmt + '</li></ul>';
			$('#show-key-messages').html(vsKeyMessagesHtml);

			//rating
			//NEED TO DECIDE HOW TO DISPLAY THIS DATA
			$.each((dataVS['vitalSign']['progress_rating']), function(i, rating) {
				ratingArray.push(rating);
			});
			/*buildChart(ratingArray);*/

			//indicators
			$.each((dataVS['vitalSign']['indicators']), function(i, indicator) {
				var allIndicators = '<p>' + indicator + '</p>'
				$('#show-indicators').append(allIndicators);
			});

			//highlights
			var vsHighlights = (dataVS['vitalSign']['highlights']);
			var vsHighlightsSafe = vsHighlights.replace(new RegExp('<', 'g'), 'DELETED');
			var vsHighlightsFmt = vsHighlightsSafe.replace(new RegExp('~P', 'g'), '</p><p>');
			var vsHighlightsHtml = '<p>' + vsHighlightsFmt + '</p>';
			$('#show-highlight').html(vsHighlightsHtml);

			//highlight photos
			var vsHighlightPhoto = (dataVS['vitalSign']['highlight_photo']);
			$('#show-highlight-photo').html(vsHighlightPhoto);

			//links
			$.each((dataVS['vitalSign']['links']), function(i, linkSet) {
					var vsLinkURL = (linkSet['link-name']);
					var vsLinkName = (linkSet['link-url']);
				//	var vslinkShow  = '<a href=' + vsLinkURL + '>' + vsLinkName '</a>';
					var vslinkShow  = '<p><a href=">' + vsLinkURL + '">' + vsLinkName + '</a></p>';
					$('#show-links').append(vslinkShow);
				});
			//links
		/*	$.each((dataVS['vitalSign']['links']), function(i, link) {
				var allLinks = '<p>' + link + '</p>'
				$('#show-links').append(allLinks);
			});*/

		};

		function vsHeadingsShow () {
			var vsGoalHeading = $('<p>' + (headingsVS['vitalSign-headings']['goal-heading']) + '<p>');
			$('#show-goal-heading').html(vsGoalHeading);

			var vsNameHeading = $('<p>' + (headingsVS['vitalSign-headings']['name-heading']) + '<p>');
			$('#show-name-heading').html(vsNameHeading);

			var vsLeadHeading = $('<p>' + (headingsVS['vitalSign-headings']['lead-heading']) + '<p>');
			$('#show-lead-heading').html(vsLeadHeading);

			var vsContactHeading = $('<p>' + (headingsVS['vitalSign-headings']['contact-heading']) + '<p>');
			$('#show-contact-heading').html(vsContactHeading);

			var vsWhatHeading = $('<p>' + (headingsVS['vitalSign-headings']['what-heading']) + '<p>');
			$('#show-what-heading').html(vsWhatHeading);

			var vsKeyMessagesHeading = $('<p>' + (headingsVS['vitalSign-headings']['key-messages-heading']) + '<p>');
			$('#show-key-messages-heading').html(vsKeyMessagesHeading);

			var vsProgressRatingHeading = $('<p>' + (headingsVS['vitalSign-headings']['progress-rating-heading']) + '<p>');
			$('#show-rating-heading').html(vsProgressRatingHeading);

			var vsIndicatorsHeading = $('<p>' + (headingsVS['vitalSign-headings']['indicators-heading']) + '<p>');
			$('#show-indicators-heading').html(vsIndicatorsHeading);

			var vsHighlightsHeading = $('<p>' + (headingsVS['vitalSign-headings']['highlights-heading']) + '<p>');
			$('#show-highlights-heading').html(vsHighlightsHeading);

			var vsLinksHeading = $('<p>' + (headingsVS['vitalSign-headings']['links-heading']) + '<p>');
			$('#show-links-heading').html(vsLinksHeading);

			vsAddStyles ();
		};




		function vsAddStyles () {
			$('#show-goal-heading > p').addClass('.heading');
			$('#show-goal-heading > p').css("color", "#333");
		};
		
//--------------------------------INDICATOR------------------------------------------		
		
		
	};
	//INDICATOR
	if (whatVS === 0){
	
		$.getJSON("json/" + whatIN, function (data3) {
			dataIN = data3;
			inDataShow();
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
			var inGoalFmt = inGoal.replace(new RegExp('~P', 'g'), '</p><p>');
			var inGoalHtml = '<p>' + inGoalFmt + '</p>';
			$('#show-in-goal').html(inGoalHtml);

			//vital sign
			var inVitalSign = (dataIN['indicator']['vitalsign']);
			var inVitalFmt = inVitalSign.replace(new RegExp('~P', 'g'), '</p><p>');
			var inVitalHtml = '<p>' + inVitalFmt + '</p>';
			$('#show-in-vitalsign').html(inVitalHtml);

			//indicator
			var inIndicator = (dataIN['indicator']['indicator-name']);
			var inIndicatorFmt = inIndicator.replace(new RegExp('~P', 'g'), '</p><p>');
			var inIndicatorHtml = '<p>' + inIndicatorFmt + '</p>';
			$('#show-in-name').html(inIndicatorHtml);

			//lead
			var inLead = (dataIN['indicator']['lead']);
			var inLeadFmt = inLead.replace(new RegExp('~P', 'g'), '</p><p>');
			var inLeadHtml = '<p>' + inLeadFmt + '</p>';
			$('#show-in-lead').html(inLeadHtml);

			//contact
			var inContact = (dataIN['indicator']['contact']);
			var inContactFmt = inContact.replace(new RegExp('~P', 'g'), '</p><p>');
			var inContactHtml = '<p>' + inContactFmt + '</p>';
			$('#show-in-contact').html(inContactHtml);

			//logo
			var inLogo = (dataIN['indicator']['logo-link']);
			$('#show-in-logo').html(inLogo);
			
			//last updated
			var inLastUpdated = (dataIN['indicator']['last-updated']);
			$('#show-in-last-updated').html(inLastUpdated);

			
			//status icon
			var inStatusIcon = (dataIN['indicator']['status-icon']);
			$('#show-in-status-icon').html(inStatusIcon);

			//progress icon
			var inProgressIcon = (dataIN['indicator']['progress-icon']);
			$('#show-in-progress-icon').html(inProgressIcon);

			//progress icon tagline
			var inProgressIconTag = (dataIN['indicator']['progress-icon-tagline']);
			$('#show-in-progress-icon-tag').html(inProgressIconTag);

			//Progress Description
			var inProgressDesc = (dataIN['indicator']['progress-description']);
			var inProgressDescFmt = inProgressDesc.replace(new RegExp('~P', 'g'), '</p><p>');
			var inProgressDescHtml = '<p>' + inProgressDescFmt + '</p>';
			$('#show-in-progress-desc').html(inProgressDescHtml);
			//this will need to be worked into the code - additional checks to start and end the bullet
			//var vsKeyMessagesFmt = vsKeyMessagesSafe.replace(new RegExp('~B', 'g'), '</li><li>');
			//var vsKeyMessagesHtml = '<ul><li>' + vsKeyMessagesFmt + '</li></ul>';
			
			//what
			var inWhat = (dataIN['indicator']['what']);
			var inWhatFmt = inWhat.replace(new RegExp('~P', 'g'), '</p><p>');
			var inWhatHtml = '<p>' + inWhatFmt + '</p>';
			$('#show-in-what').html(inWhatHtml);

			
			//data 
			//need loop code
			
			//more description
			var inMoreDescription = (dataIN['indicator']['more-description']);
			var inMoreDescriptionFmt = inMoreDescription.replace(new RegExp('~P', 'g'), '</p><p>');
			var inMoreDescriptionHtml = '<p>' + inMoreDescriptionFmt + '</p>';
			$('#show-in-more-description').html(inMoreDescriptionHtml);
			
			//why happening
			var inWhyHappen = (dataIN['indicator']['why-happening']);
			var inWhyHappenFmt = inWhyHappen.replace(new RegExp('~P', 'g'), '</p><p>');
			var inWhyHappenHtml = '<p>' + inWhyHappenFmt + '</p>';
			$('#show-in-why-happen').html(inWhyHappenHtml);

			
			//references
			var inReferences = (dataIN['indicator']['references']);
			var inReferencesFmt = inReferences.replace(new RegExp('~P', 'g'), '</p><p>');
			var inReferencesHtml = '<p>' + inReferencesFmt + '</p>';
			$('#show-in-references').html(inReferencesHtml);
			
			//target
			var inTarget = (dataIN['indicator']['target']);
			var inTargetFmt = inTarget.replace(new RegExp('~P', 'g'), '</p><p>');
			var inTargetHtml = '<p>' + inTargetFmt + '</p>';
			$('#show-in-target').html(inTargetHtml);

			//interim target
			var inInterimTarget = (dataIN['indicator']['interim-target']);
			var inInterimTargetFmt = inInterimTarget.replace(new RegExp('~P', 'g'), '</p><p>');
			var inInterimTargetHtml = '<p>' + inInterimTargetFmt + '</p>';
			$('#show-in-interim-target').html(inInterimTargetHtml);
			
			//interim target table title
			var inInterimTargetTableTitle = (dataIN['indicator']['interim-target-title']);
			var inInterimTargetTableTitleFmt = inInterimTargetTableTitle.replace(new RegExp('~P', 'g'), '</p><p>');
			var inInterimTargetTableTitleHtml = '<p>' + inInterimTargetTableTitleFmt + '</p>';
			$('#show-in-interim-target-table-title').html(inInterimTargetTableTitleHtml);

			//interim target table
			var inInterimTargetTable = (dataIN['indicator']['interim-target-table']);
			//this is a graphic link
			//$('#show-in-data').html(inDataHtml);

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
					var inLinkURL = (linkSet['link-name']);
					var inLinkName = (linkSet['link-url']);
				//	var vslinkShow  = '<a href=' + vsLinkURL + '>' + vsLinkName '</a>';
					var inlinkShow  = '<p><a href=">' + inLinkURL + '">' + inLinkName + '</a></p>';
					$('#show-links').append(inlinkShow);
				});
		};
	};
});

