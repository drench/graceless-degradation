<?php
/*
Plugin Name: Graceless Degradation
Plugin URI: http://drench.github.com/graceless-degradation/
Description: With all this talk of "graceful browser degradation" who is speaking for the other side? With this plugin, visitors still using Internet Explorer 6 get the experience their browser demands.
Author: Dan Rench
Version: 0.11
Author URI: http://dren.ch/
*/

if (preg_match('/^Mozilla\/\d\.0 \(compatible; MSIE 6\b/', $_SERVER['HTTP_USER_AGENT']))
    add_action('wp_print_styles', 'gracelessly_degrade');

function gracelessly_degrade () {
    $here = plugins_url().'/graceless-degradation';

    wp_register_style('graceless', "$here/graceless-degradation.css");
    wp_enqueue_style('graceless');

    wp_register_script('graceless', "$here/graceless-degradation.js");
    wp_enqueue_script('graceless');
}
