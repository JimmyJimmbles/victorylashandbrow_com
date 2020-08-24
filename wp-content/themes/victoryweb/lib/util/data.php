<?php

/**
 * Get and prepare data for front-page endpoint.
 *
 * @return object
 */
function victory_frontpage_endpoint() {
    $frontpage_id = get_option('page_on_front');
    $data         = [];

    // get page data
    $args  = [
        'post_type' => 'page',
        'post__in'  => [$frontpage_id],
    ];
    $pages = get_posts($args);

    // Set all the page data and custom fields
    foreach ($pages as $key => $value) {
        $pages[$key]->acf = get_fields($value->ID);
    }

    $data['section_data'] = $pages[0]->acf;

    // get theme settings data
    $theme_settings = get_fields('options');

    // unset private ids
    if (isset($theme_settings['google_analytics_id']) or isset($theme_settings['google_analytics_id'])) {
        unset($theme_settings['google_analytics_id'], $theme_settings['google_maps_api_key']);
    }

    $data['theme_settings'] = $theme_settings;

    // get the menus
    $menu_location = get_nav_menu_locations();
    $primary_menu  = wp_get_nav_menu_items($menu_location['nav-primary']);
    $primary_menu  = array_map(function ($menu) {
        return [
            'nav_url'   => $menu->url,
            'nav_title' => $menu->title,
        ];
    }, $primary_menu);
    $secondary_menu = wp_get_nav_menu_items($menu_location['nav-footer']);
    $secondary_menu = array_map(function ($menu) {
        return [
            'nav_url'   => $menu->url,
            'nav_title' => $menu->title,
        ];
    }, $secondary_menu);

    $data['primary_menu']   = $primary_menu;
    $data['secondary_menu'] = $secondary_menu;

    // get services data
    $services = get_posts(['post_type' => 'service', 'numberposts' => -1]);
    foreach ($services as $service) {
        $service->thumbnail = get_the_post_thumbnail_url($service->ID);
    }
    $data['section_data']['services']['services'] = $services;

    return $data;
}

/**
 * Set up the rest route for the front-page data.
 */
function victory_rest_route() {
    register_rest_route('pages/v2', '/frontpage/', [
        'methods'  => 'GET',
        'callback' => 'victory_frontpage_endpoint',
    ]);
}
add_action('rest_api_init', 'victory_rest_route');
