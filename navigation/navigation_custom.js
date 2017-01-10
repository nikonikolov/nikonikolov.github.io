$(document).ready( function () {	

	$("#subj_menu").hide();

	function itemHighlight(traverseClass, classOn) {
		page = window.location.pathname;
		
		$(traverseClass).each( function (){
			var href = $(this).attr('href');
			if( href == page){
				$(this).addClass(classOn);
			}
			else{
				$(this).removeClass(classOn);
			}
		});
	}

	itemHighlight('.links', 'links_on');
	itemHighlight('.subj_item', 'subj_item_on');

	$("#nav_bar").hover(
		function(){
			$("#nav_bar").toggleClass("nav_hover");
		},
		function(){
			$("#nav_bar").toggleClass("nav_hover");
	});

	$("#drop_down_container").hover(
		function(){
			$("#subj_menu").slideDown(200, function(){});
		},
		function(){
			setTimeout(function(){}, 1000);
			$("#subj_menu").slideUp(200, function(){});
	});	

});