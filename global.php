<?php
define("DS",DIRECTORY_SEPARATOR);
define("ROOT",dirname(__DIR__).DS);
define("Project",ROOT."project".DS);

define("ADMIN",Project."admin".DS);
define("MODEL",ADMIN."model".DS);
define("LIB",Project."lib".DS);



require LIB."Database.php";
require LIB."helper.php";

require MODEL."settingModel.php";
require MODEL."userModel.php";
