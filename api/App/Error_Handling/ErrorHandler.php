<?php 
namespace App\Error_Handling;

use Throwable;

class ErrorHandler
{
    public static function errorHandle(Throwable $e)
    {
        // log the error 
        self::logError($e);

        echo "An error occurred: " . $e->getMessage();
        return "AN error occurred: " . $e->getMessage();
    }

    private static function logError(Throwable $e)
    {
        $logMessage = date('Y-m-d H:i:s') . ' - ' . $e->getMessage() . "\n";
        file_put_contents(__DIR__."/error.log", $logMessage, FILE_APPEND);
    }
}