// Bilingual content for NoRisk Datasecurity website
// Exposed as window.NRContent

const NR_CONTENT = {
  de: {
    nav: {
      services: "Leistungen",
      standards: "Standards",
      about: "Über uns",
      partners: "Partner",
      contact: "Kontakt"
    },
    hero: {
      eyebrow: "Datenschutz · Informationssicherheit · KI-Beratung",
      title: "Ihre Experten für Datenschutz, IT-Sicherheit und KI.",
      titleParts: ["Datenschutz.", "IT-Sicherheit.", "KI-Beratung."],
      subtitle: "Seit über 30 Jahren begleiten wir Unternehmen in Deutschland, Österreich und der Schweiz – rechtssicher, pragmatisch und mit messbarem Ergebnis.",
      ctaPrimary: "Erstgespräch vereinbaren",
      ctaSecondary: "Leistungen ansehen",
      meta: [["30+", "Jahre Erfahrung"], ["DACH", "Region"], ["DSGVO", "ISO 27001 · NIS-2"]]
    },
    pillars: {
      eyebrow: "Was wir tun",
      title: "Vier Bereiche. Ein Ziel: Sicherheit ohne Reibung.",
      intro: "Wir verbinden regulatorisches Know-how mit technischer Umsetzung. Damit Compliance kein Projekt bleibt, sondern Routine wird.",
      more: "Mehr erfahren",
      items: [{
        n: "01",
        title: "Datenschutz",
        body: "Externer Datenschutzbeauftragter, Datenschutzkonzepte, Audits, Schulungen — alles aus einer Hand.",
        points: ["Externe DSB-Stellung", "DSGVO-Konzepte", "Mitarbeiterschulungen", "Datenschutz-Folgenabschätzung"]
      }, {
        n: "02",
        title: "Informationssicherheit",
        body: "ISMS-Aufbau nach ISO 27001 und NIS-2, IT-Audits und Penetrationstests — bis zur Zertifizierungsreife.",
        points: ["ISMS nach ISO 27001", "NIS-2 Readiness", "Penetrationstests", "Zertifizierungsbegleitung"]
      }, {
        n: "03",
        title: "KI-Beratung",
        body: "Rechtssicherer Einsatz von KI im Unternehmen — vom AI-Act bis zur internen Richtlinie. Pragmatisch statt theoretisch.",
        points: ["AI-Act Compliance", "KI-Richtlinien", "Use-Case Bewertung", "Mitarbeiter-Enablement"]
      }, {
        n: "04",
        title: "Hinweisgebersysteme",
        body: "Pflicht seit Juli 2023. Wir stellen externe Meldestellen, Software und Prozesse — anonym, rechtssicher, sofort einsatzbereit.",
        points: ["Externe Meldestelle", "Digitale Plattform", "Anonymitätsschutz", "Prozessdokumentation"]
      }]
    },
    serviceDetails: {
      "01": {
        slug: "datenschutz",
        lead: "Datenschutz ist keine Formalie, sondern Voraussetzung für jedes datengetriebene Geschäft. Wir übernehmen die Verantwortung dafür — von der Bestellung des Datenschutzbeauftragten bis zur gelebten Praxis in Ihren Abteilungen.",
        includes: [{
          title: "Externe DSB-Stellung",
          body: "Wir stellen Ihren gesetzlich bestellten Datenschutzbeauftragten — unabhängig, ohne Interessenkonflikt und ohne dass Sie internes Personal aufbauen müssen. Sie haben einen festen Ansprechpartner für Behörden, Betroffene und Geschäftsführung."
        }, {
          title: "DSGVO-Konzepte",
          body: "Verzeichnis der Verarbeitungstätigkeiten, technisch-organisatorische Maßnahmen, Auftragsverarbeitungsverträge und Löschkonzepte — wir bauen die Dokumentation auf, die im Ernstfall vor der Aufsichtsbehörde trägt."
        }, {
          title: "Mitarbeiterschulungen",
          body: "Datenschutz scheitert selten an der Technik, sondern am Verhalten. Wir schulen Ihr Team praxisnah: Phishing erkennen, Betroffenenanfragen richtig behandeln, Datenpannen sofort melden."
        }, {
          title: "Datenschutz-Folgenabschätzung",
          body: "Bei risikoreichen Verarbeitungen — Videoüberwachung, Profiling, neue Software — prüfen und dokumentieren wir die Zulässigkeit, bevor die Aufsichtsbehörde fragt."
        }],
        why: [{
          title: "Bußgelder vermeiden",
          body: "Verstöße gegen die DSGVO können mit bis zu 20 Mio. € oder 4 % des weltweiten Jahresumsatzes geahndet werden. Ein funktionierendes Datenschutzmanagement ist die günstigste Versicherung dagegen."
        }, {
          title: "Vertrauen schaffen",
          body: "Kunden, Partner und Ausschreibungen verlangen zunehmend belastbare Datenschutznachweise. Wer sie liefert, gewinnt Aufträge — wer nicht, fällt raus."
        }, {
          title: "72-Stunden-Pflicht erfüllen",
          body: "Bei einer Datenpanne bleiben nur 72 Stunden bis zur Meldung. Mit klaren Prozessen reagieren Sie souverän statt panisch."
        }]
      },
      "02": {
        slug: "informationssicherheit",
        lead: "Ein Sicherheitsvorfall kostet im Schnitt mehr als jede Präventionsmaßnahme. Wir bauen Ihr Informationssicherheits-Managementsystem so auf, dass es nicht nur zertifizierbar ist, sondern Angriffe real abwehrt.",
        includes: [{
          title: "ISMS nach ISO 27001",
          body: "Wir strukturieren Ihre Informationssicherheit nach dem internationalen Standard — von der Risikoanalyse über Richtlinien bis zum kontinuierlichen Verbesserungsprozess. Skalierbar für Mittelstand und Konzern."
        }, {
          title: "NIS-2 Readiness",
          body: "Die NIS-2-Richtlinie weitet die Pflichten auf viele neue Branchen aus. Wir prüfen, ob Sie betroffen sind, und bringen Sie auf das geforderte Niveau — inklusive Lieferketten- und Meldepflichten."
        }, {
          title: "Penetrationstests",
          body: "Wir greifen Ihre Systeme kontrolliert an, bevor es echte Angreifer tun. Sie erhalten einen priorisierten Maßnahmenkatalog statt einer Liste theoretischer Schwachstellen."
        }, {
          title: "Zertifizierungsbegleitung",
          body: "Von der Lückenanalyse bis zum Audit-Tag: Wir begleiten Sie durch die Zertifizierung und stehen bei der Prüfung an Ihrer Seite."
        }],
        why: [{
          title: "NIS-2 betrifft mehr als gedacht",
          body: "Mit NIS-2 fallen deutlich mehr Unternehmen unter verpflichtende Sicherheitsanforderungen — mit persönlicher Haftung der Geschäftsleitung bei Verstößen."
        }, {
          title: "Angriffe nehmen zu",
          body: "Ransomware und Lieferkettenangriffe treffen längst nicht mehr nur Großkonzerne. Der Mittelstand ist heute das bevorzugte Ziel."
        }, {
          title: "Kunden fordern Nachweise",
          body: "Ohne ISO 27001 oder TISAX scheitern Sie zunehmend an der Lieferantenfreigabe großer Auftraggeber."
        }]
      },
      "03": {
        slug: "ki-beratung",
        lead: "Künstliche Intelligenz verspricht enorme Effizienz — birgt aber rechtliche und datenschutzrechtliche Risiken. Wir machen den Einsatz in Ihrem Unternehmen rechtssicher und produktiv zugleich.",
        includes: [{
          title: "AI-Act Compliance",
          body: "Der EU AI Act klassifiziert KI-Systeme nach Risiko. Wir ordnen Ihre Anwendungen ein, dokumentieren sie korrekt und sorgen dafür, dass Sie die jeweiligen Pflichten erfüllen."
        }, {
          title: "KI-Richtlinien",
          body: "Wir erstellen verständliche interne Richtlinien: Welche Tools sind erlaubt, welche Daten dürfen hinein, wer trägt die Verantwortung? Klarheit statt Schatten-KI."
        }, {
          title: "Use-Case Bewertung",
          body: "Nicht jeder KI-Anwendungsfall lohnt sich oder ist zulässig. Wir bewerten Ihre Vorhaben nach Nutzen, Risiko und Rechtslage — bevor Budget fließt."
        }, {
          title: "Mitarbeiter-Enablement",
          body: "Wir befähigen Ihr Team, KI sicher und sinnvoll zu nutzen — mit Schulungen, die Berührungsängste abbauen und Fallstricke aufzeigen."
        }],
        why: [{
          title: "Der AI Act gilt bereits",
          body: "Die EU-KI-Verordnung ist in Kraft und wird stufenweise scharf gestellt. Verstöße können empfindliche Bußgelder nach sich ziehen."
        }, {
          title: "Datenschutz beim KI-Einsatz",
          body: "Wer Kundendaten in KI-Tools eingibt, riskiert ohne Konzept einen Datenschutzverstoß. Wir verbinden beide Welten."
        }, {
          title: "Wettbewerbsvorteil sichern",
          body: "Unternehmen, die KI früh und sauber einführen, sparen Zeit und Kosten — ohne in rechtliche Fallen zu tappen."
        }]
      },
      "04": {
        slug: "hinweisgebersysteme",
        lead: "Seit dem Hinweisgeberschutzgesetz sind interne Meldestellen für viele Unternehmen Pflicht. Wir richten sie rechtssicher ein — und schützen sowohl Hinweisgeber als auch Ihr Unternehmen.",
        includes: [{
          title: "Externe Meldestelle",
          body: "Wir übernehmen die Rolle der unabhängigen Meldestelle. Hinweise landen bei neutralen Profis statt bei Kollegen oder Vorgesetzten — das schafft Vertrauen und entlastet Ihre interne Organisation."
        }, {
          title: "Digitale Plattform",
          body: "Ein sicheres, jederzeit erreichbares Online-System für Meldungen — verschlüsselt, DSGVO-konform und einfach zu bedienen."
        }, {
          title: "Anonymitätsschutz",
          body: "Technisch und organisatorisch stellen wir sicher, dass Hinweisgeber anonym bleiben können — eine zentrale Anforderung des Gesetzes."
        }, {
          title: "Prozessdokumentation",
          body: "Fristen, Eingangsbestätigungen, Rückmeldungen: Wir dokumentieren jeden Schritt revisionssicher, damit Sie im Prüfungsfall lückenlos nachweisen können."
        }],
        why: [{
          title: "Gesetzliche Pflicht",
          body: "Unternehmen ab 50 Beschäftigten müssen eine interne Meldestelle betreiben. Fehlt sie, drohen Bußgelder."
        }, {
          title: "Repressalien sind verboten",
          body: "Das Gesetz schützt Hinweisgeber ausdrücklich vor Benachteiligung. Verstöße können teuer und rufschädigend werden."
        }, {
          title: "Fristen einhalten",
          body: "Eingangsbestätigung binnen 7 Tagen, Rückmeldung binnen 3 Monaten — ohne sauberen Prozess kaum zu schaffen."
        }]
      }
    },
    standards: {
      eyebrow: "Standards & Rahmenwerke",
      title: "Compliance, die hält.",
      intro: "Wir arbeiten nach den anerkannten Standards — und sorgen dafür, dass Ihre Umsetzung auch Audits standhält.",
      items: [{
        code: "DSGVO",
        title: "Datenschutz-Grundverordnung",
        body: "Volle Compliance für Unternehmen in DACH.",
        link: "dsgvo"
      }, {
        code: "ISO 27001",
        title: "Informationssicherheit",
        body: "ISMS-Aufbau bis zur Zertifizierung.",
        link: "iso27001"
      }, {
        code: "NIS-2",
        title: "Network and Information Security",
        body: "Readiness und Umsetzung für betroffene Sektoren.",
        link: "nis2"
      }, {
        code: "AI Act",
        title: "EU KI-Verordnung",
        body: "Klassifizierung, Dokumentation, interne Richtlinien.",
        link: "aiact"
      }],
      more: "Mehr erfahren"
    },
    standardDetails: {
      dsgvo: {
        eyebrowKind: "Standard",
        name: "DSGVO",
        lead: "Die Datenschutz-Grundverordnung regelt seit 2018 EU-weit den Umgang mit personenbezogenen Daten. Sie gilt für nahezu jedes Unternehmen — unabhängig von Größe und Branche.",
        includes: [{
          title: "Rechtmäßigkeit & Zweckbindung",
          body: "Personenbezogene Daten dürfen nur auf einer klaren Rechtsgrundlage und für festgelegte Zwecke verarbeitet werden."
        }, {
          title: "Betroffenenrechte",
          body: "Auskunft, Berichtigung, Löschung und Datenübertragbarkeit — Betroffene haben weitreichende Rechte, die fristgerecht zu erfüllen sind."
        }, {
          title: "Rechenschaftspflicht",
          body: "Unternehmen müssen jederzeit nachweisen können, dass sie die Vorgaben einhalten — etwa über ein Verzeichnis der Verarbeitungstätigkeiten."
        }, {
          title: "Meldepflicht bei Datenpannen",
          body: "Verletzungen des Schutzes personenbezogener Daten sind binnen 72 Stunden an die Aufsichtsbehörde zu melden."
        }],
        why: [{
          title: "Gilt branchenübergreifend",
          body: "Sobald personenbezogene Daten verarbeitet werden, greift die DSGVO — vom Einzelunternehmen bis zum Konzern."
        }, {
          title: "Hohe Bußgelder",
          body: "Verstöße können mit bis zu 20 Mio. € oder 4 % des weltweiten Jahresumsatzes geahndet werden."
        }, {
          title: "Vertrauensfaktor",
          body: "Nachweisbarer Datenschutz ist heute ein Entscheidungskriterium für Kunden und Partner."
        }]
      },
      iso27001: {
        eyebrowKind: "Standard",
        name: "ISO 27001",
        lead: "ISO/IEC 27001 ist der international führende Standard für Informationssicherheits-Managementsysteme (ISMS). Er beschreibt, wie Organisationen Informationssicherheit systematisch aufbauen, betreiben und verbessern.",
        includes: [{
          title: "Risikobasierter Ansatz",
          body: "Maßnahmen richten sich nach den tatsächlichen Risiken Ihrer Organisation — nicht nach einer starren Checkliste."
        }, {
          title: "Maßnahmenkatalog (Annex A)",
          body: "Der Standard liefert einen strukturierten Katalog von Sicherheitsmaßnahmen über Technik, Organisation und Personal hinweg."
        }, {
          title: "PDCA-Zyklus",
          body: "Plan-Do-Check-Act sorgt dafür, dass Sicherheit kontinuierlich überprüft und verbessert wird."
        }, {
          title: "Zertifizierbarkeit",
          body: "Ein akkreditierter Auditor bestätigt die Konformität — ein anerkannter Nachweis für Kunden und Partner."
        }],
        why: [{
          title: "International anerkannt",
          body: "ISO 27001 ist weltweit etabliert und schafft Vergleichbarkeit über Ländergrenzen hinweg."
        }, {
          title: "Oft Voraussetzung",
          body: "In Ausschreibungen und Lieferketten wird die Zertifizierung zunehmend vorausgesetzt."
        }, {
          title: "Struktur statt Stückwerk",
          body: "Sicherheit wird zum gesteuerten Prozess — nicht zur Sammlung punktueller Einzelmaßnahmen."
        }]
      },
      nis2: {
        eyebrowKind: "Standard",
        name: "NIS-2",
        lead: "Die NIS-2-Richtlinie hebt das Cybersicherheitsniveau in der EU deutlich an. Sie weitet die Pflichten auf zahlreiche neue Sektoren aus und nimmt die Geschäftsleitung in die Verantwortung.",
        includes: [{
          title: "Erweiterter Anwendungsbereich",
          body: "Viele mittlere und große Unternehmen aus zusätzlichen Sektoren fallen erstmals unter verbindliche Vorgaben."
        }, {
          title: "Risikomanagement-Maßnahmen",
          body: "Gefordert sind u. a. Risikoanalysen, Notfallpläne, Lieferkettensicherheit und Verschlüsselung."
        }, {
          title: "Meldepflichten",
          body: "Erhebliche Sicherheitsvorfälle müssen kurzfristig und gestuft an die Behörden gemeldet werden."
        }, {
          title: "Geschäftsleitungshaftung",
          body: "Die Leitungsebene ist verantwortlich — und haftet bei Versäumnissen persönlich."
        }],
        why: [{
          title: "Umsetzungsfristen laufen",
          body: "Die nationale Umsetzung ist im Gange — betroffene Unternehmen sollten jetzt handeln."
        }, {
          title: "Deutlich mehr Betroffene",
          body: "NIS-2 erfasst weit mehr Organisationen als die Vorgängerregelung."
        }, {
          title: "Persönliche Haftung",
          body: "Versäumnisse können unmittelbare Konsequenzen für die Leitungsebene haben."
        }]
      },
      aiact: {
        eyebrowKind: "Standard",
        name: "EU AI Act",
        lead: "Der EU AI Act ist das weltweit erste umfassende Gesetz zur Regulierung Künstlicher Intelligenz. Er ordnet KI-Systeme nach Risiko ein und knüpft daran abgestufte Pflichten.",
        includes: [{
          title: "Risikoklassen",
          body: "Von minimalem bis unannehmbarem Risiko — die Einstufung bestimmt, welche Pflichten für ein System gelten."
        }, {
          title: "Verbotene Praktiken",
          body: "Bestimmte Anwendungen, etwa Social Scoring, sind grundsätzlich untersagt."
        }, {
          title: "Transparenzpflichten",
          body: "Nutzer müssen erkennen können, wann sie mit KI interagieren oder KI-generierte Inhalte sehen."
        }, {
          title: "Anforderungen an Hochrisiko-KI",
          body: "Für sensible Einsatzbereiche gelten strenge Vorgaben an Daten, Dokumentation und menschliche Aufsicht."
        }],
        why: [{
          title: "Stufenweises Inkrafttreten",
          body: "Die Pflichten greifen nach und nach — Vorbereitung lohnt sich frühzeitig."
        }, {
          title: "Gilt auch für Anwender",
          body: "Nicht nur Entwickler, auch Unternehmen, die KI einsetzen, stehen in der Pflicht."
        }, {
          title: "Empfindliche Sanktionen",
          body: "Verstöße können mit hohen Bußgeldern belegt werden."
        }]
      }
    },
    industries: {
      eyebrow: "Branchen",
      title: "Erfahrung quer durch die Wirtschaft.",
      items: ["Verbände & Verbundgruppen", "Automotive", "Baumärkte & Baustoffe", "Elektronik", "Möbel & Inneneinrichtung", "Internationale Konzerne", "Mittelstand (KMU)", "Soziale & medizinische Einrichtungen"]
    },
    founder: {
      eyebrow: "Geschäftsführung",
      name: "Marcel Schwickert",
      role: "Geschäftsführer",
      quote: "Sicherheit ist kein Produkt, das man kauft — sie ist eine Haltung, die man lebt.",
      body: ["Seit fast 15 Jahren bin ich in der IT zu Hause — und unser Team bringt zusammen mehr als drei Jahrzehnte Erfahrung in Datenschutz, Informations- und IT-Sicherheit mit. In dieser Zeit haben wir eines gelernt: Die beste Compliance ist die, die im Alltag funktioniert — nicht die, die im Aktenordner verstaubt.", "Als Geschäftsführer der NoRisk Datasecurity GmbH stehe ich persönlich dafür ein, dass Beratung bei uns pragmatisch, verständlich und auf Augenhöhe bleibt. Kein Fachchinesisch — ein fester Ansprechpartner, der Verantwortung übernimmt und Sie persönlich kennt."],
      linkedin: "Auf LinkedIn vernetzen",
      linkedinUrl: "https://www.linkedin.com/in/marcel-schwickert/"
    },
    why: {
      eyebrow: "Warum NoRisk",
      title: "Familiengeführt. Zertifiziert. Pragmatisch.",
      items: [{
        n: "—",
        title: "Über 30 Jahre Praxis",
        body: "Wir haben Datenschutz noch vor der DSGVO gemacht. Diese Tiefe spürt man in jeder Empfehlung."
      }, {
        n: "—",
        title: "Zertifizierte Experten",
        body: "Unser Team trägt die einschlägigen Zertifizierungen — und bildet sich kontinuierlich weiter."
      }, {
        n: "—",
        title: "Schnelle Umsetzung",
        body: "Wir liefern Konzepte, die am Montag funktionieren. Keine 200-Seiten-PDFs, die niemand liest."
      }, {
        n: "—",
        title: "Individuell betreut",
        body: "Familiengeführt heißt: Sie haben immer einen festen Ansprechpartner — der Sie kennt, nicht nur Ihre Ticketnummer."
      }]
    },
    partners: {
      eyebrow: "Partnerschaften",
      title: "Vernetzt mit den richtigen Instanzen.",
      intro: "Wir sind Mitglied in den relevanten Fachverbänden und arbeiten mit etablierten Partnern."
    },
    about: {
      eyebrow: "Über uns",
      title: "Ein Familienunternehmen, das Sicherheit ernst nimmt.",
      body: ["Die NoRisk Datasecurity GmbH ist ein inhabergeführtes Beratungsunternehmen mit mehr als drei Jahrzehnten Erfahrung. Wir beraten Unternehmen jeder Größe in der DACH-Region — von der lokalen Sozialeinrichtung bis zum internationalen Konzern.", "Unsere Überzeugung: Datenschutz und Informationssicherheit sind kein Verwaltungsakt, sondern Voraussetzung für unternehmerische Freiheit. Wer seine Daten im Griff hat, kann Risiken eingehen."],
      stats: [["30+", "Jahre"], ["DACH", "Region"], ["Familien-", "geführt"]]
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Lassen Sie uns sprechen.",
      intro: "Ein 30-minütiges Erstgespräch reicht meist, um einzuschätzen, wo Sie stehen. Kostenlos und unverbindlich.",
      metaLabels: {
        direct: "Direkt",
        response: "Antwortzeit",
        region: "Region"
      },
      responseValue: "< 24 Std.",
      form: {
        name: "Name",
        company: "Unternehmen",
        email: "E-Mail",
        phone: "Telefonnummer",
        topic: "Thema",
        topics: ["Datenschutz", "Informationssicherheit", "Hinweisgeber", "KI-Beratung", "Sonstiges"],
        message: "Ihre Nachricht",
        consent: "Ich bin damit einverstanden, dass diese Daten zum Zweck der Kontaktaufnahme gespeichert und verarbeitet werden. Mir ist bekannt, dass ich meine Einwilligung jederzeit widerrufen kann. *",
        requiredNote: "* Kennzeichnet erforderliche Felder",
        submit: "Anfrage senden",
        sending: "Wird gesendet …",
        confirm: "Vielen Dank — wir melden uns binnen 24 Stunden.",
        error: "Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@norisk-datasecurity.com."
      }
    },
    footer: {
      tagline: "Sicher. Zuverlässig. Zukunftsorientiert.",
      address: ["NoRisk Datasecurity GmbH", "Am Windhügel 17A", "59457 Werl, Deutschland"],
      contact: ["+49 2922 80 33 707", "info@norisk-datasecurity.com"],
      legal: [{
        label: "Impressum",
        href: "impressum.html"
      }, {
        label: "Datenschutzerklärung",
        href: "datenschutz.html"
      }],
      copy: "© 2026 NoRisk Datasecurity GmbH"
    }
  },
  en: {
    nav: {
      services: "Services",
      standards: "Standards",
      about: "About",
      partners: "Partners",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Data Protection · Information Security · AI Advisory",
      title: "Your experts for data protection, IT security and AI.",
      titleParts: ["Data Protection.", "IT Security.", "AI Advisory."],
      subtitle: "For over 30 years we have guided companies across Germany, Austria and Switzerland — legally sound, pragmatic, and with measurable results.",
      ctaPrimary: "Book an intro call",
      ctaSecondary: "See our services",
      meta: [["30+", "Years of experience"], ["DACH", "Region"], ["GDPR", "ISO 27001 · NIS-2"]]
    },
    pillars: {
      eyebrow: "What we do",
      title: "Four disciplines. One goal: security without friction.",
      intro: "We combine regulatory know-how with technical execution — so compliance becomes routine, not a project.",
      more: "Learn more",
      items: [{
        n: "01",
        title: "Data Protection",
        body: "External Data Protection Officer, concepts, audits, training — all from a single source.",
        points: ["External DPO mandate", "GDPR concepts", "Employee training", "Data protection impact assessments"]
      }, {
        n: "02",
        title: "Information Security",
        body: "ISMS implementation per ISO 27001 and NIS-2, IT audits and penetration tests — all the way to certification.",
        points: ["ISMS per ISO 27001", "NIS-2 readiness", "Penetration testing", "Certification support"]
      }, {
        n: "03",
        title: "AI Advisory",
        body: "Legally sound deployment of AI in your company — from the AI Act to internal policy. Pragmatic, not theoretical.",
        points: ["AI Act compliance", "AI policies", "Use-case assessment", "Employee enablement"]
      }, {
        n: "04",
        title: "Whistleblower Systems",
        body: "Mandatory since July 2023. We provide external reporting offices, software and processes — anonymous, compliant, ready on day one.",
        points: ["External reporting office", "Digital platform", "Anonymity protection", "Process documentation"]
      }]
    },
    serviceDetails: {
      "01": {
        slug: "data-protection",
        lead: "Data protection isn't a formality — it's a precondition for any data-driven business. We take responsibility for it, from appointing your Data Protection Officer to living the practice in every department.",
        includes: [{
          title: "External DPO mandate",
          body: "We act as your legally appointed Data Protection Officer — independent, free of conflicts of interest, and without you having to build internal headcount. You get one fixed contact for authorities, data subjects and management."
        }, {
          title: "GDPR concepts",
          body: "Records of processing activities, technical and organisational measures, data processing agreements and deletion concepts — we build the documentation that holds up in front of the supervisory authority."
        }, {
          title: "Employee training",
          body: "Data protection rarely fails on technology — it fails on behaviour. We train your team hands-on: spotting phishing, handling data subject requests, reporting breaches immediately."
        }, {
          title: "Data protection impact assessments",
          body: "For high-risk processing — video surveillance, profiling, new software — we assess and document admissibility before the authority asks."
        }],
        why: [{
          title: "Avoid fines",
          body: "GDPR violations can be penalised with up to €20m or 4% of global annual revenue. A working data protection management system is the cheapest insurance against that."
        }, {
          title: "Build trust",
          body: "Customers, partners and tenders increasingly demand solid data protection evidence. Provide it and you win contracts; fail to and you're out."
        }, {
          title: "Meet the 72-hour duty",
          body: "After a data breach you have just 72 hours to report it. With clear processes you respond calmly instead of in panic."
        }]
      },
      "02": {
        slug: "information-security",
        lead: "A security incident costs more, on average, than any preventive measure. We build your information security management system so it isn't just certifiable, but actually repels attacks.",
        includes: [{
          title: "ISMS per ISO 27001",
          body: "We structure your information security to the international standard — from risk analysis through policies to continuous improvement. Scalable for mid-market and corporates."
        }, {
          title: "NIS-2 readiness",
          body: "The NIS-2 directive extends obligations to many new sectors. We check whether you're affected and bring you to the required level — including supply chain and reporting duties."
        }, {
          title: "Penetration testing",
          body: "We attack your systems under controlled conditions before real attackers do. You get a prioritised action plan, not a list of theoretical vulnerabilities."
        }, {
          title: "Certification support",
          body: "From gap analysis to audit day: we guide you through certification and stand beside you during the assessment."
        }],
        why: [{
          title: "NIS-2 affects more than you think",
          body: "NIS-2 brings far more companies under mandatory security requirements — with personal liability for management in case of violations."
        }, {
          title: "Attacks are increasing",
          body: "Ransomware and supply chain attacks no longer hit only large corporations. The mid-market is now the preferred target."
        }, {
          title: "Customers demand proof",
          body: "Without ISO 27001 or TISAX you increasingly fail the supplier approval of large clients."
        }]
      },
      "03": {
        slug: "ai-advisory",
        lead: "Artificial intelligence promises enormous efficiency — but carries legal and data protection risks. We make its use in your company legally sound and productive at the same time.",
        includes: [{
          title: "AI Act compliance",
          body: "The EU AI Act classifies AI systems by risk. We categorise your applications, document them correctly and ensure you meet the respective obligations."
        }, {
          title: "AI policies",
          body: "We create clear internal policies: which tools are allowed, what data may go in, who is responsible? Clarity instead of shadow AI."
        }, {
          title: "Use-case assessment",
          body: "Not every AI use case is worthwhile or permissible. We assess your plans by value, risk and legal situation — before budget flows."
        }, {
          title: "Employee enablement",
          body: "We empower your team to use AI safely and sensibly — with training that removes fear of contact and points out pitfalls."
        }],
        why: [{
          title: "The AI Act already applies",
          body: "The EU AI regulation is in force and is being phased in. Violations can result in significant fines."
        }, {
          title: "Data protection in AI use",
          body: "Feeding customer data into AI tools without a concept risks a data protection violation. We connect both worlds."
        }, {
          title: "Secure a competitive edge",
          body: "Companies that adopt AI early and cleanly save time and cost — without falling into legal traps."
        }]
      },
      "04": {
        slug: "whistleblower-systems",
        lead: "Since the Whistleblower Protection Act, internal reporting channels are mandatory for many companies. We set them up in a legally compliant way — protecting both whistleblowers and your company.",
        includes: [{
          title: "External reporting office",
          body: "We act as the independent reporting office. Reports reach neutral professionals instead of colleagues or supervisors — building trust and relieving your internal organisation."
        }, {
          title: "Digital platform",
          body: "A secure, always-available online system for reports — encrypted, GDPR-compliant and easy to use."
        }, {
          title: "Anonymity protection",
          body: "Technically and organisationally we ensure whistleblowers can remain anonymous — a central requirement of the law."
        }, {
          title: "Process documentation",
          body: "Deadlines, acknowledgements, feedback: we document every step in an audit-proof way, so you can demonstrate full compliance if checked."
        }],
        why: [{
          title: "Legal obligation",
          body: "Companies with 50+ employees must operate an internal reporting channel. Without one, fines loom."
        }, {
          title: "Reprisals are prohibited",
          body: "The law explicitly protects whistleblowers from disadvantage. Violations can be expensive and damage your reputation."
        }, {
          title: "Meet the deadlines",
          body: "Acknowledgement within 7 days, feedback within 3 months — hard to achieve without a clean process."
        }]
      }
    },
    standards: {
      eyebrow: "Standards & frameworks",
      title: "Compliance that holds.",
      intro: "We work to recognised standards — and make sure your implementation survives the audit.",
      items: [{
        code: "GDPR",
        title: "General Data Protection Regulation",
        body: "Full compliance for companies in the DACH region.",
        link: "dsgvo"
      }, {
        code: "ISO 27001",
        title: "Information security",
        body: "ISMS implementation through certification.",
        link: "iso27001"
      }, {
        code: "NIS-2",
        title: "Network and Information Security",
        body: "Readiness and execution for affected sectors.",
        link: "nis2"
      }, {
        code: "AI Act",
        title: "EU AI regulation",
        body: "Classification, documentation, internal policies.",
        link: "aiact"
      }],
      more: "Learn more"
    },
    standardDetails: {
      dsgvo: {
        eyebrowKind: "Standard",
        name: "GDPR",
        lead: "Since 2018 the General Data Protection Regulation governs the handling of personal data across the EU. It applies to almost every company — regardless of size or sector.",
        includes: [{
          title: "Lawfulness & purpose limitation",
          body: "Personal data may only be processed on a clear legal basis and for specified purposes."
        }, {
          title: "Data subject rights",
          body: "Access, rectification, erasure and portability — individuals hold far-reaching rights that must be fulfilled within deadlines."
        }, {
          title: "Accountability",
          body: "Companies must be able to demonstrate compliance at any time — for example via a record of processing activities."
        }, {
          title: "Breach notification",
          body: "Personal data breaches must be reported to the supervisory authority within 72 hours."
        }],
        why: [{
          title: "Applies across sectors",
          body: "As soon as personal data is processed, the GDPR applies — from sole traders to corporations."
        }, {
          title: "High fines",
          body: "Violations can be penalised with up to €20m or 4% of global annual revenue."
        }, {
          title: "A trust factor",
          body: "Demonstrable data protection is now a decision criterion for customers and partners."
        }]
      },
      iso27001: {
        eyebrowKind: "Standard",
        name: "ISO 27001",
        lead: "ISO/IEC 27001 is the leading international standard for information security management systems (ISMS). It describes how organisations build, run and improve information security systematically.",
        includes: [{
          title: "Risk-based approach",
          body: "Measures follow the actual risks of your organisation — not a rigid checklist."
        }, {
          title: "Control catalogue (Annex A)",
          body: "The standard provides a structured catalogue of security controls across technology, organisation and people."
        }, {
          title: "PDCA cycle",
          body: "Plan-Do-Check-Act ensures security is continuously reviewed and improved."
        }, {
          title: "Certifiability",
          body: "An accredited auditor confirms conformity — a recognised proof for customers and partners."
        }],
        why: [{
          title: "Internationally recognised",
          body: "ISO 27001 is established worldwide and creates comparability across borders."
        }, {
          title: "Often a prerequisite",
          body: "Certification is increasingly required in tenders and supply chains."
        }, {
          title: "Structure, not patchwork",
          body: "Security becomes a managed process — not a collection of isolated measures."
        }]
      },
      nis2: {
        eyebrowKind: "Standard",
        name: "NIS-2",
        lead: "The NIS-2 directive significantly raises the level of cybersecurity in the EU. It extends obligations to many new sectors and puts management in the line of responsibility.",
        includes: [{
          title: "Extended scope",
          body: "Many medium and large companies from additional sectors fall under binding requirements for the first time."
        }, {
          title: "Risk management measures",
          body: "Required measures include risk analysis, contingency plans, supply chain security and encryption."
        }, {
          title: "Reporting duties",
          body: "Significant security incidents must be reported to authorities promptly and in stages."
        }, {
          title: "Management liability",
          body: "The leadership level is responsible — and personally liable for failures."
        }],
        why: [{
          title: "Deadlines are running",
          body: "National implementation is underway — affected companies should act now."
        }, {
          title: "Many more affected",
          body: "NIS-2 covers far more organisations than its predecessor."
        }, {
          title: "Personal liability",
          body: "Failures can have direct consequences for the leadership level."
        }]
      },
      aiact: {
        eyebrowKind: "Standard",
        name: "EU AI Act",
        lead: "The EU AI Act is the world's first comprehensive law regulating artificial intelligence. It classifies AI systems by risk and attaches graduated obligations.",
        includes: [{
          title: "Risk classes",
          body: "From minimal to unacceptable risk — the classification determines which obligations apply to a system."
        }, {
          title: "Prohibited practices",
          body: "Certain applications, such as social scoring, are generally banned."
        }, {
          title: "Transparency duties",
          body: "Users must be able to recognise when they interact with AI or see AI-generated content."
        }, {
          title: "High-risk requirements",
          body: "Sensitive use cases face strict requirements on data, documentation and human oversight."
        }],
        why: [{
          title: "Phased entry into force",
          body: "Obligations apply step by step — early preparation pays off."
        }, {
          title: "Applies to deployers too",
          body: "Not only developers but also companies using AI bear obligations."
        }, {
          title: "Significant sanctions",
          body: "Violations can be subject to substantial fines."
        }]
      }
    },
    industries: {
      eyebrow: "Industries",
      title: "Experience across the economy.",
      items: ["Associations & buying groups", "Automotive", "DIY & building materials", "Electronics", "Furniture & interiors", "International corporations", "Mid-market (SMEs)", "Social & medical institutions"]
    },
    founder: {
      eyebrow: "Management",
      name: "Marcel Schwickert",
      role: "Managing Director",
      quote: "Security isn't a product you buy — it's a mindset you live.",
      body: ["I have spent nearly 15 years working in IT — and together our team brings over three decades of experience in data protection, information and IT security. In that time we've learned one thing: the best compliance is the one that works day to day — not the one gathering dust in a binder.", "As Managing Director of NoRisk Datasecurity GmbH, I personally make sure our advice stays pragmatic, clear and on equal footing. No jargon — a dedicated contact who takes responsibility and knows you personally."],
      linkedin: "Connect on LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/marcel-schwickert/"
    },
    why: {
      eyebrow: "Why NoRisk",
      title: "Family-run. Certified. Pragmatic.",
      items: [{
        n: "—",
        title: "30+ years in practice",
        body: "We were doing data protection before the GDPR existed. That depth shows in every recommendation."
      }, {
        n: "—",
        title: "Certified experts",
        body: "Our team holds the relevant certifications — and keeps learning, continuously."
      }, {
        n: "—",
        title: "Fast execution",
        body: "We deliver concepts that work on Monday. No 200-page PDFs nobody reads."
      }, {
        n: "—",
        title: "Individually supported",
        body: "Family-run means: you always have a dedicated contact — someone who knows you, not just your ticket number."
      }]
    },
    partners: {
      eyebrow: "Partnerships",
      title: "Connected to the right institutions.",
      intro: "We are members of the relevant industry bodies and work with established partners."
    },
    about: {
      eyebrow: "About us",
      title: "A family business that takes security seriously.",
      body: ["NoRisk Datasecurity GmbH is an owner-run consultancy with more than three decades of experience. We advise companies of every size across the DACH region — from local social institutions to international corporations.", "Our conviction: data protection and information security are not administrative tasks but the foundation of entrepreneurial freedom. When you control your data, you can take real risks."],
      stats: [["30+", "Years"], ["DACH", "Region"], ["Family", "-run"]]
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk.",
      intro: "A 30-minute intro call is usually enough to gauge where you stand. Free and without obligation.",
      metaLabels: {
        direct: "Direct",
        response: "Response",
        region: "Region"
      },
      responseValue: "< 24h",
      form: {
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone number",
        topic: "Topic",
        topics: ["Data protection", "Information security", "Whistleblowing", "AI advisory", "Other"],
        message: "Your message",
        consent: "I agree that this data may be stored and processed for the purpose of contacting me. I am aware that I can withdraw my consent at any time. *",
        requiredNote: "* Indicates required fields",
        submit: "Send request",
        sending: "Sending …",
        confirm: "Thank you — we'll get back to you within 24 hours.",
        error: "Sorry, something went wrong. Please try again or email us directly at info@norisk-datasecurity.com."
      }
    },
    footer: {
      tagline: "Secure. Reliable. Future-ready.",
      address: ["NoRisk Datasecurity GmbH", "Am Windhügel 17A", "59457 Werl, Germany"],
      contact: ["+49 2922 80 33 707", "info@norisk-datasecurity.com"],
      legal: [{
        label: "Imprint",
        href: "impressum.html"
      }, {
        label: "Privacy",
        href: "datenschutz.html"
      }],
      copy: "© 2026 NoRisk Datasecurity GmbH"
    }
  }
};
const NR_PARTNERS = [{
  name: "Gesellschaft für Datenschutz und Datensicherheit e.V.",
  src: "assets/partner-gdd.png"
}, {
  name: "eRecht 24",
  src: "assets/partner-erecht24.png"
}];
window.NRContent = NR_CONTENT;
window.NRPartners = NR_PARTNERS;