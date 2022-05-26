<?php
require "../meta.php";
session_start();

$menu = $_GET["newmenu"];

// Get place data
$place_name = $_GET["place_name"];
$place_cnes = $_GET["place_cnes"];
$place_phone = $_GET["place_phone"];
$place_address = $_GET["place_address"];
// Set phone pattern
$phone_regex = "/((\(\d{2}\)|\d{2})?( )?(\d)?( |-)?(\d{4})( |-)?(\d{4}))/";
// Check place data validity
if ( strlen( $place_name ) > 80 ) { $place_name = substr($place_name, 0, 80); }
if ( strlen( $place_cnes ) > 7 ) { $place_name = substr($place_name, 0, 7); }
if ( !preg_match($phone_regex, $place_phone) ) { $place_phone = "(11) 3066-8000"; }
if ( strlen( $place_address ) > 80 ) { $place_address = substr($place_address, 0, 80); }
// Build place data for cookie
$place = [
  $place_name,
  $place_cnes,
  $place_phone,
  $place_address
];
$place_str = json_encode( $place );

// Get physician data
$physician_name = $_GET["physician_name"];
$physician_crm = $_GET["physician_crm"];
$physician_crm_uf = $_GET["physician_crm_uf"];
// Set patterns
$crm_regex = "/\d{4,6}/";
$uf_regex = "/AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO/";
// Check CRM validity
if ( !preg_match($crm_regex, $physician_crm) ) { die("406"); }
if ( !preg_match($uf_regex, $physician_crm_uf) ) { die("406"); }
// Build place data for cookie
$physician = [
  $physician_name,
  $physician_crm,
  $physician_crm_uf
];
$physician_str = json_encode( $physician );

$time = time() + 30*24*60*60;

if ( $_SESSION["cookies"] ) {
  setcookie( "menu", $menu, $time, "/" );
  setcookie( "place", $place_str, $time, "/" );
  setcookie( "physician", $physician_str, $time, "/" );
} else {
  $_SESSION["menu"] = $menu;
  $_SESSION["place"] = $place;
}

echo "0";