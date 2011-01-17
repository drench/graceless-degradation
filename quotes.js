jQuery(document).ready(function () {

    var quotes = [
       {
          u: "https://twitter.com/RebeccaMcGrane/status/22447810674688000",
          q: "You've got the see it to believe it"
       },
       {
          u: "https://twitter.com/klafbang/status/22565987324796928",
          q: "This is dumb. Totally installing it."
       },
       {
          u: "https://twitter.com/oycomics/status/22584991036739585",
          q: "Mean, but funny!"
       },
       {
          u: "https://twitter.com/andymayn/status/22551315037032450",
          q: "Awesome!"
       },
       {
          u: "http://wordpress.org/support/topic/plugin-graceless-degradation-awesome",
          q: "Hahaha! I love this plugin (seriously).",
          c: true
       },
       {
          u: "https://twitter.com/mmbc/status/22706420713529344",
          q: "best. ever."
       },
       {
          u: "https://twitter.com/jeffmacarthur/status/22709540294234112",
          q: "so awesome"
       },
       {
          u: "http://twitter.com/digdachica/status/22516691112042496",
          q: "win!"
       },
       {
          u: "https://twitter.com/nickwebguy/status/23027682727960577",
          q: "Installing this, like, yesterday."
       },
       {
          u: "https://twitter.com/keukentafel/status/23387049578987521",
          q: "Zou standaard in wordpress meten zitten"
       },
       {
          u: "https://twitter.com/Arkholt/status/23388037354360832",
          q: "Possibly the funniest WordPress plugin I've seen in a while"
       },
       {
          u: "https://twitter.com/andrea_r/status/23389678103175168",
          q: "possibly the best IE6 plugin for WordPress ever made"
       },
       {
          u: "https://twitter.com/themelab/status/23390247530274816",
          q: "This is hilarious"
       },
       {
          u: "https://twitter.com/zoonini/status/23390371648118785",
          q: "Hilarious"
       },
       {
          u: "https://twitter.com/soulvisual/status/23390893679575041",
          q: "YES! I love it!"
       },
       {
          u: "https://twitter.com/saltcod/status/23391152115810304",
          q: "Best WP plugin yet. DO IT."
       },
       {
          u: "https://twitter.com/ryancduff/status/23391180737744896",
          q: "I'm installing this ASAP!"
       },
       {
          u: "https://twitter.com/FurciferRising/status/23391314733174784",
          q: "lmfao i love it!"
       },
       {
          u: "https://twitter.com/ovidiusoft/status/23391429048926209",
          q: "Cel mai tare plugin de WordPress ever"
       },
       {
          u: "https://twitter.com/JeffJRothe/status/23393292238454784",
          q: "They forgot the cartreuse H1s"
       },
       {
          u: "https://twitter.com/danhgilmore/status/23394488219082752",
          q: "This is coded out of pure AWESOME"
       },
       {
          u: "https://twitter.com/cafenoirdesign/status/23404659943145472",
          q: "Brilliant!"
       },
       {
          u: "https://twitter.com/Sullivan6c/status/23409225044594689",
          q: "You might find this amusing!"
       },
       {
          u: "https://twitter.com/kimparsell/status/23413274175348737",
          q: "Love it!"
       },
       {
          u: "https://twitter.com/williampd/status/23425253875126273",
          q: "HAHAHAHA!"
       },
       {
          u: "https://twitter.com/EmilJansson/status/23427652547256321",
          q: "hel underbart wordpress tillaegg"
       },
       {
          u: "https://twitter.com/iannnnn/status/23400314296082433",
          q: "Web descent plugin that anyone itching to use IE6, it will change our web design to waste Most fonts used."
       },
       {
          u: "http://weblogtoolscollection.com/archives/2011/01/07/wordpress-plugin-releases-for-17/",
          q: "if you're stuck on an outdated version of IE you're suffering enough already without elitist developers piling on the misery",
          c: true
       },
       {
          u: "http://twitter.com/TiborP/statuses/23460496254435329",
          q: "Nice"
       },
       {
          u: "http://www.sadlyno.com/archives/34331.html",
          q: "I think this would be a good plugin for this blog"
       },
       {
          u: "http://www.sadlyno.com/archives/34331.html#comment-1157964",
          q: "Heheheheh. It is evil. I love it.",
          c: true
       },
       {
          u: "http://www.sadlyno.com/archives/34331.html#comment-1157970",
          q: "That plugin should be a W3C requirement.",
          c: true
       },
       {
          u: "http://twitter.com/haselnut/status/23491629927108608",
          q: "Je viens de decouvrir un plugin ma-la-de pour Wordpress!"
       },
       {
          u: "http://twitter.com/kremalicious/statuses/23504032505008128",
          q: "That's cruel"
       },
       {
          u: "http://twitter.com/MichaelLink/statuses/23510820499488769",
          q: "WordPress plugin of the day"
       },
       {
          u: "http://twitter.com/morrissey/status/23511539201871873",
          q: "Graceful Browser Degradation, plugin para WP que muestra a visitantes con Explorer 6 el sitio en Comic Sans"
       },
       {
          u: "http://www.sadlyno.com/archives/34331.html#comment-1158027",
          q: "our web guys are enjoying that plugin ... especially since they have to design our sites to be IE6 compatible thanks to the special, seven-figure software we have that can only be viewed in IE6.",
          c: true
       },
       {
          u: "https://twitter.com/maetl/status/23573775043788800",
          q: "I would probably be fired for using this code, but it's f***ing awesome!"
       },
       {
          u: "https://twitter.com/carlosguadian/status/23762814183149569",
          q: "Dile a los usuarios de ie6 que ya estan utilizando un navegador viejo, viejo"
       },
       {
          u: "https://twitter.com/dheerajchand/status/23772240319356929",
          q: "We need to port this to Drupal, Plone, Django and every other web framework ever!"
       },
       {
          u: "https://twitter.com/GuySie/status/23773318620381184",
          q: "Hilarisch"
       },
       {
          u: "https://twitter.com/dorisbartels/status/23774244529766400",
          q: "Haha lachen!"
       },
       {
          u: "https://twitter.com/budesigns/status/23774281049571328",
          q: "AWESOME."
       },
       {
          u: "https://twitter.com/azzcatdesign/status/23774774916284416",
          q: "Funniest thing ever!"
       },
       {
          u: "https://twitter.com/billrobbins/status/23776151138738177",
          q: "A great way to annoy your IE 6 visitors"
       },
       {
          u: "https://twitter.com/ChrisCree/status/23777234359681024",
          q: "Very Funny"
       },
       {
          u: "https://twitter.com/robinvdvleuten/status/23778730304339968",
          q: "Dit is waarschijnlijk de meest ultieme must-have plugin voor iedere website"
       },
       {
          u: "https://twitter.com/SamuelHulick/status/23783895665213441",
          q: "This is super hilario"
       },
       {
          u: "https://twitter.com/markjaquith/status/23771428063019008",
          q: "Laughing so hard..."
       },
       {
          u: "http://twitter.com/cfordrun/statuses/23821088538492928",
          q: "Snerk."
       },
       {
          u: "https://twitter.com/jdfrankl/status/23962639252070402",
          q: "The best Wordpress plugin ever"
       },
       {
          u: "http://labnotes.org/2011/01/08/rounded-corners-266-%e2%80%94-graceless-degradation/",
          q: "So excellent"
       },
       {
          u: "https://twitter.com/YoGeek/status/24123347054891008",
          q: "Hilarious. Those silly WP developers."
       },
       {
          u: "http://equalwebcreative.com/2011/wordpress-uglification-for-ie6/",
          q: "Had me chuckling for a while!"
       },
/*
       {
          u: "http://www.delicious.com/jalderman",
          q: "turns tackyness of the page up to eleven"
       },
*/
       {
          u: "https://twitter.com/allytibbitt/status/24203864018264064",
          q: "Is there a Graceless Degradation prevention plug-in for 'Meat space' users? If there is I could do with it."
       },
       {
          u: "https://twitter.com/ctrlrx/status/24203064697167872",
          q: "At last"
       },
       {
          u: "http://weblogtoolscollection.com/archives/2011/01/07/wordpress-plugin-releases-for-17/#comment-1356499",
          q: "Graceful Degradation is awesome. I think anyone running IE6 deserves to get Comic Sans'd."
       },
       {
          u: "https://twitter.com/jamescgray/status/24255604704944129",
          q: "love it but I dont think they went far enough!"
       },
       {
          u: "https://twitter.com/dbferguson/status/24302133478166528",
          q: "I have no need for this plugin, but it's so friggin' awesome I wish I did"
       },
       {
          u: "https://twitter.com/ArtofthFirebird/status/24326149848961025",
          q: "Soooo tempted to try this out"
       },
       {
          u: "https://twitter.com/jonathansulo/status/24368432925380609",
          q: "Basta WP-tillagget hittills i ar"
       },
       {
          u: "https://twitter.com/wpkod/status/24377998924845056",
          q: "Comic sans-straffet!"
       },
       {
          u: "http://wordpress.org/support/topic/plugin-graceless-degradation-awesome?replies=3#post-1878329",
          q: "Brilliant. Needs some more random animated gifs. ;)",
          c: true
       },
       {
          u: "https://twitter.com/dizzu/status/24532015474810880",
          q: "awesomeeee"
       },
       {
          u: "https://twitter.com/MadeMyDay/status/24595202681344000",
          q: "Harhar"
       },
       {
          u: "https://twitter.com/andmiriam/status/24625662232891392",
          q: "Haha! That's awesome."
       },
       {
          u: "https://twitter.com/berndwie/status/24679404747624448",
          q: "Das ist irgendwie gemein"
       },
       {
          u: "https://twitter.com/mrspeaker/status/24815162590494720",
          q: "graceless-degradation is fantastic... I've changed my primary browser to IE6 just to enjoy it."
       },
       {
          u: "https://twitter.com/mileskin/status/24804023185965056",
          q: "Brilliant."
       },
       {
          u: "https://twitter.com/philippbosch/status/24770285630656512",
          q: "awesome!"
       },
       {
          u: "https://twitter.com/ojiidotch/status/24765126812893184",
          q: "on the offchance that I'll ever finish my blog, this is going on there"
       },
       {
          u: "https://twitter.com/HallyMk1/status/24762480995598336",
          q: "I *heart* comic sans"
       },
       {
          u: "https://twitter.com/oliv06/status/24763354924978177",
          q: "Enorme"
       },
       {
          u: "https://twitter.com/cheeaun/status/24724236622893056",
          q: "lol"
       },
       {
          q: "Bravo good sir, nice wordpress plugin for IE6 users",
          u: "https://twitter.com/kremdela/status/24834702133174272"
       },
       {
          q: "Does Drupal 7 have a Graceless Degradation module yet?",
          u: "https://twitter.com/drewish/status/24875713089769472"
       },
       {
          q: "Does Drupal 7 have a Graceless Degradation module yet? Someone needs to write this!",
          u: "https://twitter.com/designerbrent/status/24878461487161344"
       },
       {
          q: "graceless degradation rules!",
          u: "https://twitter.com/aghosttrain/status/24963191108800513"
       },
       {
          q: "'Graceless Degradation' would be a halfway decent name for a band.",
          u: "http://i-m-just-sayin.blogspot.com/2011/01/graceless-degradation.html"
       },
       {
          q: "heh.",
          u: "https://twitter.com/coldiebear/status/24986480636067840"
       },
       {
          q: "Oh how I'd love to get away with using this...",
          u: "http://faradaycagefight.tumblr.com/post/2734687588/graceless-degradation-wordpress-uglification-for"
       },
       {
          q: "I feel like this is inaccurate",
          u: "https://twitter.com/sofimi/status/26673653026390016"
       },
       {
          q: "makes unicorns and rainbows. Well...just rainbows, actually",
          u: "https://twitter.com/medwezys/status/26693363822493696"
       },
       {
          q: "Geef IE6-surfers de experience die bij hun browser hoort",
          u: "https://twitter.com/Koen_Verbrugge/status/26741768963751936"
       },
       {
          u: "https://twitter.com/keithpitt/status/26811352290955264",
          q: "my favourite"
       }
    ];

    var quoteit = function () {
        var q = quotes[Math.floor(Math.random() * quotes.length)];
        var quote = '"' + q.q + '"';
        var source = "";
        var m = q.u.match(/^https?:\/\/twitter\.com\/(\w+)/i);
        if (m) source += ' @' + m[1];
        else {
            m = q.u.match(/^https?:\/\/(www\.)?(.[^\/]+)\//i);
            if (q.c) source += ' comment @';
            source += m[2];
        }
        jQuery('.quotes .content').html(quote);
        jQuery('.quotelink a').text(source).attr('href', q.u);
    };

    jQuery('.quotes').css('visibility', 'visible');

    setInterval(quoteit, 6666);
    quoteit();

});
