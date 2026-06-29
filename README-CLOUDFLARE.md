# Cloudflare Pages — Anleitung (NoRisk Website)

Diese Website ist **statisch** und braucht **keinen Build**. Auf Cloudflare Pages
läuft kein PHP — der E-Mail-Versand des Kontaktformulars übernimmt stattdessen
die mitgelieferte **Pages Function** `functions/kontakt.php.js` (über den Dienst
Resend). `kontakt.php` wird auf Cloudflare nicht verwendet (kann im Repo bleiben,
schadet nicht).

## 1. Projekt anlegen
1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git** → dein GitHub-Repo wählen.
2. Build-Einstellungen:
   - **Framework preset:** None
   - **Build command:** *(leer lassen)*
   - **Build output directory:** `/`  (bzw. den Ordner, in dem `index.html` liegt)
3. **Save and Deploy.**

> Wichtig: Die Dateien müssen im Repo-Wurzelverzeichnis liegen (also der *Inhalt*
> des `deploy`-Ordners), damit `index.html` und der Ordner `functions/` direkt
> gefunden werden.

## 2. Kontaktformular aktivieren (Resend)
Ohne diesen Schritt zeigt das Formular einen Fehler beim Senden.
1. Konto bei **https://resend.com** erstellen.
2. Domain **norisk-datasecurity.com** in Resend verifizieren (DNS-Einträge setzen).
3. Einen **API Key** erzeugen.
4. In Cloudflare: **Pages-Projekt → Settings → Environment variables → Production**:
   - `RESEND_API_KEY` = *(dein Key)*
   - *(optional)* `MAIL_TO` = `info@norisk-datasecurity.com`
   - *(optional)* `MAIL_FROM` = `NoRisk Website <info@norisk-datasecurity.com>`
5. Neu deployen (oder Git-Push) → Formular sendet an `info@norisk-datasecurity.com`.

## 3. Domain verbinden
Pages-Projekt → **Custom domains** → `norisk-datasecurity.com` hinzufügen und den
DNS-Anweisungen folgen.

## Dateien für Cloudflare
- `wrangler.toml` — Projektkennzeichnung (kein Build).
- `_headers` — Caching/Security-Header.
- `functions/kontakt.php.js` — Kontaktformular-Versand (ersetzt `kontakt.php`).

## Alternative
Wer lieber PHP nutzt (z. B. **IONOS/Hostinger**), nimmt `kontakt.php` und braucht
weder Resend noch die Pages Function. Beides ist im Paket enthalten – je nach Host
greift das eine oder das andere.
