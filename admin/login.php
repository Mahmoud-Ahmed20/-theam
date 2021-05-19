<?php
session_start();
require "../global.php";

if(isset($_POST['email']))
{
    $user = new userModel();
    //login logic 
   $data =  $user->getUserByEmail($_POST['email'],$_POST['password']);
   if(!empty($data) && $data > 0){
    $_SESSION['user'] = $data;
        helper::redirect("dashboard.php");
   }else{
        helper::redirect("login.php");
   }
    
}else{
    include "view/login.view.php";
}


