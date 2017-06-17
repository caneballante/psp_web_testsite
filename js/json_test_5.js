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
			$.each((dataVS['vitalSign']['links']), function(i, link) {
				var allLinks = '<p>' + link + '</p>'
				$('#show-links').append(allLinks);
			});

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
		/*
		function buildChart (ratingArray){
				var ctx = document.getElementById("myChart").getContext('2d');
				var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ["Making Progress", "Making Some Progress", "Not Changing", "Getting Somewhat Worse", "Getting Worse"],
					datasets: [{
						label: 'Percentage',
						data: ratingArray,
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)'

						],
						borderColor: [
							'rgba(255,99,132,1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)'
						],
						borderWidth: 1
					}]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero:true
							}
						}]
					}
				}
			});
		};*/

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

			//what
			var inWhat = (dataIN['indicator']['what']);
			var inWhatFmt = inWhat.replace(new RegExp('~P', 'g'), '</p><p>');
			var inWhatHtml = '<p>' + inWhatFmt + '</p>';
			$('#show-in-what').html(inWhatHtml);

			//indicator-progress
			var inProgress = (dataIN['indicator']['indicator-progress']);
			var inProgressFmt = inProgress.replace(new RegExp('~P', 'g'), '</p><p>');
			var inProgressHtml = '<p>' + inProgressFmt + '</p>';
			$('#show-in-progress').html(inProgressHtml);

			//description
			var inDescription = (dataIN['indicator']['description']);
			var inDescriptionFmt = inDescription.replace(new RegExp('~P', 'g'), '</p><p>');
			var inDescriptionHtml = '<p>' + inDescriptionFmt + '</p>';
			$('#show-in-description').html(inDescriptionHtml);

			//interim target
			var inInterimTarget = (dataIN['indicator']['interim-target']);
			var inInterimTargetFmt = inInterimTarget.replace(new RegExp('~P', 'g'), '</p><p>');
			var inInterimTargetHtml = '<p>' + inInterimTargetFmt + '</p>';
			$('#show-in-interim-target').html(inInterimTargetHtml);

			//data
			var inData = (dataIN['indicator']['data']);
			var inDataFmt = inData.replace(new RegExp('~P', 'g'), '</p><p>');
			var inDataHtml = '<p>' + inDataFmt + '</p>';
			$('#show-in-data').html(inDataHtml);

			//target
			var inTarget = (dataIN['indicator']['target']);
			var inTargetFmt = inTarget.replace(new RegExp('~P', 'g'), '</p><p>');
			var inTargetHtml = '<p>' + inTargetFmt + '</p>';
			$('#show-in-target').html(inTargetHtml);

			//map
			var inMap = (dataIN['indicator']['map-link']);
			var inMapFmt = inMap.replace(new RegExp('~P', 'g'), '</p><p>');
			var inMapHtml = '<p>' + inMapFmt + '</p>';
			$('#show-in-map').html(inMapHtml);
		};
	};
});

