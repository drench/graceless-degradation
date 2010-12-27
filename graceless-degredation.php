<?php
/*
Plugin Name: Graceless Degredation
Plugin URI: http://github.com/drench/wordpress-graceless-degredation
Description: With all this talk of "graceful browser degredation" who is speaking for the other side? With this plugin, visitors still using Internet Explorer 6 get the experience their browser demands.
Author: Dan Rench
Version: 0.1
Author URI: http://dren.ch/
*/

if (preg_match('/^Mozilla\/\d\.0 \(compatible; MSIE 6\b/', $_SERVER['HTTP_USER_AGENT']))
    add_action('wp_print_styles', 'gracelessly_degrade');

function gracelessly_degrade () {
    $here = plugins_url().'/graceless-degredation';

    wp_register_style('graceless', "$here/graceless-degredation.css");
    wp_enqueue_style('graceless');

    wp_register_script('graceless', "$here/graceless-degredation.js");
    wp_enqueue_script('graceless');
}
