jQuery(document).ready(function () {

    var base = "/sites/all/modules/graceless_degradation/";

    jQuery('hr').replaceWith('<div><img width="600" height="1" src="' + base + 'img/colorbar.gif"></div>');

//    jQuery('<img src="' + base + 'img/mail/' + Math.floor(Math.random() * 7) + '.gif>').insertBefore('a[href^="mailto:"]');

    var imgdim = [
        [100,62], [60,38], [32,32], [100,67], [125,90], [50,66], [117,45]
    ];

    var animail = function (m) {
        var img = document.createElement('img');
        var n = Math.floor(Math.random() * imgdim.length);
        img.width = imgdim[n][0];
        img.height = imgdim[n][1];
        img.src = base + 'img/mail/' + n + '.gif';
        m.parentNode.insertBefore(img, m);
    };

    var mailto = document.getElementsByTagName('a');
    for (var i=0,m; m=mailto[i]; ++i) {
        if (m.href && m.href.match(/^mailto:/i)) {
            animail(m);
        }
    }

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
