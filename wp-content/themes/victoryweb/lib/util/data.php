<?php

/**
 * Get and prepare data for front-page endpoint
 * 
 * @return Object
 */
function victory_frontpage_endpoint()
{
    $frontpage_id = get_option('page_on_front');

    $args  = [
        'post_type' => 'page',
        'post__in'  => [$frontpage_id]
    ];
    $pages = get_posts($args);

    // Set all the page data and custom fields
    foreach ($pages as $key => $value) {
        $pages[$key]->acf = get_fields($value->ID);
    }

    return $pages;
}

/**
 * Set up the rest route for the front-page data
 */
function victory_rest_route()
{
    register_rest_route('pages/v2', '/frontpage/', [
        'methods'  => 'GET',
        'callback' => 'victory_frontpage_endpoint'
    ]);
}
add_action('rest_api_init', 'victory_rest_route');
