<?php

/**
 * Title: Config
 * Description: Theme constants and configuration variables.
 */

$victory_nav_menus = [
    'primary' => [
        'name'     => __('Primary Navigation'),
        'settings' => [
            'theme_location' => 'nav-primary',
            'depth'          => 1
        ]
    ],
    'footer' => [
        'name'     => __('Footer Navigation'),
        'settings' => [
            'theme_location' => 'nav-footer',
            'depth'          => 1
        ]
    ]
];

define('VICTORY_NAV_MENUS', $victory_nav_menus);


// Add support for post thumbnails
add_theme_support('post-thumbnails');