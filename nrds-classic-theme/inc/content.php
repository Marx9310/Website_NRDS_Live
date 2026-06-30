<?php
/**
 * Website-Inhalte — hier kannst du alle Texte bearbeiten.
 * Nach Änderungen die Datei per FTP hochladen.
 */
function nrds_data($lang = 'de') {
    return ($lang === 'en') ? nrds_data_en() : nrds_data_de();
}

function nrds_data_de() {
    return [
        'nav' => [
            'services' => 'Leistungen',
            'standards' => 'Standards',
            'about'    => 'Über uns',
            'partners' => 'Partner',
            'contact'  => 'Kontakt',
        ],
        'hero' => [
            'titleParts' => ['Datenschutz.', 'IT-Sicherheit.', 'KI-Beratung.'],
            'subtitle'   => 'Seit über 30 Jahren begleiten wir Unternehmen in Deutschland, Österreich und der Schweiz – rechtssicher, pragmatisch und mit messbarem Ergebnis.',
            'ctaPrimary'   => 'Erstgespräch vereinbaren',
            'ctaSecondary' => 'Leistungen ansehen',
            'meta' => [['30+', 'Jahre Erfahrung'], ['DACH', 'Region'], ['DSGVO', 'ISO 27001 · NIS-2']],
        ],
        'pillars' => [
            'eyebrow' => 'Was wir tun',
            'title'   => 'Vier Bereiche. Ein Ziel: Sicherheit ohne Reibung.',
            'intro'   => 'Wir verbinden regulatorisches Know-how mit technischer Umsetzung. Damit Compliance kein Projekt bleibt, sondern Routine wird.',
            'more'    => 'Mehr erfahren',
            'items'   => [
                ['n'=>'01','slug'=>'datenschutz','title'=>'Datenschutz','body'=>'Externer Datenschutzbeauftragter, Datenschutzkonzepte, Audits, Schulungen — alles aus einer Hand.','points'=>['Externe DSB-Stellung','DSGVO-Konzepte','Mitarbeiterschulungen','Datenschutz-Folgenabschätzung']],
                ['n'=>'02','slug'=>'informationssicherheit','title'=>'Informationssicherheit','body'=>'ISMS-Aufbau nach ISO 27001 und NIS-2, IT-Audits und Penetrationstests — bis zur Zertifizierungsreife.','points'=>['ISMS nach ISO 27001','NIS-2 Readiness','Penetrationstests','Zertifizierungsbegleitung']],
                ['n'=>'03','slug'=>'ki-beratung','title'=>'KI-Beratung','body'=>'Rechtssicherer Einsatz von KI im Unternehmen — vom AI-Act bis zur internen Richtlinie. Pragmatisch statt theoretisch.','points'=>['AI-Act Compliance','KI-Richtlinien','Use-Case Bewertung','Mitarbeiter-Enablement']],
                ['n'=>'04','slug'=>'hinweisgebersysteme','title'=>'Hinweisgebersysteme','body'=>'Pflicht seit Juli 2023. Wir stellen externe Meldestellen, Software und Prozesse — anonym, rechtssicher, sofort einsatzbereit.','points'=>['Externe Meldestelle','Digitale Plattform','Anonymitätsschutz','Prozessdokumentation']],
            ],
        ],
        'standards' => [
            'eyebrow' => 'Standards & Rahmenwerke',
            'title'   => 'Compliance, die hält.',
            'intro'   => 'Wir arbeiten nach den anerkannten Standards — und sorgen dafür, dass Ihre Umsetzung auch Audits standhält.',
            'more'    => 'Mehr erfahren',
            'items'   => [
                ['code'=>'DSGVO',    'slug'=>'dsgvo',    'title'=>'Datenschutz-Grundverordnung',    'body'=>'Volle Compliance für Unternehmen in DACH.'],
                ['code'=>'ISO 27001','slug'=>'iso27001', 'title'=>'Informationssicherheit',          'body'=>'ISMS-Aufbau bis zur Zertifizierung.'],
                ['code'=>'NIS-2',    'slug'=>'nis2',     'title'=>'Network and Information Security','body'=>'Readiness und Umsetzung für betroffene Sektoren.'],
                ['code'=>'AI Act',   'slug'=>'aiact',    'title'=>'EU KI-Verordnung',               'body'=>'Klassifizierung, Dokumentation, interne Richtlinien.'],
            ],
        ],
        'about' => [
            'eyebrow' => 'Über uns',
            'title'   => 'Ein Familienunternehmen, das Sicherheit ernst nimmt.',
            'body'    => [
                'Die NoRisk Datasecurity GmbH ist ein inhabergeführtes Beratungsunternehmen mit mehr als drei Jahrzehnten Erfahrung. Wir beraten Unternehmen jeder Größe in der DACH-Region — von der lokalen Sozialeinrichtung bis zum internationalen Konzern.',
                'Unsere Überzeugung: Datenschutz und Informationssicherheit sind kein Verwaltungsakt, sondern Voraussetzung für unternehmerische Freiheit. Wer seine Daten im Griff hat, kann Risiken eingehen.',
            ],
            'stats' => [['30+','Jahre'], ['DACH','Region'], ['Familien-','geführt']],
        ],
        'founder' => [
            'eyebrow'     => 'Geschäftsführung',
            'name'        => 'Marcel Schwickert',
            'role'        => 'Geschäftsführer',
            'quote'       => 'Sicherheit ist kein Produkt, das man kauft — sie ist eine Haltung, die man lebt.',
            'body'        => [
                'Seit fast 15 Jahren bin ich in der IT zu Hause — und unser Team bringt zusammen mehr als drei Jahrzehnte Erfahrung in Datenschutz, Informations- und IT-Sicherheit mit.',
                'Als Geschäftsführer der NoRisk Datasecurity GmbH stehe ich persönlich dafür ein, dass Beratung bei uns pragmatisch, verständlich und auf Augenhöhe bleibt.',
            ],
            'linkedin'    => 'Auf LinkedIn vernetzen',
            'linkedinUrl' => 'https://www.linkedin.com/in/marcel-schwickert/',
        ],
        'why' => [
            'eyebrow' => 'Warum NoRisk',
            'title'   => 'Familiengeführt. Zertifiziert. Pragmatisch.',
            'items'   => [
                ['title'=>'Über 30 Jahre Praxis',    'body'=>'Wir haben Datenschutz noch vor der DSGVO gemacht. Diese Tiefe spürt man in jeder Empfehlung.'],
                ['title'=>'Zertifizierte Experten',  'body'=>'Unser Team trägt die einschlägigen Zertifizierungen — und bildet sich kontinuierlich weiter.'],
                ['title'=>'Schnelle Umsetzung',      'body'=>'Wir liefern Konzepte, die am Montag funktionieren. Keine 200-Seiten-PDFs, die niemand liest.'],
                ['title'=>'Individuell betreut',     'body'=>'Familiengeführt heißt: Sie haben immer einen festen Ansprechpartner — der Sie kennt, nicht nur Ihre Ticketnummer.'],
            ],
        ],
        'industries' => [
            'eyebrow' => 'Branchen',
            'title'   => 'Erfahrung quer durch die Wirtschaft.',
            'items'   => ['Verbände & Verbundgruppen','Automotive','Baumärkte & Baustoffe','Elektronik','Möbel & Inneneinrichtung','Internationale Konzerne','Mittelstand (KMU)','Soziale & medizinische Einrichtungen'],
        ],
        'partners' => [
            'eyebrow' => 'Partnerschaften',
            'title'   => 'Vernetzt mit den richtigen Instanzen.',
            'intro'   => 'Wir sind Mitglied in den relevanten Fachverbänden und arbeiten mit etablierten Partnern.',
            'items'   => [
                ['name'=>'Gesellschaft für Datenschutz und Datensicherheit e.V.', 'src'=>'assets/partner-gdd.png'],
                ['name'=>'eRecht24', 'src'=>'assets/partner-erecht24.png'],
            ],
        ],
        'contact' => [
            'eyebrow' => 'Kontakt',
            'title'   => 'Lassen Sie uns sprechen.',
            'intro'   => 'Ein 30-minütiges Erstgespräch reicht meist, um einzuschätzen, wo Sie stehen. Kostenlos und unverbindlich.',
            'form' => [
                'name'         => 'Name',
                'company'      => 'Unternehmen',
                'email'        => 'E-Mail',
                'phone'        => 'Telefonnummer',
                'topic'        => 'Thema',
                'topics'       => ['Datenschutz','Informationssicherheit','Hinweisgeber','KI-Beratung','Sonstiges'],
                'message'      => 'Ihre Nachricht',
                'consent'      => 'Ich bin damit einverstanden, dass diese Daten zum Zweck der Kontaktaufnahme gespeichert und verarbeitet werden. Mir ist bekannt, dass ich meine Einwilligung jederzeit widerrufen kann. *',
                'requiredNote' => '* Kennzeichnet erforderliche Felder',
                'submit'       => 'Anfrage senden',
                'sending'      => 'Wird gesendet …',
                'confirm'      => 'Vielen Dank — wir melden uns binnen 24 Stunden.',
                'error'        => 'Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@norisk-datasecurity.com.',
            ],
        ],
        'footer' => [
            'tagline' => 'Sicher. Zuverlässig. Zukunftsorientiert.',
            'copy'    => '© 2026 NoRisk Datasecurity GmbH',
        ],
        'marquee' => ['DSGVO','ISO 27001','NIS-2','EU AI ACT','BSI-GRUNDSCHUTZ','TISAX'],
    ];
}

