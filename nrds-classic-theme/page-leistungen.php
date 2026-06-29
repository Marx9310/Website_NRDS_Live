<?php
/**
 * Template für die Seite mit dem Slug "leistungen"
 * Zeigt Detailseite für einen Service oder Standard (GET-Parameter: ?s=01 oder ?std=dsgvo)
 */
get_header();
$d   = nrds_data();
$img = get_template_directory_uri() . '/assets/images';

$s_param   = isset($_GET['s'])   ? sanitize_text_field($_GET['s'])   : '';
$std_param = isset($_GET['std']) ? sanitize_text_field($_GET['std']) : '';

// Find matching pillar
$service  = null;
$standard = null;

if ($s_param) {
    foreach ($d['pillars']['items'] as $item) {
        if ($item['n'] === $s_param || $item['slug'] === $s_param) {
            $service = $item;
            break;
        }
    }
}
if ($std_param) {
    foreach ($d['standards']['items'] as $item) {
        if ($item['slug'] === $std_param || $item['code'] === $std_param) {
            $standard = $item;
            break;
        }
    }
}
?>

<header class="v3-nav">
  <a href="<?php echo home_url('/'); ?>" class="v3-nav-logo" aria-label="NoRisk Datasecurity">
    <span class="wordmark" style="--wm-scale:1.9">
      <img class="wm-img wm-dark"  src="<?php echo $img; ?>/logo-dark.png"  alt="NoRisk Datasecurity">
      <img class="wm-img wm-light" src="<?php echo $img; ?>/logo-light.png" alt="NoRisk Datasecurity">
    </span>
  </a>
  <nav class="v3-nav-links">
    <a href="<?php echo home_url('/'); ?>#services"><?php echo esc_html($d['nav']['services']); ?></a>
    <a href="<?php echo home_url('/'); ?>#standards"><?php echo esc_html($d['nav']['standards']); ?></a>
    <a href="<?php echo home_url('/'); ?>#about"><?php echo esc_html($d['nav']['about']); ?></a>
    <a href="<?php echo home_url('/'); ?>#partners"><?php echo esc_html($d['nav']['partners']); ?></a>
    <a href="<?php echo home_url('/'); ?>#contact" class="v3-nav-cta"><span><?php echo esc_html($d['nav']['contact']); ?></span><span class="v3-cta-arrow">↗</span></a>
  </nav>
</header>

<div class="lst-wrap">
  <a class="lst-back" href="<?php echo home_url('/'); ?>">← Zurück zur Startseite</a>

  <?php if ($service): ?>
    <div class="lst-hero">
      <div class="lst-eyebrow"><?php echo esc_html($d['pillars']['eyebrow']); ?></div>
      <div class="lst-service-n"><?php echo esc_html($service['n']); ?></div>
      <h1 class="lst-title"><?php echo esc_html($service['title']); ?></h1>
      <p class="lst-intro"><?php echo esc_html($service['body']); ?></p>
    </div>
    <div class="lst-points">
      <div class="lst-points-label">Leistungsumfang</div>
      <?php foreach ($service['points'] as $pt): ?>
        <div class="lst-point"><span class="lst-arrow">→</span><?php echo esc_html($pt); ?></div>
      <?php endforeach; ?>
    </div>

  <?php elseif ($standard): ?>
    <div class="lst-hero">
      <div class="lst-eyebrow"><?php echo esc_html($d['standards']['eyebrow']); ?></div>
      <div class="lst-service-n"><?php echo esc_html($standard['code']); ?></div>
      <h1 class="lst-title"><?php echo esc_html($standard['title']); ?></h1>
      <p class="lst-intro"><?php echo esc_html($standard['body']); ?></p>
    </div>

  <?php else: ?>
    <!-- Overview: all services and standards -->
    <h1 class="lst-title" style="margin-bottom:48px"><?php echo esc_html($d['pillars']['title']); ?></h1>
    <div class="lst-grid">
      <?php foreach ($d['pillars']['items'] as $item):
        $href = esc_url(add_query_arg('s', $item['n'], get_permalink()));
      ?>
        <a href="<?php echo $href; ?>" class="lst-card">
          <div class="lst-card-n"><?php echo esc_html($item['n']); ?></div>
          <div class="lst-card-title"><?php echo esc_html($item['title']); ?></div>
          <div class="lst-card-body"><?php echo esc_html($item['body']); ?></div>
          <div class="lst-card-more"><?php echo esc_html($d['pillars']['more']); ?> →</div>
        </a>
      <?php endforeach; ?>
    </div>

    <h2 class="lst-title" style="margin-top:80px;margin-bottom:48px"><?php echo esc_html($d['standards']['title']); ?></h2>
    <div class="lst-grid">
      <?php foreach ($d['standards']['items'] as $item):
        $href = esc_url(add_query_arg('std', $item['slug'], get_permalink()));
      ?>
        <a href="<?php echo $href; ?>" class="lst-card">
          <div class="lst-card-n"><?php echo esc_html($item['code']); ?></div>
          <div class="lst-card-title"><?php echo esc_html($item['title']); ?></div>
          <div class="lst-card-body"><?php echo esc_html($item['body']); ?></div>
          <div class="lst-card-more"><?php echo esc_html($d['standards']['more']); ?> →</div>
        </a>
      <?php endforeach; ?>
    </div>
  <?php endif; ?>

  <div class="lst-cta-block">
    <p>Haben Sie Fragen? Vereinbaren Sie ein kostenloses Erstgespräch.</p>
    <a href="<?php echo home_url('/'); ?>#contact" class="btn btn-primary">Jetzt Kontakt aufnehmen <span class="btn-arrow">→</span></a>
  </div>
</div>

<footer class="v3-footer" style="margin-top:80px">
  <div class="v3-footer-mark">
    <a href="<?php echo home_url('/'); ?>" class="v3-footer-logo" aria-label="NoRisk Datasecurity">
      <span class="wordmark" style="--wm-scale:2">
        <img class="wm-img wm-dark"  src="<?php echo $img; ?>/logo-dark.png"  alt="NoRisk Datasecurity">
        <img class="wm-img wm-light" src="<?php echo $img; ?>/logo-light.png" alt="NoRisk Datasecurity">
      </span>
    </a>
    <div class="v3-footer-tagline"><?php echo esc_html($d['footer']['tagline']); ?></div>
  </div>
  <div class="v3-footer-cols">
    <div class="v3-footer-col">
      <div class="label">Legal</div>
      <a href="<?php echo esc_url(nrds_page_url('impressum')); ?>">Impressum</a>
      <a href="<?php echo esc_url(nrds_page_url('datenschutz')); ?>">Datenschutz</a>
    </div>
    <div class="v3-footer-col">
      <div class="label">© 2026</div>
      <div><?php echo esc_html($d['footer']['copy']); ?></div>
    </div>
  </div>
</footer>

<?php get_footer(); ?>
