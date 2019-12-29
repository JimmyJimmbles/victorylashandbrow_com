<?php

/**
 * Get and prepare data for front-page endpoint
 * 
 * @return Object
 */
function victory_frontpage_endpoint()
{
    $frontpage_id = get_option('page_on_front');

    // query front-page
    $args  = [
        'post_type' => 'page',
        'post__in'  => [$frontpage_id]
    ];
    $page = get_post($args);

    // set page custom fields
    $page->acf = get_fields($page->ID);

    return $page;
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
