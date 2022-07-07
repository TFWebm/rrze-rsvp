<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita95bbde1ec3c22fba48df77b0afeea4a
{
    public static $files = array (
        'ad901de1e5d16b81f427bfe3dc3de508' => __DIR__ . '/..' . '/cmb2/cmb2/init.php',
        '1e0262dbe4957d3cb3cb6f919a868642' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf.php',
        '41f60c6a01af6cd57ffb6e02b5f0e5c9' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf_barcodes_2d.php',
    );

    public static $prefixLengthsPsr4 = array (
        'R' => 
        array (
            'RRZE\\RSVP\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'RRZE\\RSVP\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Datamatrix' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/barcodes/datamatrix.php',
        'PDF417' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/barcodes/pdf417.php',
        'QRcode' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/barcodes/qrcode.php',
        'TCPDF' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf.php',
        'TCPDF2DBarcode' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf_barcodes_2d.php',
        'TCPDFBarcode' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf_barcodes_1d.php',
        'TCPDF_COLORS' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_colors.php',
        'TCPDF_FILTERS' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_filters.php',
        'TCPDF_FONTS' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_fonts.php',
        'TCPDF_FONT_DATA' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_font_data.php',
        'TCPDF_IMAGES' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_images.php',
        'TCPDF_IMPORT' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf_import.php',
        'TCPDF_PARSER' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf_parser.php',
        'TCPDF_STATIC' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_static.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita95bbde1ec3c22fba48df77b0afeea4a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita95bbde1ec3c22fba48df77b0afeea4a::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInita95bbde1ec3c22fba48df77b0afeea4a::$classMap;

        }, null, ClassLoader::class);
    }
}