<?php
session_start();

if ( isset($_GET["job"]) ) {
  $job = $_GET["job"];
} else {
  exit(500);
}
if ( isset($_GET["value"]) ) {
  $value = $_GET["value"];
}

switch ($job) {
  case "deny":
    $_SESSION["cookies"] = false;
    break;
  case "accept":
    $_SESSION["cookies"] = true;
    setcookie("accept_cookies", "true", time() + 30*24*60*60, "/" );
    break;
  case "ethics":
    if ( $_SESSION["cookies"] ) { setcookie("ethics", "true", time() + 30*24*60*60, "/" ); }
    else { $_SESSION["ethics"] = true; }
    break;
  default:
    exit(404);
}
?>
