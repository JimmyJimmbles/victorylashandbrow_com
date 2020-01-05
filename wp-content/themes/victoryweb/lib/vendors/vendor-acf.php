<?php

/**
 * Title: Vendor - Advanced Custom Fields
 * Description: Override or add functionality to the Advanced Custom Fields plugin.
 * Documentation: https://www.advancedcustomfields.com/resources/
 */

/**
 * Add options page to theme
 *
 * @return void
 */
if (function_exists('acf_add_options_page')) {
    acf_add_options_page([
        'page_title' => 'Theme Settings',
        'menu_slug'  => 'theme-settings',
    ]);

    $subpages = [
        ['page_title' => 'General',  'parent_slug' => 'theme-settings'],
        ['page_title' => 'API Keys', 'parent_slug' => 'theme-settings'],
    ];

    foreach ($subpages as $subpage) {
        acf_add_options_sub_page($subpage);
    }
}

/**
 * Update ACF Google Maps API key
 *
 * @return void
 */
function victory_acf_init()
{
    if (get_field('google_maps_api_key', 'option')) {
        acf_update_setting('google_api_key', get_field('google_maps_api_key', 'option'));
    }
}
add_action('acf/init', 'victory_acf_init');
