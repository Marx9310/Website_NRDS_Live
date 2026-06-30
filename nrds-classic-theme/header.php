<?php
// Read theme + language from cookie (set by JS toolbar)
$nrds_dark = isset($_COOKIE['nrds-theme']) && $_COOKIE['nrds-theme'] === 'dark';
$nrds_lang = (isset($_COOKIE['nrds-lang']) && $_COOKIE['nrds-lang'] === 'en') ? 'en' : 'de';
$nrds_theme_class = $nrds_dark ? 'v3-dark' : 'v3-light';
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> lang="<?php echo $nrds_lang; ?>">
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class('v3 ' . $nrds_theme_class); ?>>
<?php wp_body_open(); ?>
