<?php

/**
 * Custom configuration
 */

/** Environment */
define('ENV', 'prod');

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'victorylashandbrow_com');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**
 * WordPress URL.
 *
 * Programmatically detect the site environment and define the URL
 * so the install works in development and on production.
 */
$site_url = 'http' . (((!empty($_SERVER['HTTPS']) and $_SERVER['HTTPS'] !== 'off') or $_SERVER['SERVER_PORT'] == 443) ? 's' : '') . '://' . $_SERVER['SERVER_NAME'];
define('WP_SITEURL', $site_url);
define('WP_HOME',    $site_url);

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '@&g}.9|2kZBo]4fvDx|nlk<lqo]bOVsXG{BlgyJ/3q>M&`-#_BQijgm|yr(ga| /');
define('SECURE_AUTH_KEY',  'CxoWURFT]#vIz+p 7`Yp!&6P~1[QxW[a,H3(eL!|Br1|j4@k|zJbe9-t>lNlYUte');
define('LOGGED_IN_KEY',    '+n%M?}wd}bOoBz}4yEWxyZE-Io?Z%-#/eJEjW^*X84oA_,2o]C+hR1593H-q[y(d');
define('NONCE_KEY',        ' c5/L|w^3PGbbY=~::j_B[jiKLt`6||DXI^j|gn~`y-L)9)`|pk*i4eL[#lw;bhK');
define('AUTH_SALT',        '})?jvY3]|+(mjN_|*-rxp %P;}nCn~%>^FPNOy+t/mcBf`O_b3:l[2D }hjgHI41');
define('SECURE_AUTH_SALT', 'JyAl~s8rcvp>?_q5b`I.{x$EDQbuD7&k,_AH#+ETa`X-C M7:- w(Y1NXb&H9ov;');
define('LOGGED_IN_SALT',   '+*b+tQO6%Du*q|<T%3-5Wtc-f;+/M0Sbp]C2hj>-}&8Zug${f6A/pi/5LDV%4R-z');
define('NONCE_SALT',       '|K}w}I|/<+T0r8pi`h8n(RF)qyUsiPqT/OP-Ny)NU=#R})uKBLc5pe/t!U><AZ>f');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'victory_wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', TRUE);

// Limit revisions to three per post
define('WP_POST_REVISIONS', 3);

// Disable file editing in WordPress admin
define('DISALLOW_FILE_EDIT', TRUE);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH'))
    define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
