<?php
$name = "soso";
// require "admin/model/settingModel.php";
require "global.php";

$setting = new settingModel();

$theam = $setting->getSetting("theam")->value_settings;

include "theam/".$theam."/index.html";