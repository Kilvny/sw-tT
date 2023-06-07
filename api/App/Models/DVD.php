<?php
namespace App\Models;

use App\Models\Product;


class DVD extends Product 
{
    protected $size;
    protected $unit = "MB"; 
    protected $type = 'size';

    public function setSize($size)
    {
        $this->size = $size; 
    }

    public function getSize()
    {
        return $this->size;
    }

    public function getFromDatabase() {
        echo "SKU: " . $this->getSku() . "<br>";
        echo "Name: " . $this->getName() . "<br>";
        echo "Price: " . $this->getPrice() . "<br>";
        echo "Size: " . $this->getSize() . "<br>";
      }
}