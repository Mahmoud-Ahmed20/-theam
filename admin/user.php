<?php
session_start();
require "../global.php";

if(empty($_SESSION['user'])){
    helper::redirect("login.php");
}


// $user = new userModel();
// print_r($user->getUserData());


include "view/user.view.php";
