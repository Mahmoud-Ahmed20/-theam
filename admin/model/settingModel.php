<?php


class settingModel extends Dcblogdev\PdoWrapper\Database
{
   public function setSetting(){

   }
   public function updateSetting($key,$value){
    $this->update('settings', ['value_settings' => $value], ['key_settings' => $key]);

   }

   public function getSetting($key){

    return $this->row("SELECT `value_settings` FROM `settings` WHERE `key_settings` = '$key'");
   }
}