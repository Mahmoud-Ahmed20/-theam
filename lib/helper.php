<?php

class helper 
{
    public static function redirect($location){
        header("LOCATION: $location");
    }

    public static function role(){
        return $_SESSION['user']->role_id;
    }
}