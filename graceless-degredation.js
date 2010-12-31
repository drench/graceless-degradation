jQuery(document).ready(function () {

    var base = "/wp-content/plugins/graceless-degredation/";

    jQuery('hr').replaceWith('<div><img width="100%" src="' + base + 'img/colorbar.gif"></div>');

    jQuery('<img src="' + base + 'img/mail/' + Math.floor(Math.random() * 7) + '.gif>').insertBefore('a[href^="mailto:"]');

    var blinkify = function (el) {
        var o = el.innerHTML;
        el.innerHTML = '<blink>' + o + '</blink>';
    };

    var blinkers = ['b', 'i', 'strong', 'u'];

    for (var i=0,t; t=blinkers[i]; ++i) {
        var tgs = document.getElementsByTagName(t);
        for (var j=0,el; el=tgs[j]; ++j) blinkify(el);
    }

});
