$(document).ready( function() {
	/*$('#about_btn').mouseenter(function() {
		$(this).toggleClass('links');
	

	});
*/
	// Scroll to top at reload
	$(this).scrollTop(0);


	// Scroll to ABOUT page
	$('#about_btn').click( function() {
		$('html, body').animate({
        	scrollTop: $("#about_page").offset().top
  		}, 0);

	});


	// Scroll to RESOURCES page
	$('#res_btn').click( function() {
		$('html, body').animate({
        	scrollTop: $("#res_page").offset().top
  		}, 0);

	});

	// Scroll to COURSES page
	$('#courses_btn').click( function() {
		$('html, body').animate({
        	scrollTop: $("#courses_page").offset().top
  		}, 0);

	});


	// Scroll to COMPETITIONS page
	$('#competitions_btn').click( function() {
		$('html, body').animate({
        	scrollTop: $("#competitions_page").offset().top
  		}, 0);

	});

});