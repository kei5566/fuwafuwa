(function ( $ ) {
    $.fn.fuwafuwa = function(options) {
        var defaults = {
            animation:1000,
            settime:1000
        };
        var setting = $.extend(defaults, options);
        $(this).delay(setting.settime).css({display:'block',opacity:'0'}).animate({opacity:'1'},setting.animation);
        return(this);
    };
}( jQuery ));

(function ( $ ) {
    $.fn.fuwafuwaout = function(options) {
        var defaults = {
            animation:1000,
            settimeout:1000
        };
        var timesetting = $.extend(defaults, options);
        $(this).delay(timesetting.settimeout).animate({opacity:'0'},timesetting.animation);
        return(this);

    };
}( jQuery ));