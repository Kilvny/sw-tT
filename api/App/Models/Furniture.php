<?php 
namespace App\Models;

use App\Models\Product;

class Furniture extends Product 
{
    protected $height;
    protected $width;
    protected $length;
    protected $dimensions;
    protected $unit = "CM"; 
    protected $type = 'dimensions';


    public function setDimensions($dimensions) 
    {
        foreach($dimensions as $key => $value) {
            $property = $key;

            if(property_exists($this, $property)){
                $this->$property = $value;
            }
        }
        $this->dimensions = $this->height . 'x' . $this->width . 'x' . $this->length;
    }

    public function getDimensions()
    {
        return $this->dimensions;
    }

    public function getFromDatabase() {
        echo "SKU: " . $this->getSku() . "<br>";
        echo "Name: " . $this->getName() . "<br>";
        echo "Price: " . $this->getPrice() . "<br>";
        echo "Dimensions: " . $this->getDimensions() . "<br>";
      }
}

