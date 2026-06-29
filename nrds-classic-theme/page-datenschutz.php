<?php
/**
 * Template für die Seite mit dem Slug "datenschutz"
 */
get_header();
$img = get_template_directory_uri() . '/assets/images';
?>

<nav class="legal-nav">
  <a class="legal-nav-logo" href="<?php echo home_url('/'); ?>" aria-label="NoRisk Datasecurity — Startseite">
    <img class="wm-dark"  src="<?php echo $img; ?>/logo-dark.png"  alt="NoRisk Datasecurity" />
    <img class="wm-light" src="<?php echo $img; ?>/logo-light.png" alt="NoRisk Datasecurity" />
  </a>
  <div class="legal-nav-r">
    <button class="legal-theme" type="button" aria-label="Hell/Dunkel umschalten">◑</button>
    <a class="legal-back" href="<?php echo home_url('/'); ?>">
      <span class="arrow">←</span> Zur Startseite
    </a>
  </div>
</nav>

<main class="legal-wrap">
  <div class="legal-eyebrow">Rechtliches</div>
  <h1 class="legal-h1">Datenschutz&shy;erklärung</h1>
  <p class="legal-lede">Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer personenbezogenen Daten bei der Erhebung, Verarbeitung und Nutzung anlässlich Ihres Besuchs auf unserer Website ist uns ein wichtiges Anliegen. Ihre Daten werden im Rahmen der gesetzlichen Vorschriften geschützt.</p>
  <p class="legal-lede">Die nachstehenden Informationen geben Ihnen Auskunft, wie wir mit Ihren persönlichen Daten umgehen, wie und zu welchem Zweck diese verwendet werden, an wen wir diese weitergeben und wie wir Ihre persönlichen Daten schützen.</p>
  <div class="legal-updated">Stand: Juli 2024</div>

  <section class="legal-section">
    <h2><span class="num">01</span> Verantwortlicher</h2>
    <p>Verantwortlicher für die Verarbeitung Ihrer personenbezogenen Daten im Sinne der Europäischen Datenschutz-Grundverordnung ist:</p>
    <div class="legal-card">
      <div class="row"><div class="k">Firma</div><div class="v">NoRisk Datasecurity GmbH</div></div>
      <div class="row"><div class="k">Anschrift</div><div class="v">Am Windhügel 17A, 59457 Werl</div></div>
      <div class="row"><div class="k">Telefon</div><div class="v">+49 2922 80 33 707</div></div>
      <div class="row"><div class="k">E-Mail</div><div class="v"><a href="mailto:info@norisk-datasecurity.com">info@norisk-datasecurity.com</a></div></div>
    </div>
  </section>

  <section class="legal-section">
    <h2><span class="num">02</span> Datenschutzbeauftragter</h2>
    <p>Bei Fragen zum Datenschutz steht Ihnen unsere Datenschutzbeauftragte gerne zur Verfügung unter: <a href="mailto:k.riepe@norisk-datasecurity.com">k.riepe@norisk-datasecurity.com</a></p>
  </section>

  <section class="legal-section">
    <h2><span class="num">03</span> Erhebung und Verarbeitung von Daten</h2>
    <p>Jeder Zugriff auf unsere Website und jeder Abruf einer auf der Website hinterlegten Datei wird protokolliert. Die Speicherung dient internen systembezogenen und statistischen Zwecken. Protokolliert werden:</p>
    <ul>
      <li>Name der abgerufenen Datei</li>
      <li>Datum und Uhrzeit des Abrufs</li>
      <li>übertragene Datenmenge</li>
      <li>Meldung über erfolgreichen Abruf</li>
      <li>verwendetes Betriebssystem</li>
      <li>Browser und Browsertyp</li>
      <li>die Internetseite, von der weitergeleitet wurde</li>
      <li>der Internet-Service-Provider</li>
      <li>besuchte Seiten und</li>
      <li>anfragende Domain</li>
    </ul>
    <p>Zusätzlich werden die IP-Adressen der anfragenden Rechner protokolliert. Der Verantwortliche zieht allerdings keine Rückschlüsse auf eine Person. Diese Daten werden lediglich dafür benötigt, um die Inhalte unserer Website richtig anzeigen zu können, um die Inhalte dauerhaft für Sie zu optimieren sowie zur Unterstützung von strafrechtlichen Verfolgungen im Falle von Hackerangriffen. Die Daten werden auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 S. 1 lit. f) DSGVO verarbeitet. Die Daten werden gespeichert, solange sie zur Zweckerfüllung benötigt werden und anschließend automatisch gelöscht.</p>
  </section>

  <section class="legal-section">
    <h2><span class="num">04</span> Schutz der gespeicherten Daten</h2>
    <p>Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre uns zur Verfügung gestellten personenbezogenen Daten vor Manipulation, Verlust, Zerstörung oder dem Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend dem Stand der Technik fortlaufend verbessert und angepasst.</p>
  </section>

  <section class="legal-section">
    <h2><span class="num">05</span> Minderjährigenschutz</h2>
    <p>Die Einwilligung zur Verarbeitung personenbezogener Daten kann nur durch eine volljährige Person erteilt werden. Für Dienste der Informationsgesellschaft ist die Einwilligung eines Kindes ab dem Erreichen des sechzehnten Lebensjahres gemäß Art. 8 DSGVO zulässig.</p>
  </section>

  <section class="legal-section">
    <h2><span class="num">06</span> Hosting</h2>
    <p>Die Inhalte dieser Website werden bei folgendem Anbieter gehostet:</p>
    <div class="legal-card">
      <div class="row"><div class="k">Hoster</div><div class="v">IONOS SE</div></div>
      <div class="row"><div class="k">Anschrift</div><div class="v">Elgendorfer Str. 57, 56410 Montabaur</div></div>
      <div class="row"><div class="k">Datenschutz</div><div class="v"><a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer">ionos.de/terms-gtc/datenschutzerklaerung</a></div></div>
    </div>
  </section>

  <section class="legal-section">
    <h2><span class="num">07</span> E-Mail-Kontakt und Telefon</h2>
    <p>Auf unserer Website ist eine Kontaktaufnahme über die angegebene E-Mail-Adresse möglich. Außerdem können Sie uns über die auf der Website angegebene Telefonnummer kontaktieren. Nehmen Sie diese Möglichkeiten wahr, so werden die dabei übermittelten personenbezogenen Daten gespeichert und nur zum Zwecke der Bearbeitung und Beantwortung Ihrer Anfrage erhoben und verarbeitet.</p>
    <p>Soweit Sie mit uns Kontakt aufnehmen, erteilen Sie Ihre Einwilligung für die Datenverarbeitung gemäß Art. 6 Abs. 1 S. 1 lit. a) DSGVO. Eine Weitergabe Ihrer personenbezogenen Daten an externe Dritte erfolgt nicht.</p>
    <p>Sie haben das Recht, Ihre Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen.</p>
  </section>

  <section class="legal-section">
    <h2><span class="num">08</span> Kontaktformular</h2>
    <p>All Ihre personenbezogenen Daten und weiteren Informationen, die Sie uns über das auf unserer Website eingerichtete Kontaktformular mitteilen, werden nur zum Zwecke der Bearbeitung und Beantwortung Ihrer Anfragen erhoben und verarbeitet. Soweit Sie mit uns Kontakt aufnehmen, erteilen Sie Ihre Einwilligung für die Datenverarbeitung gemäß Art. 6 Abs. 1 S. 1 lit. a) DSGVO.</p>
    <p>Eine Weitergabe Ihrer personenbezogenen Daten an externe Dritte erfolgt nicht. Sie haben das Recht, Ihre Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen.</p>
  </section>

  <section class="legal-section">
    <h2><span class="num">09</span> Cookies</h2>
    <p>Unsere Webseite benutzt keine Cookies.</p>
  </section>

  <section class="legal-section">
    <h2><span class="num">10</span> Microsoft Teams</h2>
    <p>Wir nutzen das Webkonferenz-Tool Microsoft Teams, eine Anwendung der Microsoft Corporation. Die Datenschutzerklärung von Microsoft finden Sie unter: <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" rel="noopener noreferrer">privacy.microsoft.com/de-de/privacystatement</a></p>
  </section>

  <section class="legal-section">
    <h2><span class="num">11</span> Unternehmensauftritt auf LinkedIn</h2>
    <p>Wir nutzen unseren Unternehmensauftritt auf LinkedIn zur Kommunikation und zum Informationsaustausch mit (potenziellen) Kunden. Weitere Informationen finden Sie in der Datenschutzerklärung von LinkedIn: <a href="https://de.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">de.linkedin.com/legal/privacy-policy</a></p>
  </section>

  <section class="legal-section">
    <h2><span class="num">12</span> Ihre Rechte</h2>
    <p>Zur Geltendmachung Ihrer Rechte (Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf) kontaktieren Sie uns unter: <a href="mailto:datenschutz@norisk-datasecurity.com">datenschutz@norisk-datasecurity.com</a></p>
  </section>

  <section class="legal-section">
    <h2><span class="num">13</span> Beschwerde bei einer Aufsichtsbehörde</h2>
    <p>Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Unternehmenssitzes wenden.</p>
  </section>
</main>

<footer class="legal-footer">
  <div>© 2026 NoRisk Datasecurity GmbH</div>
  <div class="links">
    <a href="<?php echo home_url('/'); ?>">Startseite</a>
    <a href="<?php echo esc_url(nrds_page_url('impressum')); ?>">Impressum</a>
  </div>
</footer>

<?php get_footer(); ?>
