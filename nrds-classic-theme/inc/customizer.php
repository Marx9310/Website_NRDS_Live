<?php
function nrds_customizer(WP_Customize_Manager $wp_customize) {
    $wp_customize->add_section('nrds_contact', [
        'title'    => 'Kontaktdaten',
        'priority' => 30,
    ]);

    $fields = [
        ['nrds_email',    'E-Mail-Adresse',       'info@norisk-datasecurity.com'],
        ['nrds_phone',    'Telefonnummer',         '+49 2922 80 33 707'],
        ['nrds_linkedin', 'LinkedIn-URL',          'https://www.linkedin.com/in/marcel-schwickert/'],
        ['nrds_address1', 'Adresszeile 1',         'Am Windhügel 17A'],
        ['nrds_address2', 'Adresszeile 2',         '59457 Werl'],
        ['nrds_address3', 'Adresszeile 3 (Land)',  'Deutschland'],
    ];

    foreach ($fields as [$id, $label, $default]) {
        $wp_customize->add_setting($id, ['default' => $default, 'sanitize_callback' => 'sanitize_text_field']);
        $wp_customize->add_control($id, ['label' => $label, 'section' => 'nrds_contact', 'type' => 'text']);
    }
}
add_action('customize_register', 'nrds_customizer');
