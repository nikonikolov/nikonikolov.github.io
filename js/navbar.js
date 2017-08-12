$(document).ready( function () {	

	function itemHighlight(traverseClass, classOn) {
		page = window.location.pathname;
		
		$(traverseClass).each( function (){
			var href = $(this).children('a').attr('href');
			if( href == page){
				$(this).addClass(classOn);
			}
			else{
				$(this).removeClass(classOn);
			}
		});
	}

	itemHighlight('.links', 'active');
});