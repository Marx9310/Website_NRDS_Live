<?php
get_header();
$d   = nrds_data();
$img = get_template_directory_uri() . '/assets/images';
$nav = $d['nav'];
$c   = $d;

$email    = esc_attr(get_theme_mod('nrds_email',    'info@norisk-datasecurity.com'));
$phone    = esc_attr(get_theme_mod('nrds_phone',    '+49 2922 80 33 707'));
$linkedin = esc_url(get_theme_mod('nrds_linkedin',  'https://www.linkedin.com/in/marcel-schwickert/'));
$addr1    = esc_html(get_theme_mod('nrds_address1', 'Am Windhügel 17A'));
$addr2    = esc_html(get_theme_mod('nrds_address2', '59457 Werl'));
$addr3    = esc_html(get_theme_mod('nrds_address3', 'Deutschland'));

$leistungen_url  = nrds_page_url('leistungen');
$impressum_url   = nrds_page_url('impressum');
$datenschutz_url = nrds_page_url('datenschutz');
?>

<!-- ======== NAV ======== -->
<header class="v3-nav" id="top">
  <a href="<?php echo home_url('/'); ?>" class="v3-nav-logo" aria-label="NoRisk Datasecurity">
    <span class="wordmark" style="--wm-scale:1.9">
      <img class="wm-img wm-dark"  src="<?php echo $img; ?>/logo-dark.png"  alt="NoRisk Datasecurity">
      <img class="wm-img wm-light" src="<?php echo $img; ?>/logo-light.png" alt="NoRisk Datasecurity">
    </span>
  </a>
  <button class="v3-hamburger" aria-label="Menü öffnen" aria-expanded="false" aria-controls="v3-nav-drawer">
    <span></span><span></span><span></span>
  </button>
  <nav class="v3-nav-links" id="v3-nav-drawer">
    <a href="#services"><?php echo esc_html($nav['services']); ?></a>
    <a href="#standards"><?php echo esc_html($nav['standards']); ?></a>
    <a href="#about"><?php echo esc_html($nav['about']); ?></a>
    <a href="#partners"><?php echo esc_html($nav['partners']); ?></a>
    <a href="#contact" class="v3-nav-cta"><span><?php echo esc_html($nav['contact']); ?></span><span class="v3-cta-arrow">↗</span></a>
  </nav>
</header>

<!-- ======== HERO ======== -->
<section class="v3-hero" id="top-content">
  <div class="v3-hero-bg">
    <div class="img-slot" style="aspect-ratio:unset;width:100%;height:100%">
      <div class="img-stripes"></div>
      <div class="img-label">[ hero · dark architectural ]</div>
    </div>
    <div class="v3-hero-veil"></div>
  </div>
  <div class="v3-hero-content">
    <div class="v3-hero-main">
      <div class="reveal">
        <h1 class="v3-hero-title">
          <?php foreach ($c['hero']['titleParts'] as $part): ?>
            <span class="v3-hero-line"><span class="v3-hero-word"><?php echo esc_html($part); ?></span></span>
          <?php endforeach; ?>
        </h1>
      </div>
      <div class="reveal" style="transition-delay:240ms">
        <p class="v3-hero-sub"><?php echo esc_html($c['hero']['subtitle']); ?></p>
      </div>
      <div class="reveal v3-hero-ctas" style="transition-delay:380ms">
        <a href="#contact" class="btn btn-primary"><?php echo esc_html($c['hero']['ctaPrimary']); ?> <span class="btn-arrow">→</span></a>
        <a href="#services" class="btn btn-ghost"><?php echo esc_html($c['hero']['ctaSecondary']); ?></a>
      </div>
    </div>
    <div class="reveal v3-hero-strip" style="transition-delay:500ms">
      <?php foreach ($c['hero']['meta'] as [$k, $v]): ?>
        <div class="v3-strip-item">
          <div class="v3-strip-v"><?php echo esc_html($k); ?></div>
          <div class="v3-strip-k"><?php echo esc_html($v); ?></div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ======== MARQUEE ======== -->
<div class="v3-marquee">
  <div class="v3-marquee-track">
    <?php
    $items = array_merge($c['marquee'], $c['marquee']);
    foreach ($items as $item): ?>
      <span class="v3-marquee-item"><span class="v3-marquee-dot">◇</span><?php echo esc_html($item); ?></span>
    <?php endforeach; ?>
  </div>
</div>

