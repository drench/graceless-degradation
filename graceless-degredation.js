jQuery(document).ready(function () {

    var base = "/wp-content/plugins/graceless-degredation/";

    jQuery('hr').replaceWith('<div><img width="100%" src="' + base + 'img/colorbar.gif"></div>');

//    jQuery('<img src="' + base + 'img/mail/' + Math.floor(Math.random() * 7) + '.gif>').insertBefore('a[href^="mailto:"]');

    var blinkers = ['b', 'i', 'strong', 'u'];
    var blinks = [];

    for (var i=0,t; t=blinkers[i]; ++i) {
        var bs = document.getElementsByTagName(t);
        for (var j=0,b; b=bs[j]; ++j) {
            blinks.push(b);
        }
    }

    window.setInterval(function () {
        for (var i=0,b; b=blinks[i]; ++i) {
            b.style.visibility =
                (b.style.visibility == 'hidden') ? '' : 'hidden';
        }
    }, 1000);

});
