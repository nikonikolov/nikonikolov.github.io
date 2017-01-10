$(document).ready( function () {	
	//$("#navigation").load("/navigation/navigation.html");	
	$("#footer_here").load("/footer/footer.html", function() {
    	$.getScript("/footer/footer_custom.js");
	});	
});