<?php
session_start();
require "../global.php";

if(empty($_SESSION['user'])){
    helper::redirect("login.php");
}
$setting = new settingModel();

if(isset($_GET['theam'])){
    
    $setting->updateSetting('theam',$_GET['theam']);
    helper::redirect("theam.php");
}else{
    include "view/theam.view.php";

}




