$(document).ready( function() {

	// Scroll to top at reload
	$(this).scrollTop(0);


	/* ********************************* Scroll to internal page at internal link click ****************************** */
	$('.gen_internal_link').click( function() {
		var content = $(this).html();
		
		$('h3').each( function (){
			var title = $(this).html();
			if( content == title){
				
				var page = $(this).parent(".gen_sub_block")
				$('html, body').animate({scrollTop: page.offset().top -120 }, 'slow');
			}
		});
	});

	$('.uni_internal_link').click( function() {
		var content = $(this).html();
		
		$('h3').each( function (){
			var title = $(this).html();
			if( content == title){
				
				var page = $(this).parent(".gen_sub_block")
				$('html, body').animate({scrollTop: page.offset().top -120 }, 'slow');
			}
		});
	});


	/* ********************************* Small Card Behavior ****************************** */
	$('.gen_small_card').hover( 
		function(){
			mask= $(this).find(".gen_small_card_mask");
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

	/* ********************************* Middle Card Behavior ****************************** */
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

	/* ********************************* Wide Card Behavior ****************************** */
	$(".gen_wide_card_hidden_content").hide();

	$('.gen_wide_card_displayed_content').hover( 
		function(){
			gen_wide_card_mask = $(this).find(".gen_wide_card_mask");
			button = $(this).find('h5');
			gen_wide_cardBackground =  $(this).parents(".gen_wide_card").siblings(".gen_wide_card_background");

			$(gen_wide_card_mask).toggleClass('gen_wide_card_mask_hover');
			$(this).toggleClass('gen_wide_card_displayed_content_hover');
			$(button).toggleClass('gen_h5_hover');
		},
		function(){
			$(gen_wide_card_mask).toggleClass('gen_wide_card_mask_hover');
			$(this).toggleClass('gen_wide_card_displayed_content_hover');
			$(button).toggleClass('gen_h5_hover');
	});


	$('.gen_wide_card_displayed_content').click( 
		function(){
			$(gen_wide_card_mask).toggleClass('gen_wide_card_mask_hover');
			$(button).toggleClass('gen_h5_hover');
			$(button).toggleClass('gen_h5_click');
			
			setTimeout( function() {
				$(button).toggleClass('gen_h5_click');
       		 	$(button).toggleClass('gen_h5_hover');
				$(gen_wide_card_mask).toggleClass('gen_wide_card_mask_hover');
   			 }, 150);		
		},
		function(){

			$(gen_wide_cardBackground).toggleClass('gen_wide_card_background_clicked');
			
			$(this).next(".gen_wide_card_hidden_content").slideToggle(200, function(){
				if( $(this).is(":visible")){
					$(button).text("READ LESS");
				}
				else{
					$(button).text("READ MORE");
					//$(gen_wide_card_background).toggleClass("gen_wide_card_background_clicked");
				}
			});
	
			var page = $(this).parents(".gen_wide_card_container")
			$('html, body').animate({scrollTop: page.offset().top -60}, 'slow');

	});	


});