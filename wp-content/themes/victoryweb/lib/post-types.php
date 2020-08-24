<?php

/**
 * Register custom post types
 *
 * @return void
 */
function wl_register_custom_post_types()
{
    $post_types = [
        'service'  => [
            'slug'          => 'Services',
            'singular_name' => 'Service',
            'plural_name'   => 'Services',
            'supports'      => ['title', 'editor', 'thumbnail'],
            'taxonomies'    => [],
            'hierarchical'  => FALSE,
            'has_archive'   => FALSE,
            'menu_icon'     => 'dashicons-screenoptions',
            'menu_position' => 20,
        ],
    ];

    foreach ($post_types as $k => $post_type) {
        $labels = [
            'name'                  => _x($post_type['plural_name'], $post_type['plural_name'] . ' General Name', 'text_domain'),
            'singular_name'         => _x($post_type['singular_name'], $post_type['singular_name'] . ' Singular Name', 'text_domain'),
            'menu_name'             => __($post_type['plural_name'], 'text_domain'),
            'name_admin_bar'        => __($post_type['singular_name'], 'text_domain'),
            'archives'              => __($post_type['singular_name'] .' Archives', 'text_domain'),
            'attributes'            => __($post_type['singular_name'] .' Attributes', 'text_domain'),
            'parent_item_colon'     => __('Parent ' . $post_type['singular_name'] . ':', 'text_domain'),
            'all_items'             => __('All Items', 'text_domain'),
            'add_new_item'          => __('Add New ' . $post_type['singular_name'], 'text_domain'),
            'add_new'               => __('Add New', 'text_domain'),
            'new_item'              => __('New ' . $post_type['singular_name'], 'text_domain'),
            'edit_item'             => __('Edit ' . $post_type['singular_name'], 'text_domain'),
            'update_item'           => __('Update ' . $post_type['singular_name'], 'text_domain'),
            'view_item'             => __('View ' . $post_type['singular_name'], 'text_domain'),
            'view_items'            => __('View ' . $post_type['plural_name'], 'text_domain'),
            'search_items'          => __('Search ' . $post_type['plural_name'], 'text_domain'),
            'not_found'             => __('Not found', 'text_domain'),
            'not_found_in_trash'    => __('Not found in Trash', 'text_domain'),
            'featured_image'        => __('Featured Image', 'text_domain'),
            'set_featured_image'    => __('Set featured image', 'text_domain'),
            'remove_featured_image' => __('Remove featured image', 'text_domain'),
            'use_featured_image'    => __('Use as featured image', 'text_domain'),
            'insert_into_item'      => __('Insert into ' . strtolower($post_type['singular_name']), 'text_domain'),
            'uploaded_to_this_item' => __('Uploaded to this ' . strtolower($post_type['singular_name']), 'text_domain'),
            'items_list'            => __($post_type['plural_name'] . ' list', 'text_domain'),
            'items_list_navigation' => __($post_type['plural_name'] .' list navigation', 'text_domain'),
            'filter_items_list'     => __('Filter ' . strtolower($post_type['plural_name']) . ' list', 'text_domain'),
        ];
        $args = [
            'label'               => __($post_type['singular_name'], 'text_domain'),
            'description'         => __($post_type['singular_name'] . ' Description', 'text_domain'),
            'labels'              => $labels,
            'supports'            => $post_type['supports'],
            'taxonomies'          => $post_type['taxonomies'],
            'hierarchical'        => $post_type['hierarchical'],
            'public'              => TRUE,
            'show_ui'             => TRUE,
            'show_in_menu'        => TRUE,
            'menu_position'       => $post_type['menu_position'],
            'show_in_admin_bar'   => TRUE,
            'show_in_nav_menus'   => TRUE,
            'can_export'          => TRUE,
            'has_archive'         => $post_type['has_archive'],
            'menu_icon'           => $post_type['menu_icon'],
            'exclude_from_search' => FALSE,
            'publicly_queryable'  => TRUE,
            'capability_type'     => 'page',
            'rewrite'             => [
                'slug'       => $post_type['slug'],
                'with_front' => FALSE,
            ],
        ];
        register_post_type($k, $args);
    }
}
add_action('init', 'wl_register_custom_post_types', 0);