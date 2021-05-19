<?php
session_start();
require "../global.php";
if(empty($_SESSION['user'])){
    helper::redirect("login.php");
}elseif(helper::role() != 2){
    helper::redirect("user.php");
}





include "view/dashboard.view.php";
