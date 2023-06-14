<?php 

namespace App\Config;

class DBConfig 
{
    // TODO : Implement DOTENV file to get this configuration from 
    private $server = 'sql305.byetcluster.com';
    private $dbname = "ecommerce";
    private $user = "if0_34419342";
    private $pass = "2RaUwBgYHMc";

    public function getServer()
    {
        return $this->server;
    }

    public function getDBName()
    {
        return $this->dbname;
    }

    public function getUser()
    {
        return $this->user;
    }

    public function getPassword()
    {
        return $this->pass;
    }
}