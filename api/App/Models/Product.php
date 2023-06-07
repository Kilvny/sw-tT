<?php

namespace App\Models;

use App\Models\traits\Database;

abstract class Product
{
    use Database;
    protected $sku;
    protected $name;
    protected $price;
    protected $unit;
    protected $type;


    public function setSku($sku)
    {
        $this->sku = $sku;
    }

    public function getSku()
    {
        return $this->sku;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }


    public function setPrice($price)
    {
        $this->price = $price;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function saveToDatabase()
    {
        // now prepare the data for saving 
        // get the last id from the database and init insertion data arrays
        $id = $this->getLastId('product') + 1;
        $productData['id'] = $id;
        $specificData['product_id'] = $id;

        $getProperty = "get" . ucfirst($this->type);
        $specificData['type'] = $this->type;
        $specificData['unit'] = $this->unit;
        $specificData['value'] = $this->$getProperty();
        $productData['sku'] = $this->getSku();
        $productData['name'] = $this->getName();
        $productData['price'] = $this->getPrice();


        // validate if sku is unique 
        $value = $this->getSku();
        $column = 'sku';

        if (!$this->isUnique('product', $column, $value)) {
            $response = ['status' => 404, 'message' => 'SKU is not unique. Please try another combination'];
            return json_encode($response);
        }

        //   insert the data into the database
        $this->insert('product', $productData);
        $this->insert('product_specification', $specificData);
        $response = ['status' => 201, 'message' => 'Data successfully saved.'];
        return $response;
    }
    abstract public function getFromDatabase();
}
