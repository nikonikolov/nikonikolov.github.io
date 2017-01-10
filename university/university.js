$(document).ready( function() {

	// Scroll to top at reload
	$(this).scrollTop(0);

	$('.gen_small_card').hover( 

		function(){
			mask= $(this).find(".mask");
			button = $(this).find('h5');

			$(mask).toggleClass('gen_small_card_mask_hover');
			$(this).toggleClass('gen_small_card_hover');
			$(button).toggleClass('gen_h5_hover');	
		},

		function(){
			$(mask).toggleClass('gen_small_card_mask_hover');
			$(this).toggleClass('gen_small_card_hover');
			$(button).toggleClass('gen_h5_hover');
	});


	$('.gen_small_card_').click( 

		function(){
			$(mask).toggleClass('gen_small_card_mask_hover');
			$(button).toggleClass('gen_h5_hover');
			$(button).toggleClass('gen_h5_click');
			
			setTimeout( function() {
				$(button).toggleClass('gen_h5_click');
       		 	$(button).toggleClass('gen_h5_hover');
				$(mask).toggleClass('gen_small_card_mask_hover');
   			 }, 150);		
	});

});