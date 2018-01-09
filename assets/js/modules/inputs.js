require('../../css/parts/forms.scss');

define('modules/inputs', ['jquery'], function($){
    (function($passwordInputs) {
        if (!$passwordInputs.length) {
            return;
        }
        require(['../jquery/password-input'], function(PassworInput) {
            $passwordInputs.passwordInput();
        });
    })($('.j-password-input'));


    (function($datePickers) {
        if (!$datePickers.length) {
            return;
        }
        require(['gijgo', '../jquery/jquery.maskedinput.min'], function(gijgo) {
            $datePickers.each(function(){
                var dateFormat = $(this).data('format') || 'dd.mm.yyyy';
                console.log(dateFormat);
                $(this).datepicker({
                    format:dateFormat,
                    uiLibrary:'bootstrap4',
                    icons: {
                        rightIcon: '<div class="input-group-text"><i class="far fa-calendar-alt"></i></div>'
                    }
                }).mask(dateFormat.replace(/[a-zA-Z]/g, '9'));
            });
        });
    })($('.j-datepicker'));

    (function($countrySelects){
        if (!$countrySelects.length){
            return;
        }
        require(['../jquery/countrySelect.min'], function (CountrySelect) {
            $countrySelects.each(function () {
                $(this).countrySelect();
            });
        });
    })($('.j-country-select'));

    (function($phoneInputs){
        if (!$phoneInputs.length){
            return
        }
        require(['intl-tel-input'], function (IntlTelInput) {
            $phoneInputs.each(function(){
                var $element = $(this),
                    $countrySelect = $('#' + $element.data('countrySelect')),
                    defaultCountry = '';
                if ($countrySelect.length > 0){
                    defaultCountry = $countrySelect.countrySelect('getSelectedCountryData').iso2;
                    defaultCountry = !!defaultCountry ? defaultCountry.toUpperCase() : '';
                }
                $element.intlTelInput({
                    customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
                        $element.mask(selectedCountryPlaceholder.replace(/[0-9]/g, '9'));
                        return $element.attr('placeholder') || selectedCountryPlaceholder;
                    },
                    separateDialCode:true,
                    autoHideDialCode:false,
                    utilsScript:'build/js/jquery/utils.js',
                    defaultCountry:defaultCountry
                });

            });

        });
    })($('.j-phone-input'));

});