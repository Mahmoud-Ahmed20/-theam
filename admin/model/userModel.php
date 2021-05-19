<?php



class userModel extends Dcblogdev\PdoWrapper\Database
{
    public function getUserData(){
       return  $this->rows("SELECT * FROM `user`");
    }

    public function getUserByEmail($email,$password){
        return  $this->row("SELECT * FROM `user` WHERE `email` = '$email' && `password` = '$password'");
    }
}