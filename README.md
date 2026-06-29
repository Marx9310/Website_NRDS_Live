# NoRisk Datasecurity — Website

Website der NoRisk Datasecurity GmbH.

## Hosting: WordPress bei Ionos (aktiv)

Die Website läuft als **WordPress-Theme** auf Ionos.
Das fertige Theme liegt im Ordner `nrds-theme/`.

### Setup-Anleitung

→ Siehe [`nrds-theme/SETUP-WORDPRESS.md`](nrds-theme/SETUP-WORDPRESS.md)

### Kurzfassung

1. `nrds-theme/` als ZIP packen und in WordPress hochladen (**Design → Themes**)
2. 4 Seiten anlegen: `leistungen`, `impressum`, `datenschutz`, Startseite
3. Startseite festlegen: **Einstellungen → Lesen**
4. `kontakt.php` per FTP ins WordPress-Wurzelverzeichnis laden
5. `assets/`-Ordner (Logos, Bilder) per FTP ins Wurzelverzeichnis laden

## Repo-Struktur

| Ordner/Datei | Zweck |
|---|---|
| `nrds-theme/` | WordPress-Theme (aktives Hosting) |
| `nrds-theme/assets/css/` | Alle CSS-Dateien |
| `nrds-theme/assets/js/` | Alle JS-Dateien (inkl. React-App) |
| `kontakt.php` | PHP-Mailer für das Kontaktformular |
| `vendor/` | React 18 (self-hosted, Production Build) |
| `assets/` | Bilder & Logos (per FTP hochladen) |
| `.htaccess` | Apache-Konfiguration für Ionos (Sicherheits-Header, HTTPS, Caching) |
| `wrangler.toml` | *(nur für Cloudflare Pages – wird bei Ionos nicht verwendet)* |
| `_headers` | *(nur für Cloudflare Pages – wird bei Ionos nicht verwendet)* |

## Lokal vorschauen

```bash
python3 -m http.server 8080
# dann http://localhost:8080/index.html aufrufen
```
