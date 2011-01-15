
=== Graceless Degradation ===

Contributors: drench, Branko Collin
Donate link: http://drench.github.com/graceless-degradation/#donate

We hear about "graceful browser degradation" but who speaks for the other side? Give your IE6 visitors the experience their browser demands.

== Description ==

Graceless Degradation checks to see if the current browser is MSIE 6. If it's not, it does nothing. If it is, it injects CSS and JavaScript into the page that:

* Puts Comic Sans fonts everywhere!
* Makes emphasis tags (bold, italic, strong, and underline) blink! Even though IE doesn't support the `<blink>` tag!
* Turns `<hr>` tags into animated rainbows!
* Finds "mailto:" links and tacks on animated mailbox graphics!

= Module's Official Site =

Based on a Wordpress plugin with the same name: http://drench.github.com/graceless-degradation/

== Installation ==

Unpack the plugin under wp-content/plugins and activate it in the Wordpress console. That's it! Graceless Degradation has no moving parts or sharp edges.

== Frequently Asked Questions ==

= What about IE 5 (or IE 4, 3, 2, 1...)? =

This plugin only "supports" IE 6, for various reasons. The main one is I don't have earlier versions of IE to test. Also, I would have to convert things like document.getElementById() into document.all or whatever people used to do to support IE 4. If you're game, this plugin is open source. Fork it and patch it.

==Screenshots ==

1. The normal page under a 'tasteful' browser (Chrome with OS X)
2. The same page Gracelessly Degraded (IE6 with Windows XP)