<!-- ======== SERVICES ======== -->
<section class="v3-section" id="services" style="padding:80px 40px">
  <div class="v3-sec-head">
    <div class="v3-sec-meta">
      <div class="reveal"><div class="label"><?php echo esc_html($c['pillars']['eyebrow']); ?></div></div>
      <div class="reveal" style="transition-delay:80ms"><h2 class="v3-h2"><?php echo esc_html($c['pillars']['title']); ?></h2></div>
      <div class="reveal" style="transition-delay:160ms"><p class="v3-sec-intro"><?php echo esc_html($c['pillars']['intro']); ?></p></div>
    </div>
  </div>
  <div class="v3-services">
    <?php foreach ($c['pillars']['items'] as $i => $s):
      $href = esc_url(add_query_arg('s', $s['n'], $leistungen_url));
    ?>
      <a href="<?php echo $href; ?>" class="reveal v3-service" style="transition-delay:<?php echo $i * 60; ?>ms">
        <div class="v3-service-head">
          <div class="v3-service-n"><?php echo esc_html($s['n']); ?></div>
          <div class="v3-service-marker"><span></span><span></span><span></span></div>
        </div>
        <h3 class="v3-service-title"><?php echo esc_html($s['title']); ?></h3>
        <p class="v3-service-body"><?php echo esc_html($s['body']); ?></p>
        <ul class="v3-service-points">
          <?php foreach ($s['points'] as $pt): ?>
            <li><span class="v3-tick">→</span><?php echo esc_html($pt); ?></li>
          <?php endforeach; ?>
        </ul>
        <div class="v3-service-more">
          <span class="v3-service-more-inner"><?php echo esc_html($c['pillars']['more']); ?> <span class="v3-service-more-arrow">→</span></span>
        </div>
      </a>
    <?php endforeach; ?>
  </div>
</section>

<!-- ======== STANDARDS ======== -->
<section class="v3-section v3-section-tight" id="standards">
  <div class="v3-sec-head">
    <div class="v3-sec-meta">
      <div class="reveal"><div class="label"><?php echo esc_html($c['standards']['eyebrow']); ?></div></div>
      <div class="reveal" style="transition-delay:80ms"><h2 class="v3-h2"><?php echo esc_html($c['standards']['title']); ?></h2></div>
      <div class="reveal" style="transition-delay:160ms"><p class="v3-sec-intro"><?php echo esc_html($c['standards']['intro']); ?></p></div>
    </div>
  </div>
  <div class="v3-standards">
    <?php foreach ($c['standards']['items'] as $i => $s):
      $href = esc_url(add_query_arg('std', $s['slug'], $leistungen_url));
    ?>
      <a href="<?php echo $href; ?>" class="reveal v3-standard" style="transition-delay:<?php echo $i * 60; ?>ms">
        <div class="v3-standard-l"><div class="v3-standard-code"><?php echo esc_html($s['code']); ?></div></div>
        <div class="v3-standard-r">
          <div class="v3-standard-title"><?php echo esc_html($s['title']); ?></div>
          <div class="v3-standard-body"><?php echo esc_html($s['body']); ?></div>
        </div>
        <div class="v3-standard-more"><?php echo esc_html($c['standards']['more']); ?> <span class="v3-standard-more-arrow">→</span></div>
      </a>
    <?php endforeach; ?>
  </div>
</section>

<!-- ======== ABOUT ======== -->
<section class="v3-section v3-about" id="about" style="padding:80px 40px">
  <div class="v3-about-grid">
    <div class="v3-about-text">
      <div class="v3-sec-head">
        <div class="v3-sec-meta">
          <div class="reveal"><div class="label"><?php echo esc_html($c['about']['eyebrow']); ?></div></div>
          <div class="reveal" style="transition-delay:80ms"><h2 class="v3-h2"><?php echo esc_html($c['about']['title']); ?></h2></div>
        </div>
      </div>
      <?php foreach ($c['about']['body'] as $i => $p): ?>
        <div class="reveal" style="transition-delay:<?php echo $i * 80; ?>ms">
          <p class="v3-about-p"><?php echo esc_html($p); ?></p>
        </div>
      <?php endforeach; ?>
      <div class="reveal v3-about-stats" style="transition-delay:300ms">
        <?php foreach ($c['about']['stats'] as [$k, $v]): ?>
          <div class="v3-about-stat">
            <div class="v3-stat-k"><?php echo esc_html($k); ?></div>
            <div class="v3-stat-v"><?php echo esc_html($v); ?></div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
    <div class="reveal v3-about-img" style="transition-delay:140ms">
      <div class="img-slot" style="aspect-ratio:4/3">
        <div class="img-stripes"></div>
        <div class="img-label">[ office detail · 4:3 ]</div>
      </div>
    </div>
  </div>
</section>

