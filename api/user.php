<?php
require "../global.php";

class user{
    public function getuserdata(){
        $usermodel = new userModel();
        return $usermodel->getUserData();
    }
}