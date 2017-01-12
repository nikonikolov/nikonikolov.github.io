$(document).ready( function () {	
	//$("#navigation").load("/navbar/navbar.html");	
	$("#navigation").load("/navbar/navbar.html", function() {
    	$.getScript("/navbar/navbarscript.js");
	});	
});