<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitee70723fd3132b6d05f0ff016c58b71b
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'Aliyun\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Aliyun\\' => 
        array (
            0 => __DIR__ . '/../..' . '/lib',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitee70723fd3132b6d05f0ff016c58b71b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitee70723fd3132b6d05f0ff016c58b71b::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
