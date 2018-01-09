define('pages/registration', ['jquery'], function ($) {
    $(document).ready(function(){
        require(['../modules/inputs'], function () {
            var $countrySelect = $('#registration-country'), $phoneInput = $('#registration-phone');
            $countrySelect.on('change', function(){
                var country = $countrySelect.countrySelect('getSelectedCountryData');
                $phoneInput.intlTelInput('setCountry', country.iso2.toUpperCase());
            });
        });
    });


});