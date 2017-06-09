(function ( $ ) {
    $.fn.fuwafuwa = function(options) {
        var defaults = {
            animation:1000,
            settime:0
        };
        var setting = $.extend(defaults, options);
        $(this).delay(setting.settime).css({display:'block',opacity:'0'}).animate({opacity:'1'},setting.animation);
        return(this);
    };
}( jQuery ));