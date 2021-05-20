const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js('resources/vuedir/main.js', 'public/vuedir');
mix.js('resources/vuedir/assets/js/app.min.js', 'public/vuedir/js');
mix.sass('resources/vuedir/sass/app.scss', 'public/vuedir/css');
mix.sass('resources/vuedir/sass/bundle.scss', 'public/vuedir/css');
/*
mix.js('resources/vuedir/appa.js', 'public/vuedir').sass('resources/sass/app.scss', 'public/vuedir/css');
*/
