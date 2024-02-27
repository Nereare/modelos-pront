<?php
require_once("vendor/autoload.php");

if (isset($_GET["hospital"]) && isset($_GET["accident"])) {
  // If all base data was sent, retrieve and parse it
  $today = date("Y-m-d");
  $hospital = json_decode($_GET["hospital"]);
  $accident = json_decode($_GET["accident"]);
  $notification = new \Nereare\Pront\Notification();
  // And export the notification
  $notification->sharps_injury($today, $hospital, $accident);
} else {
  // If any base data is missing
  die("428b");
}
