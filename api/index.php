<?php   
// load appliaction class 
use App\Core\App;


// autoload compatibility
require_once __DIR__ . '/vendor/autoload.php'; 

// Allow access from different cross origins 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header('Access-Control-Max-Age: 86400');    // cache for 1 day
header('Content-Type: application/pdf , application/json, text/javascript, text/plain');



// echo "<pre>";
// print_r($_SERVER); // great for debugging

// start the app 
$app = new App();