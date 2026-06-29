<?php
/**
 * NoRisk Datasecurity WordPress Theme
 * functions.php — Theme-Setup, Asset-Einbindung
 */

// ── Theme-Setup ──────────────────────────────────────────────────────────────
function nrds_setup() {
    add_theme_support('title-tag');
    add_theme_support('html5', ['script', 'style']);
    add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'nrds_setup');

// WordPress-Ballast entfernen
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_shortlink_wp_head');

// ── Google Fonts Preconnect ──────────────────────────────────────────────────
function nrds_preconnect() {
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">' . "\n";
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n";
}
add_action('wp_head', 'nrds_preconnect', 1);

// ── Assets einbinden ─────────────────────────────────────────────────────────
function nrds_enqueue_assets() {
    $uri = get_template_directory_uri();
    $v   = '1.0.0';

    // React-Seiten: Startseite + Leistungen
    if (is_front_page() || is_page('leistungen')) {

        wp_enqueue_style('nrds-fonts',
            'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600' .
            '&family=Inter+Tight:wght@400;500;600' .
            '&family=IBM+Plex+Sans:wght@400;500;600' .
            '&family=IBM+Plex+Mono:wght@400;500' .
            '&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300&display=swap',
            [], null
        );

        wp_enqueue_style('nrds-base', "$uri/assets/css/styles-base.css", [], $v);
        wp_enqueue_style('nrds-v3',   "$uri/assets/css/styles-v3.css",   ['nrds-base'], $v);
        wp_enqueue_style('nrds-gray', "$uri/assets/css/styles-gray.css", ['nrds-v3'],   $v);
        wp_add_inline_style('nrds-gray', nrds_toolbar_css());

        // React 18 via CDN (production build)
        wp_enqueue_script('react',
            'https://unpkg.com/react@18/umd/react.production.min.js',
            [], '18', true);
        wp_enqueue_script('react-dom',
            'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
            ['react'], '18', true);

        wp_enqueue_script('nrds-content', "$uri/assets/js/content.js",  ['react-dom'],    $v, true);
        wp_enqueue_script('nrds-shared',  "$uri/assets/js/shared.js",   ['nrds-content'], $v, true);

        if (is_front_page()) {
            wp_enqueue_script('nrds-tweaks',   "$uri/assets/js/tweaks-panel.js", ['nrds-shared'],   $v, true);
            wp_enqueue_script('nrds-variant3', "$uri/assets/js/Variant3.js",     ['nrds-tweaks'],   $v, true);
            wp_enqueue_script('nrds-app',      "$uri/assets/js/app.js",          ['nrds-variant3'], $v, true);
        }

        if (is_page('leistungen')) {
            wp_enqueue_style('nrds-leistung', "$uri/assets/css/styles-leistung.css", ['nrds-v3'], $v);
            wp_enqueue_script('nrds-leistung-js', "$uri/assets/js/leistung.js", ['nrds-shared'], $v, true);
        }
    }

    // Rechtliche Seiten: Impressum + Datenschutz
    if (is_page('impressum') || is_page('datenschutz')) {
        wp_enqueue_style('nrds-fonts-legal',
            'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600' .
            '&family=Inter+Tight:wght@400;500' .
            '&family=IBM+Plex+Mono:wght@400;500&display=swap',
            [], null
        );
        wp_enqueue_style('nrds-legal', "$uri/assets/css/legal.css", [], $v);
        wp_enqueue_script('nrds-legal-theme', "$uri/assets/js/legal-theme.js", [], $v, true);
    }
}
add_action('wp_enqueue_scripts', 'nrds_enqueue_assets');

// ── Body-Klasse für React-Seiten ─────────────────────────────────────────────
function nrds_body_class($classes) {
    if (is_front_page() || is_page('leistungen')) {
        $classes[] = 'gray';
    }
    return $classes;
}
add_filter('body_class', 'nrds_body_class');

// ── Hilfsfunktion: Seiten-URL nach Slug ──────────────────────────────────────
function nrds_page_url($slug) {
    $page = get_page_by_path($slug);
    return $page ? get_permalink($page) : home_url('/' . $slug . '/');
}

// ── Inline-CSS: Toolbar + Boot-Screen ────────────────────────────────────────
function nrds_toolbar_css() {
    return '
    .global-toolbar {
      position: fixed; bottom: 18px; left: 50%; transform: translateX(-50%);
      z-index: 80; display: inline-flex; align-items: center; gap: 2px; padding: 6px;
      background: rgba(10,12,14,.92); backdrop-filter: blur(16px); border-radius: 999px;
      box-shadow: 0 16px 48px rgba(0,0,0,.28), 0 0 0 1px rgba(255,255,255,.06);
      font-family: "IBM Plex Mono",monospace; font-size: 10px;
      letter-spacing: .16em; color: #ecebe5; text-transform: uppercase;
    }
    .gt-group { display: inline-flex; align-items: center; padding: 0 4px; }
    .gt-label  { padding: 0 8px 0 6px; opacity: .4; }
    .gt-divider { width: 1px; height: 18px; background: rgba(255,255,255,.12); margin: 0 2px; }
    .global-toolbar button {
      background: transparent; border: 0; color: inherit; padding: 8px 12px;
      border-radius: 999px; letter-spacing: .18em; font-family: inherit; font-size: inherit;
      opacity: .5; transition: opacity .2s, background .2s, color .2s; cursor: pointer;
    }
    .global-toolbar button:hover { opacity: .9; }
    .global-toolbar button.is-on { background: #ecebe5; color: #0a0c0e; opacity: 1; }
    .gt-theme { padding: 6px 12px !important; font-size: 16px !important; letter-spacing: 0 !important; }
    .gt-version {
      display: inline-flex; align-items: center; gap: 7px; padding: 8px 14px;
      color: #ecebe5; text-decoration: none; border-radius: 999px; letter-spacing: .16em;
      opacity: .85; transition: opacity .2s, background .2s;
    }
    .gt-version:hover { opacity: 1; background: rgba(255,255,255,.08); }
    .boot {
      position: fixed; inset: 0; background: #ebe8df;
      display: grid; place-items: center; z-index: 999; transition: opacity .5s ease;
    }
    body.gray .boot { background: #fbfbfc; }
    .boot.is-gone { opacity: 0; pointer-events: none; }
    .boot-mark {
      font-family: "IBM Plex Mono",monospace; font-size: 11px;
      letter-spacing: .3em; color: rgba(22,20,15,.45); text-transform: uppercase;
    }
    @media (max-width: 720px) {
      .global-toolbar { font-size: 9px; padding: 4px; }
      .global-toolbar button { padding: 7px 9px; }
      .gt-label { display: none; }
    }';
}
