<?php 

namespace App\Config;

class DBConfig 
{
    // TODO : Implement DOTENV file to get this configuration from 
    private $server = 'localhost';
    private $dbname = "ecommerce_test";
    private $user = "root";
    private $pass = "";

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