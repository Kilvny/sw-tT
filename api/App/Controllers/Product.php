<?php

namespace App\Controllers;

use PDO;
use Exception;
use Throwable;
use App\Models\DVD;
use App\Models\Book;
use App\Models\Furniture;
use App\Core\Controller;
use App\Error_Handling\ErrorHandler;

class Product extends Controller
{


    private const TABLE = 'product';

    public function add()
    {
        try {
            if ($_SERVER["REQUEST_METHOD"] != "POST") {
                var_dump(['status' => 404, 'message' => 'Only POST method is allowed']);
                return ['status' => 404, 'message' => 'Only POST method is allowed'];
            }
            // receive the form data and restructure it 
            $formData = json_decode(file_get_contents("php://input"), true); // to deal with data as associatve array we specify second arg true 

    
    
            $type = $formData['product_type'];
            $model = "App\\Models\\" . $type;
            // create a new model object
            $product = new $model();
    
    
            // set and get the data. 
            // Common properties
            $product->setSku($formData['sku']);
            $product->setName($formData['name']);
            $product->setPrice($formData['price']);
            // dynamic properties 
            $method = array_keys(($formData['type']))[0];
            $product_specifications = $formData['type']; // if changes were made
    
    
            $setMethod = 'set' . ucfirst($method); // to make the method like setName, setmethod..
            $getMethod = 'get' . ucfirst($method); // to make the method like getName, getmethod..
            if (method_exists($product, $setMethod)) {
                $product->$setMethod($product_specifications[$method]); // setmethod(specifications)
            }
    

    
            $response = $product->saveToDatabase();
            var_dump($response);
            
        } catch (Throwable $e) {
            $err = ErrorHandler::errorHandle($e);
            $response = ['status' => 404, 'message' => "The following error occured while adding the product" . $err];
            
        } finally {
            return $response;
        }
    }


    public function getAll()
    {
        // we want to get the id's of products form product table 
        if ($_SERVER["REQUEST_METHOD"] != "GET") {
            var_dump(['status' => 404, 'message' => 'Only GET method is allowed']);
            return ['status' => 404, 'message' => 'Only GET method is allowed'];
        }
        header('Content-Type: application/json');
        $sql = "SELECT * FROM product_specification JOIN product on product.id = product_specification.product_id";
        $res = $this->run($sql)->fetchAll(PDO::FETCH_ASSOC);
        $data = json_encode($res);
        // echo($data);
        file_put_contents('php://output', $data);
        exit();
    }

    public function delete()
    {
        // get the id's from the request
        $ids = '';
        if ($_SERVER["REQUEST_METHOD"] != "DELETE") {
            var_dump(['status' => 404, 'message' => 'Only DELETE method is allowed']);
            return ['status' => 404, 'message' => 'Only DELETE method is allowed'];
        }

        // receive the form data and restructure it 
        $data = json_decode(file_get_contents("php://input"), true); // to deal with data as associatve 
        $ids = join(",", $data);
        var_dump($ids);

        try {
            $this->deleteByIds("product_specification", "product_id", $ids); // delete from the spec table first
            $rowsAffected = $this->deleteByIds(self::TABLE, "id", $ids);

            if ($rowsAffected < 1) {
                return ['status' => 404, 'message' => "Id's you're trying to delete doesn't exist. Please try again."];
            }

            $response = ['status' => 301, 'message' => 'Data deleted successfully. Affected records: ' . $rowsAffected];
            var_dump($response);
        } catch (Throwable $e) {
            $err = ErrorHandler::errorHandle($e);
            $response = ['status' => 404, 'message' => "The following error occured while deleting" . $err];
        } finally {
            return $response;
        }
    }
}
