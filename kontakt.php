<?php
/**
 * NoRisk Datasecurity — Kontaktformular-Mailer
 * Empfängt die Formulardaten (POST) und sendet sie per E-Mail an das Postfach.
 *
 * Antwortet mit JSON: { "ok": true } bei Erfolg, sonst { "ok": false, "error": "..." }.
 */

header('Content-Type: application/json; charset=utf-8');

// ── Konfiguration ────────────────────────────────────────────────
$EMPFAENGER = 'info@norisk-datasecurity.com';
// Absenderadresse MUSS eine Adresse eurer eigenen Domain sein, sonst
// stuft IONOS / der Empfänger die Mail als Spam ein oder lehnt sie ab.
$ABSENDER   = 'info@norisk-datasecurity.com';
$BETREFF_PREFIX = '[Website-Kontakt] ';
// ─────────────────────────────────────────────────────────────────

function fail($msg, $code = 400) {
  http_response_code($code);
  echo json_encode(['ok' => false, 'error' => $msg]);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  fail('Methode nicht erlaubt.', 405);
}

// Honeypot: echtes (unsichtbares) Feld "website" muss leer sein.
if (!empty($_POST['website'])) {
  // Bot erkannt — wir tun so, als wäre alles ok, senden aber nichts.
  echo json_encode(['ok' => true]);
  exit;
}

// Pflichtfelder
$name    = trim($_POST['name']    ?? '');
$company = trim($_POST['company'] ?? '');
$email   = trim($_POST['email']   ?? '');
$phone   = trim($_POST['phone']   ?? '');
$topic   = trim($_POST['topic']   ?? '');
$message = trim($_POST['message'] ?? '');
$consent = $_POST['consent'] ?? '';

if ($name === '' || $company === '' || $email === '') {
  fail('Bitte füllen Sie die Pflichtfelder aus.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  fail('Bitte geben Sie eine gültige E-Mail-Adresse an.');
}
if (empty($consent)) {
  fail('Bitte stimmen Sie der Datenverarbeitung zu.');
}

// Schutz vor Header-Injection: Zeilenumbrüche aus Kopf-relevanten Feldern entfernen.
function clean_header($v) {
  return str_replace(["\r", "\n", "%0a", "%0d"], '', $v);
}
$name  = clean_header($name);
$email = clean_header($email);

// E-Mail zusammenbauen
$betreff = $BETREFF_PREFIX . ($topic !== '' ? $topic : 'Neue Anfrage');

$body  = "Neue Anfrage über das Kontaktformular\n";
$body .= "----------------------------------------\n\n";
$body .= "Name:        " . $name . "\n";
$body .= "Unternehmen: " . $company . "\n";
$body .= "E-Mail:      " . $email . "\n";
$body .= "Telefon:     " . ($phone !== '' ? $phone : '—') . "\n";
$body .= "Thema:       " . ($topic !== '' ? $topic : '—') . "\n\n";
$body .= "Nachricht:\n" . ($message !== '' ? $message : '—') . "\n\n";
$body .= "----------------------------------------\n";
$body .= "Gesendet: " . date('d.m.Y H:i') . " Uhr\n";

$headers  = 'From: NoRisk Website <' . $ABSENDER . ">\r\n";
$headers .= 'Reply-To: ' . $name . ' <' . $email . ">\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";

$ok = @mail($EMPFAENGER, '=?UTF-8?B?' . base64_encode($betreff) . '?=', $body, $headers);

if ($ok) {
  echo json_encode(['ok' => true]);
} else {
  fail('Die E-Mail konnte nicht versendet werden.', 500);
}
