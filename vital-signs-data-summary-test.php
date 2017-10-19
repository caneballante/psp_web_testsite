<!DOCTYPE html>
<html lang="en"><!-- InstanceBegin template="/Templates/page-4-template.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- InstanceBeginEditable name="doctitle" -->
<title>Vital Sign Data Summary</title>
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
	<script> navSelected = 3;  subNavSelected = "non";
	</script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	
	
	<script> //setting the unused variable to 0 to flag the if statement to run either the VS or IN code.
		var whatIN = "none"; 
		var whatVS = "none";
		var whatPage = "data-summary"
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
			<h1>Data Summary</h1>
			<!-- InstanceEndEditable --></div>
		<div class="col-sm-2 padding-20-top"></div>
	</div>
	
	<div class="row"> 
		<div class="col-sm-3">
			<div class="nav-leftside-custom">
				<ul class="nav nav-stacked nav-pills nav-leftside-custom padding-left-0 margin-10-top">
					<!-- InstanceBeginEditable name="left_nav" -->
					<?php include 'includes/ln-vital.html';?>
					<!-- InstanceEndEditable -->
				</ul>
			</div>
			<div><img src="images/vitalsigns/logos/PSEMP.jpg" width="125" height="147" alt=""/></div>
		</div>
		 
		<div class="col-sm-9 padding-20-top padding-0-left content-column mobile-padding-20-left"><!-- InstanceBeginEditable name="EditRegion12" --><h2 class="margin-0-top">Vital Signs Data Summary</h2><div id="show-indicators"></div><script src="js/vital.js"></script><script src="js/datasummary1.js"></script>
		<table class='table' id="summaryTable"><tr><td>INDICATOR</td><td colspan='2'>STATUS<strong></strong></td><td colspan='2'>PROGRESS</td></tr>
		
			<tr id="0"></tr>
			<tr id="1"></tr>
			<tr id="2"></tr>
			<tr id="3"></tr>
			<tr id="4"></tr>
			<tr id="5"></tr>
			<tr id="6"></tr>
			<tr id="7"></tr>
			<tr id="8"></tr>
			<tr id="9"></tr>
			<tr id="10"></tr>
			<tr id="11"></tr>
			<tr id="12"></tr>
			<tr id="13"></tr>
			<tr id="14"></tr>
			<tr id="15"></tr>
			<tr id="16"></tr>
			<tr id="17"></tr>
			<tr id="18"></tr>
			<tr id="19"></tr>
			<tr id="20"></tr>
			<tr id="21"></tr>
			<tr id="22"></tr>
			<tr id="23"></tr>
			<tr id="24"></tr>
			<tr id="25"></tr>
			<tr id="26"></tr>
			<tr id="27"></tr>
			<tr id="28"></tr>
			<tr id="29"></tr>
			<tr id="30"></tr>
			<tr id="31"></tr>
			<tr id="32"></tr>
			<tr id="33"></tr>
			<tr id="34"></tr>
			<tr id="35"></tr>
			<tr id="36"></tr>
			<tr id="37"></tr>
			<tr id="38"></tr>
			<tr id="39"></tr>
			<tr id="40"></tr>
			<tr id="41"></tr>
			<tr id="42"></tr>
			<tr id="43"></tr>
			<tr id="44"></tr>
			<tr id="45"></tr>
			<tr id="46"></tr>
			<tr id="47"></tr>
			<tr id="48"></tr>
			<tr id="49"></tr>
			
		</table>
		
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
