<?php

/**
 * Victory Web WordPress Theme
 * Copyright (C) 2019, Jay Jones
 *
 * Title: Functions
 * Description: Require all theme functions files.
 * Documentation: http://codex.wordpress.org/Functions_File_Explained
 */

require_once('lib/util/helpers.php'); // Global helper functions
require_once('lib/config.php');       // Global theme configuration
require_once('lib/util/data.php');    // Manage theme data
require_once('lib/assets.php');       // Manage theme assets
require_once('lib/nav-menus.php');    // Register navigation menus

// Vendors
require_once('lib/vendors/vendor-acf.php'); // Manage Advanced Custom Fields Settings
