<?php
/**
 * Website-Inhalte — hier kannst du alle Texte bearbeiten.
 * Nach Änderungen die Datei per FTP hochladen.
 */
function nrds_data() {
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
