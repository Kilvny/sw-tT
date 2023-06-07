<?php  
namespace App\Controllers;

use App\Core\Controller;



class HomeController extends Controller
{
    public function index()
    {
        $productData = ['sku' => 'DVD101', 'name' => 'Admin',"price" => 10.5];
        $specificData = ["type" => 'size' , "value" => 677 , "unit" => "MB"];
        $id = $this->getLastId('product') + 1;
        $productData['id'] = $id;
        $specificData['product_id'] = $id;
        echo "<pre>";

        var_dump($productData);
        echo "<br/>";
        var_dump($specificData);
    }
}