<!DOCTYPE html>
<html lang="en"><!-- InstanceBegin template="/Templates/page-4-template.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- InstanceBeginEditable name="doctitle" -->
<title>Vital Sign</title>
<!-- InstanceEndEditable -->
<!-- Bootstrap -->
<link href="http://www.psp.wa.gov/css/bootstrap.css" rel="stylesheet">
<link href="http://www.psp.wa.gov/css/custom.css" rel="stylesheet" type="text/css">
<!-- loads the wf-loading class right away to minimize FOUT -->
<script>document.documentElement.className += ' wf-loading';</script>
<!-- Font PRENTON TYPEKIT -->
<script src="https://use.typekit.net/srt5jze.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
<!-- InstanceBeginEditable name="head" -->
	<script> navSelected = 1;  subNavSelected = "non";
	</script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.bundle.js"></script>
	
	<script> //setting the unused variable to 0 to flag the if statement to run either the VS or IN code.
		var whatIN = "non"; 
		var whatVS = "non";
	</script>
	<link href="css/style.css" rel="stylesheet" type="text/css">

<!-- InstanceEndEditable -->
<!-- InstanceParam name="OptionalRegion1" type="boolean" value="false" -->
<!-- InstanceParam name="OptionalRegion2" type="boolean" value="false" -->
<!-- InstanceParam name="OptionalRegion3" type="boolean" value="false" -->
<!-- InstanceParam name="OptionalRegion4" type="boolean" value="true" -->
<!-- InstanceParam name="OptionalRegion5" type="boolean" value="true" -->
<!-- InstanceParam name="OptionalRegion6" type="boolean" value="false" -->
<!-- InstanceParam name="OptionalRegion7" type="boolean" value="false" -->
<!-- InstanceParam name="OptionalRegion8" type="boolean" value="false" -->
<!-- InstanceParam name="OptionalRegion9" type="boolean" value="false" -->
<!-- InstanceParam name="OptionalRegion10" type="boolean" value="true" -->
</head>
<body>
<?php include '../includes/modal-inc.html';?>
<!-- START IMAGE HEADER --> 
 
<div class="container-fluid  page-content padding-50-bottom">
	<div class="row">
		<div class="col-sm-10 padding-20-top padding-0-left"> <!-- InstanceBeginEditable name="9col_header" -->
			<h1>Vital Signs home page</h1>
			<!-- InstanceEndEditable --></div>
		<div class="col-sm-2 padding-20-top"></div>
	</div>
	
	<div class="row"> 
		<div class="col-sm-3">
			<div class="nav-leftside-custom">
				<ul class="nav nav-stacked nav-pills nav-leftside-custom padding-left-0 margin-10-top">
					<!-- InstanceBeginEditable name="left_nav" -->
					<?php include 'includes/ln-vital.html';?>
					<script src="js/vital.js"></script>
					<!-- InstanceEndEditable -->
				</ul>
			</div>
			<div><br>
<br>
				<div class="no-icon"><a href="http://www.psp.wa.gov/evaluating-PSEMP.php"><img class="img-responsive" src="images/vitalsigns/logos/PSEMP.png" alt="" width="260" height="86" title="PSEMP logo"/></a><br><br></div>
</div>
		</div>
		 
		<div class="col-sm-9 padding-20-top padding-0-left content-column mobile-padding-20-left"><!-- InstanceBeginEditable name="EditRegion12" -->
			<div><img src="images/vitalsigns/vital-sign-wheel.png" alt="" width="731" height="730" usemap="#Map" class="img-responsive"/>
				<map name="Map">
					<area shape="poly" coords="281,48,302,120,330,113,362,108,363,24,277,33,280,49" href="toxics_in_fish.php">
					<area shape="poly" coords="337,75" href="#">
					<area shape="poly" coords="443,34,422,122,367,112,368,25,444,34" href="air_quality.php">
					<area shape="poly" coords="525,64,485,140,429,117,448,37,522,65" href="drinking_water.php">
					<area shape="poly" coords="596,116,532,177,485,142,527,70,597,118" href="local_foods.php">
					<area shape="poly" coords="531,125" href="#">
					<area shape="poly" coords="571,224,536,179,600,120,648,179,571,224" href="onsite_sewage.php">
					<area shape="poly" coords="682,257,602,282,572,225,650,184" href="#">
					<area shape="poly" coords="680,258" href="outdoor_activities.php">
					<area shape="poly" coords="614,340,690,334,680,260,603,287" href="shellfish_beds_reopened.php">
					<area shape="poly" coords="684,414,687,337,614,342,611,408" href="cultural_practices.php">
					<area shape="poly" coords="665,498,688,419,608,410,588,470" href="economic_vitality.php">
					<area shape="poly" coords="556,514,586,470,660,501,618,565,558,514" href="good_governance.php">
					<area shape="poly" coords="511,559,563,635,630,577,555,516,513,560" href="sense_of_place.php">
					<area shape="poly" coords="459,592,511,562,563,638,491,673,455,591" href="sound_stewardship.php">
					<area shape="poly" coords="399,606,454,591,488,675,409,691,399,590" href="birds.php">
					<area shape="poly" coords="338,593,393,592,409,695,323,696,334,595" href="salmon.php">
					<area shape="poly" coords="281,580,330,592,317,687,245,672,280,579" href="orcas.php">
					<area shape="poly" coords="170,627,223,554,284,578,244,669,170,629" href="pacific_herring.php">
					<area shape="poly" coords="109,575,180,510,231,551,165,629,110,576" href="eelgrass.php">
					<area shape="poly" coords="147,464,65,504,105,576,179,511,149,463" href="estuaries.php">
					<area shape="poly" coords="34,425,56,510,149,461,127,409,35,422" href="flood_plains.php">
					<area shape="poly" coords="25,344,32,419,124,405,120,351,28,342" href="land_cover_and_development.php">
					<area shape="poly" coords="44,258,26,335,122,352,133,282,47,258" href="shoreline_armoring.php">
					<area shape="poly" coords="80,185,45,253,138,286,162,234,80,186" href="summer_stream_flows.php">
					<area shape="poly" coords="130,117,199,186,165,231,85,185,128,121" href="fresh_water_quality.php">
					<area shape="poly" coords="202,65,250,152,199,184,135,115,200,69" href="marine_sediment_quality.php">
					<area shape="poly" coords="300,129,272,37,205,65,251,152" href="marine_water_quality.php">
				</map>
			</div>
			
			<h2>WHAT ARE THE VITAL SIGNS AND HOW ARE THEY USED?</h2>
