<?php 

namespace App\Config;

class DBConfig 
{
    // TODO : Implement DOTENV file to get this configuration from 
    // Add your database config here 
    private $server = '';
    private $dbname = "";
    private $user = "";
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
