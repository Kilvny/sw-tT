<?php 

namespace App\Core;

use App\Helpers\Helper;

class App {

    private $method;
    private $controller;
    private $params;

    public function __construct()
    {
        $this->getURL();
        $this->render();
    }

    // private function getURL() {
    //     $_SERVER['REQUEST_URI'];
    //     return $_SERVER['QUERY_STRING']; // without specifying the root folder name (mvc/ etc)
    // }

    public function test () {
        echo __METHOD__, PHP_EOL;
    }

    private function getURL() {
        /**
         * @return -1 if no URL is specified
         * 
         */
        // gets the url as elements of an array
        if(!isset($_SERVER['QUERY_STRING'])) {
            return -1; // no query string
        }
        $url = explode("/",$_SERVER['QUERY_STRING']); // split string into an array with seperator 
        $this->controller = !empty($url[0]) ? Helper::toTitleCase($url[0]): "HomeController"; 
        // echo $this->controller;
        $this->method = !empty($url[1]) ? $url[1] : $this->method;
        // echo $this->method;
        unset($url[0], $url[1]);
        // set the parameters into an array
        $this->params = array_values($url); 
        // print_r($this->params);
    }


    private function render() {
        $controller = "App\Controllers\\" . $this->controller;
        if (!class_exists($controller)) {
            echo "class $controller does not exist";
            return;
        } 
        
        if(!method_exists($controller, $this->method)) {
            echo "no method is specified or method $this->method does not exist";
            return;
        }
        // if method exists within the controller, create a new instance of the controller and call the method
        $controller = new $controller(); 
        call_user_func_array([$controller, $this->method], $this->params);
    }
}



// TODO 
/**
 * We get the method we want from the URI of the API, like
 *  api/v1/product/add, 
 * delete -> api/v1/product/delete with a list of id's as parameter
 * 
 * The other main core point is :
 * @return :) ركز يعني 
 * I want to have a main add method that will create instance of $product = new product();
 * that will be either a DVD, Furniture, or Book! depending on the received type parameter!
 * 
 * @param str
 * After that there's two options, one is to serialize the object, second is to set and get the values
 */


 // TODO - just take copy of this great MCV infrastructure to use it in the future with any other projects