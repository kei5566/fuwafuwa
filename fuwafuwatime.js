(function ( $ ) {
    $.fn.fuwafuwa = function(options) {

        var defaults = {
            time:10000
        };
        var setting = $.extend(defaults, options);

        $(this).css({display:'block',opacity:'0'}).animate({opacity:'1'},setting.time);
        return(this);
    };
}( jQuery ));