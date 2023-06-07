<?php 
namespace App\Helpers;

class Helper
{
    public static function toTitleCase(string $str)
    {
        $result = "";
        $arr = array();
        $pattern = '/([;:,-.\/ X])/';
        $array = preg_split($pattern, $str, -1, PREG_SPLIT_DELIM_CAPTURE | PREG_SPLIT_NO_EMPTY);

        foreach ($array as $k => $v)
            $result .= ucwords(strtolower($v));

        //$result = str_replace("Mr.", "", $result); ->If you don't want Mr. in a String
        echo "<br /> $result <br />";
        return $result;
    }
}