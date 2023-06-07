<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit8a772c7ba8645a01895316dbcd644fcd
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/App',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit8a772c7ba8645a01895316dbcd644fcd::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit8a772c7ba8645a01895316dbcd644fcd::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit8a772c7ba8645a01895316dbcd644fcd::$classMap;

        }, null, ClassLoader::class);
    }
}
