$(document).ready( function() {

	// Scroll to top at reload
	$(this).scrollTop(0);

	$('.gen_middle_card').hover( 

		function(){
			mask= $(this).find(".gen_middle_card_mask");
			button = $(this).find('h5');

			$(mask).toggleClass('gen_middle_card_mask_hover');
			$(this).toggleClass('gen_middle_card_hover');
			$(button).toggleClass('gen_h5_hover');
		},

		function(){
			$(mask).toggleClass('gen_middle_card_mask_hover');
			$(this).toggleClass('gen_middle_card_hover');
			$(button).toggleClass('gen_h5_hover');
	});
	
	$('.gen_middle_card').click( 

		function(){
			$(mask).toggleClass('gen_middle_card_mask_hover');
			$(button).toggleClass('gen_h5_hover');
			$(button).toggleClass('gen_h5_click');
			
			setTimeout( function() {
				$(button).toggleClass('gen_h5_click');
       		 	$(button).toggleClass('gen_h5_hover');
				$(mask).toggleClass('gen_middle_card_mask_hover');
   			 }, 150);		
	});

});