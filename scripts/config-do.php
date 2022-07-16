<?php
require "../meta.php";
session_start();

function deleteCookie($name = "") {
  unset($_COOKIE[$name]);
  setcookie($name, null, -1, "/");
}

// Set default action to invalid (will return an error)
if ( !isset( $_GET["do"] ) ) {
  $_GET["do"] = "foo";
}

$time = time() + 30*24*60*60;

// Do action set above
switch ( $_GET["do"] ) {
  case "menu":
    // Check sent data
    if ( !isset( $_GET["newmenu"] ) ) { exit("417"); }
    // Get sent menu data
    $menu = $_GET["newmenu"];

    // Save menu data to cookies/session
    if ( $_SESSION["cookies"] ) { setcookie( "menu", $menu, $time, "/" ); }
    else { $_SESSION["menu"] = $menu; }

    // Exit
    exit("0");
    break;
  case "sadt":
    // Check sent data
    if (!isset( $_GET["place_name"] ) ||
        !isset( $_GET["place_cnes"] ) ||
        !isset( $_GET["place_phone"] ) ||
        !isset( $_GET["place_address"] ) ) { exit("417"); }
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

    // Save SADT data to cookies/session
    if ( $_SESSION["cookies"] ) { setcookie( "place", $place_str, $time, "/" ); }
    else { $_SESSION["place"] = $place; }

    // Exit
    exit("0");
    break;
  case "crm":
    // Check sent data
    if (!isset( $_GET["physician_name"] ) ||
        !isset( $_GET["physician_crm"] ) ||
        !isset( $_GET["physician_crm_uf"] ) ) { exit("417"); }
    // Get physician data
    $physician_name = $_GET["physician_name"];
    $physician_crm = $_GET["physician_crm"];
    $physician_crm_uf = $_GET["physician_crm_uf"];
    // Set patterns
    $crm_regex = "/\d{4,6}/";
    $uf_regex = "/AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO/";
    // Check CRM validity
    if ( !preg_match($crm_regex, $physician_crm) ) { $physician_crm = ""; }
    if ( !preg_match($uf_regex, $physician_crm_uf) ) { $physician_crm_uf = "SP"; }
    // Build place data for cookie
    $physician = [
      $physician_name,
      $physician_crm,
      $physician_crm_uf
    ];
    $physician_str = json_encode( $physician );

    // Save CRM data to cookies/session
    if ( $_SESSION["cookies"] ) { setcookie( "physician", $physician_str, $time, "/" ); }
    else { $_SESSION["physician"] = $physician; }

    // Exit
    exit("0");
    break;
  case "header":
    // Check sent data
    if ( !isset( $_GET["sr_header"] ) ) { exit("417"); }

    // SR
    $sr_header = $_GET["sr_header"];
    if ( $_SESSION["cookies"] ) { setcookie( "sr_header", $sr_header, $time, "/" ); }
    else { $_SESSION["sr_header"] = $sr_header; }

    // Exit
    exit("0");
    break;
  case "reset":
    // Delete all cookies and session data
    $_SESSION["menu"] = null;
    $_SESSION["place"] = null;
    $_SESSION["physician"] = null;
    $_SESSION["headers"] = null;
    $_SESSION["ethics"] = null;
    $_SESSION["cookies"] = null;
    deleteCookie("menu");
    deleteCookie("place");
    deleteCookie("physician");
    deleteCookie("headers");
    deleteCookie("accept_cookies");
    deleteCookie("ethics");

    // Exit
    exit("0");
    break;
  default:
    exit("404");
}