function nrds_data_en() {
    return [
        'nav' => [
            'services' => 'Services',
            'standards' => 'Standards',
            'about'    => 'About',
            'partners' => 'Partners',
            'contact'  => 'Contact',
        ],
        'hero' => [
            'titleParts' => ['Data Protection.', 'IT Security.', 'AI Advisory.'],
            'subtitle'   => 'For over 30 years we have guided companies across Germany, Austria and Switzerland — legally sound, pragmatic, and with measurable results.',
            'ctaPrimary'   => 'Book an intro call',
            'ctaSecondary' => 'See our services',
            'meta' => [['30+', 'Years of experience'], ['DACH', 'Region'], ['GDPR', 'ISO 27001 · NIS-2']],
        ],
        'pillars' => [
            'eyebrow' => 'What we do',
            'title'   => 'Four disciplines. One goal: security without friction.',
            'intro'   => 'We combine regulatory know-how with technical execution — so compliance becomes routine, not a project.',
            'more'    => 'Learn more',
            'items'   => [
                ['n'=>'01','slug'=>'data-protection','title'=>'Data Protection','body'=>'External Data Protection Officer, concepts, audits, training — all from a single source.','points'=>['External DPO mandate','GDPR concepts','Employee training','Data protection impact assessments']],
                ['n'=>'02','slug'=>'information-security','title'=>'Information Security','body'=>'ISMS implementation per ISO 27001 and NIS-2, IT audits and penetration tests — all the way to certification.','points'=>['ISMS per ISO 27001','NIS-2 readiness','Penetration testing','Certification support']],
                ['n'=>'03','slug'=>'ai-advisory','title'=>'AI Advisory','body'=>'Legally sound deployment of AI in your company — from the AI Act to internal policy. Pragmatic, not theoretical.','points'=>['AI Act compliance','AI policies','Use-case assessment','Employee enablement']],
                ['n'=>'04','slug'=>'whistleblower-systems','title'=>'Whistleblower Systems','body'=>'Mandatory since July 2023. We provide external reporting offices, software and processes — anonymous, compliant, ready on day one.','points'=>['External reporting office','Digital platform','Anonymity protection','Process documentation']],
            ],
        ],
        'standards' => [
            'eyebrow' => 'Standards & frameworks',
            'title'   => 'Compliance that holds.',
            'intro'   => 'We work to recognised standards — and make sure your implementation survives the audit.',
            'more'    => 'Learn more',
            'items'   => [
                ['code'=>'GDPR',     'slug'=>'dsgvo',    'title'=>'General Data Protection Regulation','body'=>'Full compliance for companies in the DACH region.'],
                ['code'=>'ISO 27001','slug'=>'iso27001', 'title'=>'Information security',              'body'=>'ISMS implementation through certification.'],
                ['code'=>'NIS-2',    'slug'=>'nis2',     'title'=>'Network and Information Security',  'body'=>'Readiness and execution for affected sectors.'],
                ['code'=>'AI Act',   'slug'=>'aiact',    'title'=>'EU AI regulation',                  'body'=>'Classification, documentation, internal policies.'],
            ],
        ],
        'about' => [
            'eyebrow' => 'About us',
            'title'   => 'A family business that takes security seriously.',
            'body'    => [
                'NoRisk Datasecurity GmbH is an owner-run consultancy with more than three decades of experience. We advise companies of every size across the DACH region — from local social institutions to international corporations.',
                'Our conviction: data protection and information security are not administrative tasks but the foundation of entrepreneurial freedom. When you control your data, you can take real risks.',
            ],
            'stats' => [['30+','Years'], ['DACH','Region'], ['Family','-run']],
        ],
        'founder' => [
            'eyebrow'     => 'Management',
            'name'        => 'Marcel Schwickert',
            'role'        => 'Managing Director',
            'quote'       => 'Security isn\'t a product you buy — it\'s a mindset you live.',
            'body'        => [
                'I have spent nearly 15 years working in IT — and together our team brings over three decades of experience in data protection, information and IT security.',
                'As Managing Director of NoRisk Datasecurity GmbH, I personally make sure our advice stays pragmatic, clear and on equal footing. No jargon — a dedicated contact who takes responsibility and knows you personally.',
            ],
            'linkedin'    => 'Connect on LinkedIn',
            'linkedinUrl' => 'https://www.linkedin.com/in/marcel-schwickert/',
        ],
        'why' => [
            'eyebrow' => 'Why NoRisk',
            'title'   => 'Family-run. Certified. Pragmatic.',
            'items'   => [
                ['title'=>'30+ years in practice',   'body'=>'We were doing data protection before the GDPR existed. That depth shows in every recommendation.'],
                ['title'=>'Certified experts',       'body'=>'Our team holds the relevant certifications — and keeps learning, continuously.'],
                ['title'=>'Fast execution',          'body'=>'We deliver concepts that work on Monday. No 200-page PDFs nobody reads.'],
                ['title'=>'Individually supported',  'body'=>'Family-run means: you always have a dedicated contact — someone who knows you, not just your ticket number.'],
            ],
        ],
        'industries' => [
            'eyebrow' => 'Industries',
            'title'   => 'Experience across the economy.',
            'items'   => ['Associations & buying groups','Automotive','DIY & building materials','Electronics','Furniture & interiors','International corporations','Mid-market (SMEs)','Social & medical institutions'],
        ],
        'partners' => [
            'eyebrow' => 'Partnerships',
            'title'   => 'Connected to the right institutions.',
            'intro'   => 'We are members of the relevant industry bodies and work with established partners.',
            'items'   => [
                ['name'=>'Gesellschaft für Datenschutz und Datensicherheit e.V.', 'src'=>'assets/partner-gdd.png'],
                ['name'=>'eRecht24', 'src'=>'assets/partner-erecht24.png'],
            ],
        ],
        'contact' => [
            'eyebrow' => 'Contact',
            'title'   => 'Let\'s talk.',
            'intro'   => 'A 30-minute intro call is usually enough to gauge where you stand. Free and without obligation.',
            'form' => [
                'name'         => 'Name',
                'company'      => 'Company',
                'email'        => 'Email',
                'phone'        => 'Phone number',
                'topic'        => 'Topic',
                'topics'       => ['Data protection','Information security','Whistleblowing','AI advisory','Other'],
                'message'      => 'Your message',
                'consent'      => 'I agree that this data may be stored and processed for the purpose of contacting me. I am aware that I can withdraw my consent at any time. *',
                'requiredNote' => '* Indicates required fields',
                'submit'       => 'Send request',
                'sending'      => 'Sending …',
                'confirm'      => 'Thank you — we\'ll get back to you within 24 hours.',
                'error'        => 'Sorry, something went wrong. Please try again or email us directly at info@norisk-datasecurity.com.',
            ],
        ],
        'footer' => [
            'tagline' => 'Secure. Reliable. Future-ready.',
            'copy'    => '© 2026 NoRisk Datasecurity GmbH',
        ],
        'marquee' => ['GDPR','ISO 27001','NIS-2','EU AI ACT','BSI BASELINE','TISAX'],
    ];
}
