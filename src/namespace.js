;(function($){
	
	// make the jQuery plugin grab what we define init to be later
	$.cytoscapeweb = function(){
		return $.cytoscapeweb.init.apply(this, arguments);
	};
	
	// define the function namespace here, since it has members in many places
	$.cytoscapeweb.fn = {};
	
})(jQuery);
