<?php

/**
 * Title: Helpers
 * Description: These are global helper functions for the theme.
 */

if (!function_exists('webpack')) {
    /**
     * Get the path to a versioned webpack asset.
     *
     * @param  string  $file
     * @return string
     */
    function webpack($file, $editor = FALSE)
    {
        static $manifest = NULL;

        if (is_null($manifest)) {
            $manifest = json_decode(@file_get_contents(get_theme_root() . '/victoryweb/build/manifest.json'), TRUE);
        }

        $path = NULL;

        if (isset($manifest[$file])) {
            $path = empty($editor) ? '/wp-content/themes/victoryweb' . $manifest[$file] : $manifest[$file];
        }

        return $path;
    }
}

/**
 * Enqueue a given asset.
 *
 * @param  string  $file
 * @return voide
 */

function victory_enqueue_asset($file = NULL)
{
    if (!is_null($file)) {
        $prefix   = 'victoryweb-';
        $fileinfo = pathinfo($file);
        $ext      = $fileinfo['extension'];
        $name     = $fileinfo['filename'];
        $path     = webpack($file);

        if (!is_null($path)) {
            if ($ext === 'js') {
                wp_enqueue_script($prefix . $name, $path, [], FALSE, TRUE);
            } elseif ($ext === 'css') {
                wp_enqueue_style($prefix . $name, $path, [], FALSE, 'all');
            }
        }
    }
}