<!-- ======== FOUNDER ======== -->
<?php $f = $c['founder']; ?>
<section class="v3-section v3-founder" id="founder" style="padding:80px 40px">
  <div class="v3-sec-head">
    <div class="v3-sec-meta">
      <div class="reveal"><div class="label"><?php echo esc_html($f['eyebrow']); ?></div></div>
      <div class="reveal" style="transition-delay:80ms"><h2 class="v3-h2"><?php echo esc_html($f['name']); ?></h2></div>
    </div>
  </div>
  <div class="v3-founder-grid">
    <div class="reveal v3-founder-portrait">
      <div class="v3-founder-img">
        <div class="img-slot" style="aspect-ratio:3/4">
          <div class="img-stripes"></div>
          <div class="img-label">[ portrait · 3:4 ]</div>
        </div>
      </div>
      <div class="v3-founder-sign">
        <span class="v3-founder-role"><?php echo esc_html($f['role']); ?></span>
      </div>
      <a class="v3-founder-link" href="<?php echo $linkedin; ?>" target="_blank" rel="noopener noreferrer">
        <span class="v3-founder-in">in</span><?php echo esc_html($f['linkedin']); ?><span class="v3-founder-arrow">↗</span>
      </a>
    </div>
    <div class="v3-founder-body">
      <div class="reveal v3-founder-quote">
        <span class="v3-founder-quotemark">"</span>
        <blockquote><?php echo esc_html($f['quote']); ?></blockquote>
      </div>
      <?php foreach ($f['body'] as $i => $p): ?>
        <div class="reveal" style="transition-delay:<?php echo $i * 80; ?>ms">
          <p><?php echo esc_html($p); ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ======== WHY ======== -->
<section class="v3-section" style="padding:80px 40px">
  <div class="v3-sec-head">
    <div class="v3-sec-meta">
      <div class="reveal"><div class="label"><?php echo esc_html($c['why']['eyebrow']); ?></div></div>
      <div class="reveal" style="transition-delay:80ms"><h2 class="v3-h2"><?php echo esc_html($c['why']['title']); ?></h2></div>
    </div>
  </div>
  <div class="v3-why-grid">
    <?php foreach ($c['why']['items'] as $i => $it): ?>
      <div class="reveal v3-why-item" style="transition-delay:<?php echo $i * 60; ?>ms">
        <div class="v3-why-n">0<?php echo $i + 1; ?></div>
        <div class="v3-why-title"><?php echo esc_html($it['title']); ?></div>
        <div class="v3-why-body"><?php echo esc_html($it['body']); ?></div>
      </div>
    <?php endforeach; ?>
  </div>
</section>

<!-- ======== INDUSTRIES ======== -->
<section class="v3-section" style="padding:80px 40px">
  <div class="v3-sec-head">
    <div class="v3-sec-meta">
      <div class="reveal"><div class="label"><?php echo esc_html($c['industries']['eyebrow']); ?></div></div>
      <div class="reveal" style="transition-delay:80ms"><h2 class="v3-h2"><?php echo esc_html($c['industries']['title']); ?></h2></div>
    </div>
  </div>
  <div class="v3-industries">
    <?php foreach ($c['industries']['items'] as $i => $it): ?>
      <div class="reveal v3-industry" style="transition-delay:<?php echo $i * 30; ?>ms">
        <span class="v3-industry-n"><?php echo str_pad($i + 1, 2, '0', STR_PAD_LEFT); ?></span>
        <span><?php echo esc_html($it); ?></span>
      </div>
    <?php endforeach; ?>
  </div>
</section>

<!-- ======== PARTNERS ======== -->
<section class="v3-section" id="partners" style="padding:80px 40px">
  <div class="v3-sec-head">
    <div class="v3-sec-meta">
      <div class="reveal"><div class="label"><?php echo esc_html($c['partners']['eyebrow']); ?></div></div>
      <div class="reveal" style="transition-delay:80ms"><h2 class="v3-h2"><?php echo esc_html($c['partners']['title']); ?></h2></div>
      <div class="reveal" style="transition-delay:160ms"><p class="v3-sec-intro"><?php echo esc_html($c['partners']['intro']); ?></p></div>
    </div>
  </div>
  <div class="v3-partners">
    <?php foreach ($c['partners']['items'] as $i => $p): ?>
      <div class="reveal v3-partner" style="transition-delay:<?php echo $i * 100; ?>ms">
        <div class="v3-partner-img">
          <img src="<?php echo $img; ?>/<?php echo esc_attr(basename($p['src'])); ?>" alt="<?php echo esc_attr($p['name']); ?>">
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</section>

