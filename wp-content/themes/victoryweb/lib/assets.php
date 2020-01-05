<?php

/**
 * Title: Assets
 * Description: Enqueque the custom theme assets.
 * Documentation:
 * -- https://codex.wordpress.org/Plugin_API/Action_Reference/wp_enqueue_scripts
 * -- https://codex.wordpress.org/Plugin_API/Action_Reference/admin_enqueue_scripts
 * -- https://codex.wordpress.org/Plugin_API/Action_Reference/login_enqueue_scripts
 */

/**
 * Enqueque front-end assets.
 *
 * @return void
 */

function enqueue_theme_assets()
{
    // Enqueue fonts
    wp_enqueue_style('victory-fonts', 'https://fonts.googleapis.com/css?family=Lato|Libre+Baskerville|Pinyon+Script&display=swap', FALSE);

    victory_enqueue_asset('commons.js');
    victory_enqueue_asset('global.js');
    victory_enqueue_asset('global.css');

    if (is_front_page()) {
        victory_enqueue_asset('app.js');
    }
}
add_action('wp_enqueue_scripts', 'enqueue_theme_assets', 10);
