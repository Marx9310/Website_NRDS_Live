# NoRisk Datasecurity — Website

Statische Website (vorkompiliert) für NoRisk Datasecurity GmbH.

## Struktur

- `index.html` — Startseite
- `leistung.html` — Detailseiten für Leistungen & Standards (per URL-Parameter)
- `impressum.html`, `datenschutz.html` — Rechtsseiten
- `kontakt.php` — Versand des Kontaktformulars (benötigt PHP-Hosting, z. B. IONOS)
- `assets/` — Bilder & Logos
- `vendor/` — mitgelieferte React-Bibliothek (kein CDN nötig)
- `*.js` — vorkompilierte Skripte
- `*.css` — Stile

## Lokal ansehen

Einfach `index.html` im Browser öffnen.

## Hosting

Alle Dateien in das Wurzelverzeichnis des Webspace laden (so dass `index.html`
direkt erreichbar ist). Das Kontaktformular funktioniert nur auf einem Server
mit PHP-Unterstützung; auf reinem Static-Hosting (z. B. GitHub Pages) zeigt das
Formular die Seite an, kann aber keine E-Mails versenden.

## Hinweis zu GitHub Pages

GitHub Pages unterstützt **kein PHP** — `kontakt.php` läuft dort nicht.
Für den E-Mail-Versand braucht es PHP-Hosting (IONOS) oder einen externen
Formular-Dienst.
