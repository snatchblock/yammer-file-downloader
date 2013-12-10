$(document).ready(function(){
	/* 
	 * Hook up a click event to all the anchor elements in the nav menu 
	 */
	$('#navigation > li > a').on('click', _tabLoader);
	$('#std').load('view/dataCL/studentData.cfm');
	
});

/*
 * These shall extract the data-target and href
 * adds a random value to the href to prevent caching
 * loads a temporary 'loading content' into the tab content area
 * makes a ajax call to the page and shows the return data into the tab
 */
var _tabLoader = function(e){
	e.preventDefault();
	var contentID  = $(e.target).attr("data-target");
    var contentURL = $(e.target).attr("href");
		contentURL = contentURL + '?rand=' + Math.random();
    if (typeof(contentURL) != 'undefined') {
		$(contentID).html('<a href="#"><i class="icon-refresh icon-spin"></i> Loading Content...</a>');
		$(contentID).load(contentURL);
	}
	else {			
		$(contentID).tab('show');
	}
};
