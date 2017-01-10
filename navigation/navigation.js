$(document).ready( function () {	
	//$("#navigation").load("/navigation/navigation.html");	
	$("#navigation").load("/navigation/navigation.html", function() {
    	$.getScript("/navigation/navigation_custom.js");
	});	
});