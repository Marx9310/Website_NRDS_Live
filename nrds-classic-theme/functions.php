<?php
require_once get_template_directory() . '/inc/content.php';
require_once get_template_directory() . '/inc/customizer.php';

function nrds_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form','comment-form','comment-list','gallery','caption','style','script']);

    register_nav_menus(['primary' => 'Hauptnavigation']);
}
add_action('after_setup_theme', 'nrds_setup');

function nrds_enqueue() {
    $v   = '1.0.0';
    $uri = get_template_directory_uri();

    // Google Fonts
    wp_enqueue_style('nrds-fonts', 'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap', [], null);

    wp_enqueue_style('nrds-base',     $uri . '/assets/css/styles-base.css', ['nrds-fonts'], $v);
    wp_enqueue_style('nrds-v3',       $uri . '/assets/css/styles-v3.css',   ['nrds-base'],  $v);
    wp_enqueue_style('nrds-gray',     $uri . '/assets/css/styles-gray.css', ['nrds-v3'],    $v);
    wp_enqueue_style('nrds-main',     $uri . '/style.css',                  ['nrds-gray'],  $v);

    wp_enqueue_script('nrds-main', $uri . '/assets/js/main.js', [], $v, true);

    // Pass PHP data to JS
    $d = nrds_data();
    wp_localize_script('nrds-main', 'NRSettings', [
        'homeUrl'     => home_url('/'),
        'leistungen'  => nrds_page_url('leistungen'),
        'impressum'   => nrds_page_url('impressum'),
        'datenschutz' => nrds_page_url('datenschutz'),
        'kontaktUrl'  => home_url('/kontakt.php'),
        'email'       => get_theme_mod('nrds_email',   'info@norisk-datasecurity.com'),
        'phone'       => get_theme_mod('nrds_phone',   '+49 2922 80 33 707'),
        'linkedin'    => get_theme_mod('nrds_linkedin', 'https://www.linkedin.com/in/marcel-schwickert/'),
    ]);

    if (is_page('impressum') || is_page('datenschutz')) {
        wp_dequeue_style('nrds-v3');
        wp_dequeue_style('nrds-gray');
        wp_enqueue_style('nrds-legal', $uri . '/assets/css/legal.css', ['nrds-base'], $v);
        wp_enqueue_script('nrds-legal-js', $uri . '/assets/js/legal-theme.js', [], $v, true);
    }

    if (is_page('leistungen')) {
        wp_enqueue_style('nrds-leistung', $uri . '/assets/css/styles-leistung.css', ['nrds-v3'], $v);
    }
}
add_action('wp_enqueue_scripts', 'nrds_enqueue');

function nrds_page_url($slug) {
    $p = get_page_by_path($slug);
    return $p ? get_permalink($p->ID) : home_url('/' . $slug . '/');
}
