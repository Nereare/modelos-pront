<?php
require "../meta.php";
session_start();

$menu = $_GET["newmenu"];

if ( $_SESSION["cookies"] ) {
  setcookie( "menu", $menu, time() + 30*24*60*60, "/" );
} else {
  $_SESSION["menu"] = $menu;
}
