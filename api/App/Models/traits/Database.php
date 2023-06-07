<?php

namespace App\Models\traits;

use PDO;
use ErrorHandler;
use App\Config\DBConfig;

trait Database
{

    private $conn;

    public function __construct()
    {
        $this->connect(new DBConfig());
    }

    public function connect(DBConfig $config)
    {
        try {
            $conn = new PDO(
                'mysql:host=' . $config->getServer() . ';dbname=' . $config->getDBName(),
                $config->getUser(),
                $config->getPassword()
            );
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn = $conn;
        } catch (\Throwable $e) {

            throw new \Exception("Database Error");
            ErrorHandler::errorHandle($e);
        }
    }



    public function isUnique(string $table, string $column, string $value): bool
    {
        $sql = "SELECT * FROM " .$table." WHERE ".$table.".".$column." = "."'". $value . "';";
        $res = $this->run($sql)->fetchAll(PDO::FETCH_ASSOC);
        
        if (!empty($res)) {
            $columnVal = $res[0][$column];
        
            if ($columnVal == $value) {
                return false;
            }
        }        
        return true;
    }

    public function getLastId(string $table)
    {
        $sql = "SELECT MAX(id) as id FROM $table ORDER BY id DESC;";
        $statment = $this->conn->prepare($sql);
        $statment->execute();
        $res = $statment->fetchAll();
        $id = $res[0]['id'];
        if ($id === null) {
            $id = 0;
        }
        return $id;
    }



    public function insert($table, $data)
    {
        //add columns into comma seperated string
        $columns = implode(',', array_keys($data));

        //get values
        $values = array_values($data);

        $placeholders = array_map(function ($val) {
            return '?';
        }, array_keys($data));

        //convert array into comma seperated string
        $placeholders = implode(',', array_values($placeholders));

        $this->run("INSERT INTO $table ($columns) VALUES ($placeholders)", $values);

        return $this->getLastId($table);
    }



    public function deleteByIds(string $table, string $column, string $ids)
    {
        $stmt = $this->run("DELETE FROM $table WHERE $column IN ($ids)");

        return $stmt->rowCount();
    }



    public function run($sql, $args = [])
    {
        if (empty($args)) {
            return $this->conn->query($sql);
        }

        $stmt = $this->conn->prepare($sql);

        //check if args is associative or sequential?
        $is_assoc = (array() === $args) ? false : array_keys($args) !== range(0, count($args) - 1);
        if ($is_assoc) {
            foreach ($args as $key => $value) {
                if (is_int($value)) {
                    $stmt->bindValue(":$key", $value, PDO::PARAM_INT);
                } else {
                    $stmt->bindValue(":$key", $value);
                }
            }
            $stmt->execute();
        } else {
            $stmt->execute($args);
        }

        return $stmt;
    }
}
