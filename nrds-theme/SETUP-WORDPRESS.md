# WordPress-Setup für NoRisk Datasecurity

## Schritt 1: WordPress bei Ionos installieren

1. Ionos-Kundenkenter öffnen → **Hosting** → **WordPress installieren**
2. Domain auswählen → Installation starten
3. WordPress-Admin-Zugangsdaten notieren

## Schritt 2: Theme hochladen und aktivieren

1. Den Ordner `nrds-theme/` als ZIP komprimieren
2. WordPress-Admin öffnen: `https://deine-domain.de/wp-admin`
3. **Design → Themes → Theme hochladen**
4. ZIP-Datei auswählen → **Jetzt installieren** → **Aktivieren**

## Schritt 3: Seiten anlegen

Im WordPress-Admin unter **Seiten → Neu erstellen** folgende vier Seiten anlegen:

| Titel                | Permalink (Slug) |
|----------------------|------------------|
| Startseite           | *(wird als Startseite gesetzt)*  |
| Leistungen           | `leistungen`     |
| Impressum            | `impressum`      |
| Datenschutzerklärung | `datenschutz`    |

> **Wichtig:** Die Slugs müssen **exakt** so heißen wie oben angegeben!
> Seite bearbeiten → rechts unter **Permalink** prüfen.

## Schritt 4: Startseite festlegen

1. **Einstellungen → Lesen**
2. „Startseite anzeigt" → **Eine statische Seite**
3. **Startseite:** „Startseite" auswählen
4. **Speichern**

## Schritt 5: Bilder und Assets hochladen

Per FTP (z. B. FileZilla) oder Ionos File-Manager folgende Dateien/Ordner
**in das WordPress-Wurzelverzeichnis** (neben `wp-content/`) hochladen:

```
/assets/
    logo-dark.png
    logo-light.png
    partner-gdd.png
    partner-erecht24.png
```

Außerdem die Logos **auch** in den Theme-Ordner kopieren:
```
/wp-content/themes/nrds-theme/assets/images/
    logo-dark.png
    logo-light.png
```

## Schritt 6: Kontaktformular einrichten

Die Datei `kontakt.php` aus dem Repository-Root
**in das WordPress-Wurzelverzeichnis** hochladen (neben `wp-config.php`).

Das Kontaktformular der Website sendet automatisch an diese Datei.

## Fertig!

Die Website sollte jetzt erreichbar sein:
- `https://deine-domain.de/` → Startseite (React-App)
- `https://deine-domain.de/leistungen/` → Leistungsseite
- `https://deine-domain.de/impressum/` → Impressum
- `https://deine-domain.de/datenschutz/` → Datenschutzerklärung

## Hinweise

- **React** wird automatisch von `unpkg.com` (CDN) geladen – Internetverbindung erforderlich
- **WordPress-Plugins:** Keine Plugins nötig; das Theme ist vollständig eigenständig
- **SSL:** Ionos aktiviert SSL automatisch – sicherstellen dass HTTPS erzwungen ist
  (**Einstellungen → Allgemein** → beide URLs auf `https://` setzen)
