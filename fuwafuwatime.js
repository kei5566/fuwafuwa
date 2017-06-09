(function ( $ ) {
    $.fn.greenify = function() {
    	$(this).css({display:'block',opacity:'0'}).animate({opacity:'1'},1000);
        return this;
    };
}( jQuery ));