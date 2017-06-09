(function ( $ ) {
    $.fn.greenify = function(options) {
    	var defaults = {
    		display: "block",
            opacity: "0"
        };
    	var settings = $.extend({
            display: "block",
            opacity: "0"
        }, options );
    	return this.css({
            display: settings.display,
            opacity: settings.opacity
        });
    	return this.each(function() {
        	this.css({display:'block',opacity:'0'}).animate({opacity:'1'},1000);
        });
    };
}( jQuery ));