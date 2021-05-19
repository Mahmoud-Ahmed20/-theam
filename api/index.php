<?php


if($_GET['method'] == 'user'){
    require "user.php";
    $user = new user();
   echo  json_encode($user->getuserdata(),true);
}