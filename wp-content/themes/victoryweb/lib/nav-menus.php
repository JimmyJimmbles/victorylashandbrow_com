<?php

/**
 * Title: Navigation
 * Description: Setup the various navigation menus to be used by the theme.
 * Documentation:
 * -- http://codex.wordpress.org/Function_Reference/wp_nav_menu
 */

/**
 * Get theme navigation menus by name.
 *
 * @param  string  $name
 * @return void
 */

function victory_get_nav_menus($name)
{
    $menu_location = VICTORY_NAV_MENUS[$name];

    if (!$menu_location) {
        return FALSE;
    }

    $default_settings = [
        'container'       => '',
        'container_class' => '',
        'menu'            => '',
        'menu_id'         => '',
        'menu_class'      => '',
        'theme_location'  => '',
        'before'          => '',
        'after'           => '',
        'link_before'     => '',
        'link_after'      => '',
        'depth'           => 0,
    ];

    wp_nav_menu(array_merge($default_settings, $menu_location['settings']));
}

/**
 * Register navigation menu locations to be managed by site admin.
 *
 * @return void
 */

function victory_register_nav_menus()
{
    $nav_menus = array_reduce(array_keys(VICTORY_NAV_MENUS), function ($menu, $slug) {
        $menu_location = VICTORY_NAV_MENUS[$slug];

        $menu[$menu_location['settings']['theme_location']] = $menu_location['name'];

        return $menu;
    }, []);

    register_nav_menus($nav_menus);
}
add_action('after_setup_theme', 'victory_register_nav_menus', 10);
