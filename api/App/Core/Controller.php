<?php 

namespace App\Core;

use App\Config\DBConfig;
use App\Models\traits\Database;

class Controller {
    use Database;

    // protected static $conn;

    public function __construct()
    {
        $this->connect(new DBConfig());
    }

    
}