<!-- ======== CONTACT ======== -->
<section class="v3-section v3-contact" id="contact" style="padding:80px 40px">
  <div class="v3-sec-head">
    <div class="v3-sec-meta">
      <div class="reveal"><div class="label"><?php echo esc_html($c['contact']['eyebrow']); ?></div></div>
      <div class="reveal" style="transition-delay:80ms"><h2 class="v3-h2"><?php echo esc_html($c['contact']['title']); ?></h2></div>
      <div class="reveal" style="transition-delay:160ms"><p class="v3-sec-intro"><?php echo esc_html($c['contact']['intro']); ?></p></div>
    </div>
  </div>
  <div class="v3-contact-grid">
    <div class="reveal v3-contact-meta">
      <div class="v3-meta-block">
        <div class="label">Direktkontakt</div>
        <div class="v3-meta-v"><a href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a></div>
      </div>
      <div class="v3-meta-block">
        <div class="label">Telefon</div>
        <div class="v3-meta-v"><a href="tel:<?php echo preg_replace('/\s+/', '', $phone); ?>"><?php echo $phone; ?></a></div>
      </div>
      <div class="v3-meta-block">
        <div class="label">Antwortzeit</div>
        <div class="v3-meta-v">Innerhalb von 24 h</div>
      </div>
      <div class="v3-meta-block">
        <div class="label">Region</div>
        <div class="v3-meta-v">DE · AT · CH</div>
      </div>
      <div class="v3-contact-quote">"<?php echo esc_html($c['contact']['intro']); ?>"</div>
    </div>
    <div class="reveal v3-contact-form" style="transition-delay:140ms">
      <?php $t = $c['contact']['form']; ?>
      <form class="form" id="nrds-contact-form" novalidate>
        <?php wp_nonce_field('nrds_contact', 'nrds_nonce'); ?>
        <div class="form-row">
          <label class="field">
            <span><?php echo esc_html($t['name']); ?> *</span>
            <input type="text" name="name" required>
          </label>
          <label class="field">
            <span><?php echo esc_html($t['company']); ?> *</span>
            <input type="text" name="company" required>
          </label>
        </div>
        <div class="form-row">
          <label class="field">
            <span><?php echo esc_html($t['email']); ?> *</span>
            <input type="email" name="email" required>
          </label>
          <label class="field">
            <span><?php echo esc_html($t['phone']); ?></span>
            <input type="tel" name="phone">
          </label>
        </div>
        <label class="field">
          <span><?php echo esc_html($t['topic']); ?></span>
          <select name="topic">
            <?php foreach ($t['topics'] as $tp): ?>
              <option><?php echo esc_html($tp); ?></option>
            <?php endforeach; ?>
          </select>
        </label>
        <label class="field">
          <span><?php echo esc_html($t['message']); ?></span>
          <textarea name="message" rows="4"></textarea>
        </label>
        <!-- honeypot -->
        <input type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0">
        <label class="field-consent">
          <input type="checkbox" name="consent" required>
          <span><?php echo esc_html($t['consent']); ?></span>
        </label>
        <button type="submit" class="btn btn-primary" data-sending="<?php echo esc_attr($t['sending']); ?>" data-label="<?php echo esc_attr($t['submit']); ?>">
          <?php echo esc_html($t['submit']); ?> <span class="btn-arrow">→</span>
        </button>
        <div class="form-error" style="display:none"><?php echo esc_html($t['error']); ?></div>
        <div class="form-confirm" style="display:none"><?php echo esc_html($t['confirm']); ?></div>
        <div class="form-required-note"><?php echo esc_html($t['requiredNote']); ?></div>
      </form>
    </div>
  </div>
</section>

<!-- ======== FOOTER ======== -->
<footer class="v3-footer">
  <div class="v3-footer-mark">
    <a href="#top" class="v3-footer-logo" aria-label="NoRisk Datasecurity">
      <span class="wordmark" style="--wm-scale:2.6">
        <img class="wm-img wm-dark"  src="<?php echo $img; ?>/logo-dark.png"  alt="NoRisk Datasecurity">
        <img class="wm-img wm-light" src="<?php echo $img; ?>/logo-light.png" alt="NoRisk Datasecurity">
      </span>
    </a>
    <div class="v3-footer-tagline"><?php echo esc_html($c['footer']['tagline']); ?></div>
  </div>
  <div class="v3-footer-cols">
    <div class="v3-footer-col">
      <div class="label">Adresse</div>
      <div><?php echo $addr1; ?></div>
      <div><?php echo $addr2; ?></div>
      <div><?php echo $addr3; ?></div>
    </div>
    <div class="v3-footer-col">
      <div class="label">Legal</div>
      <a href="<?php echo esc_url($impressum_url); ?>">Impressum</a>
      <a href="<?php echo esc_url($datenschutz_url); ?>">Datenschutz</a>
    </div>
    <div class="v3-footer-col">
      <div class="label">© 2026</div>
      <div><?php echo esc_html($c['footer']['copy']); ?></div>
    </div>
  </div>
</footer>

<?php get_footer(); ?>