<p>To track progress toward recovery goals for Puget Sound, the Partnership chose a specific set of measures called the Puget Sound Vital Signs. The Vital Signs gauge the health of Puget Sound in a way that is scientifically valid and also resonates with the public. Tracking and reporting of Vital Signs is the foundation of the shared measurement system the Partnership relies on to show collective impact.</p>
<p>While the Vital Signs represent the different overarching measures for determining the health of Puget Sound, indicators representing each Vital Sign serve as the specific and measurable metrics. Each Vital Sign is represented by one or more indicators. To assess progress toward recovery goals more precisely, the Partnership adopted specific and quantitative milestones, known as 2020 ecosystem recovery targets. These targets are policy statements, sometimes considered aspirational, that reflect the region’s commitments to and expectations for recovering Puget Sound by the year 2020.</p>

<p>The data and information for the Puget Sound Vital Signs are compiled from a variety of monitoring programs and funding organizations in Puget Sound, including state and federal agencies, tribes, local jurisdictions, and non-governmental organizations. Technical and scientific experts from these organizations provide the data and oversee the interpretation of the results. </p>
<p>The Vital Signs and their indicators do not capture the full spectrum of conditions and changes in Puget Sound. They are useful as longer-term measures of environmental health, with a recognition that their status responds to the collective impacts of the Action Agenda, as well as to the human footprint not accounted for in the Action Agenda, and to forces and natural drivers outside of human control.</p>


<h2>WHAT ARE THE RECOVERY GOALS?</h2>
<p>The Puget Sound Partnership brings partners together to mobilize efforts and prioritize actions for a resilient Puget Sound, as determined by six important recovery goals identified by the Washington State Legislature and included in state law (RCW 90.71).
The goals are depicted in the outer ring of the image of the Puget Sound Vital Signs above.</p>

<p>Meeting these goals takes the coordinated effort of hundreds of partners representing local, state, federal, and tribal governments, as well as science, nonprofit, business, and other members of our communities.</p>

<h2>WHAT PROGRESS ARE WE MAKING?</h2>
<p>In many ways, the Puget Sound region is leading the country in ecosystem recovery, especially in incorporating human wellbeing explicitly into the science and implementation of recovery actions. </p>
<p>However, most of the Vital Sign indicators are, at best, only slowly changing. There is little evidence that the indicators are on a trajectory to reach the 2020 targets. Nonetheless, there has been some progress in some indicators and at more local scales.</p>
<p>Indicators that are making progress, perhaps as expected, are measures of a human action, compared to the measures of the biological, physical, or chemical conditions of Puget Sound. Some of the indicators making progress are also measures that are less under human control and are typically affected by multiple pressures and natural drivers outside of human control, such as water quality indicators, water quantity, and habitat.</p>
<p>As we look beyond 2020, the region can expect to have a stronger scientific foundation for recovery and a rich set of information to chart the course for the next phase of restoring the Sound and building the ecosystem resilience to adapt to climate change.</p><br>
<p>ADDITIONAL INFORMATION</p>

<p><a href="https://app.smartsheet.com/b/publish?EQBCT=621bfb83394144d980b8e78cbbca8cc8">List of Vital Signs, indicators and targets, with their description, scope and status</a></p>


<p><a href="https://pspwa.box.com/s/mh73y4xia6odf1y4a0esid4ecrpiutlg">Executive Director’s statement on the scope of Vital Signs for Near Term Actions</a></p>


<p><a href="https://pspwa.box.com/s/mym18v0rm56dspst6zxez818cucu4ijm">Target resolutions</a></p>


<p><a href="http://www.psp.wa.gov/sos.php">Latest State of the Sound report</a></p>


<p><a href="https://pspwa.box.com/s/ev6jlpvwsztrh7icp1jev9v5mg4tmiov">List of ecosystem recovery targets</a></p>


<p><a href="http://www.psp.wa.gov/action-agenda-what.php">Action Agenda</a></p>


<p><a href="http://www.psp.wa.gov/gis/ReportCard/">Puget Sound Action Agenda Report Card</a></p>


<p><a href="http://www.psp.wa.gov/gis/RecoveryAtlas/">Puget Sound Recovery Atlas</a></p>


<p><a href="http://www.psp.wa.gov/evaluating-effective-action.php">Effectiveness Monitoring</a></p>
		
		<!-- InstanceEndEditable --></div>
		
		</div>
	<!--END OF ROW --> 
</div>
<!--END OF CONTENT CONTAINER -->

<?php include 'includes/footer-inc.html';?>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
<script src="js/jquery-1.11.2.min.js"></script> 

<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/bootstrap.js"></script> 
<!-- custom js --> 
<script src="js/custom.js"></script> 
<!-- Google Tracking  --> 
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-69373425-1', 'auto');
  ga('send', 'pageview');

</script>
</body>
<!-- InstanceEnd --></html>
