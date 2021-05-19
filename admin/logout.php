<?php
session_start();
require "../lib/helper.php";

if(!empty($_SESSION['user'])){  
    session_destroy();
}

helper::redirect("login.php");

