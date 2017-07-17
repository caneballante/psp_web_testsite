$(document).ready(function () {	
	
	//Initialize variables and arrays
	var dataJS;
	var dataIN;
	var ratingArray = [];
	var imgHeight;
	var imgWidth;
	
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
	/*window.vitalSigns = {}
	//stuff I messed around with felix
	function imageLoader (imagify){
		window.vitalSigns.hash = {
			'foo': 'bar'
		}
		
		var img = new Image();
		console.log('1');
		img.onload = function() {
			console.log('2');
  			imgWidth = this.width;
			imgHeight = this.height;
			console.log(hash['foo']);
			
			//var poop = (setImgWidthHeight (imgWidth, imgHeight, imagify));
			//console.log (poop)
		};
		hash['foo'] = 'baz';
		console.log('3');

		img.src = "images/vitalsigns/" + imagify;	
		//var inDataFigure = '<img src="images/vitalsigns/' + (dataSet['figure-link']) + '" width="715" height="491" alt=""/>';
	};
	*/
	
	function setImgWidthHeight (imgWidth, imgHeight, imagify){
		return ("poopy");
		//console.log("setImgWidthHeight function variables = " + imgWidth + " " + imgHeight + " " + imagify)
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
		// heading function removed - i added all the headings into the content include.
		/*function vsHeadingsShow () {
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
		};*/
		
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
				var inDataSubhead = '<p>'+(dataSet['subhead'])+'</p>';
				var inDataFigure = '<img src="images/vitalsigns/' + (dataSet['figure-link']) + '" width="715" height="491" alt=""/>';
				var inDataCaption = '<p>'+(dataSet['caption'])+'</p>';
				var inDataSource = '<p>'+(dataSet['source'])+'</p>';
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
					var inLinkURL = (linkSet['link-url']);
					var inLinkName = (linkSet['link-name']);
				//	var vslinkShow  = '<a href=' + vsLinkURL + '>' + vsLinkName '</a>';
					var inlinkShow  = '<p><a href="' + inLinkURL + '">' + inLinkName + '</a></p>';
					$('#show-in-links').append(inlinkShow);
				});
		};
	};
});

