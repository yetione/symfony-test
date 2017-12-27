var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('./public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .autoProvideVariables({ Popper: ['popper.js', 'default'] })
    .addEntry('app', './assets/js/app.js')
    //.addEntry('js/bootstrap/formhelpers', './assets/js/bootstrap/bootstrap-formhelpers.min.js')
    .addStyleEntry('css/bootstrap/formhelpers', './assets/css/bootstrap-formhelpers.min.css')

    //.addEntry('js/jquery/maskedinput', './assets/js/jquery/jquery.maskedinput.min.js')

    //.addEntry('js/jquery/intlTelInput', './assets/js/jquery/intlTelInput.min.js')
    //.addEntry('js/jquery/utils', './assets/js/jquery/utils.js')
    .addStyleEntry('css/jquery/intlTelInput', './assets/css/intlTelInput.css')


    //.addEntry('template', './assets/yeti-shop/src/app/app.component.html')
    .enableSassLoader()
    .enableBuildNotifications()
    .cleanupOutputBeforeBuild()
    .enableTypeScriptLoader(function (typeScriptConfigOptions) {
        //typeScriptConfigOptions.experimentalDecorators = true;
    })
    .enableSourceMaps(!Encore.isProduction())

    // uncomment to create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    // uncomment to define the assets of the project

    //.addEntry('ngApp', './assets/yeti-shop/src/main.ts')
    //.addStyleEntry('css/app', 'assets/css/style.scss')


    // uncomment for legacy applications that require $/jQuery as a global variable
    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
