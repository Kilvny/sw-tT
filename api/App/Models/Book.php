<?php 
namespace App\Models;

use App\Models\Product;

class Book extends Product 
{
    protected $weight;
    protected $unit = "KG"; 
    protected $type = 'weight';

    public function setWeight($weight)
    {
        $this->weight = $weight;
    }

    public function getWeight()
    {
        return $this->weight;
    }

    // in case we wanted to work with saved products one by one
    public function getFromDatabase() 
    {
        echo "SKU: " . $this->getSku() . "<br>";
        echo "Name: " . $this->getName() . "<br>";
        echo "Price: " . $this->getPrice() . "<br>";
        echo "Weight: " . $this->getWeight() . "<br>";
    }
}