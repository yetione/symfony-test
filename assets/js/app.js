require('jquery');
require('../css/app.scss');
require('popper.js');
require('bootstrap');
require('bootstrap-sass');
require('bootstrap-show-password');
require('intl-tel-input');
require('jquery.maskedinput');
require('./bootstrap/countrySelect.min.js');
require('gijgo')

$(document).ready(function () {
    var $countrySelect = $('#registration-country');
    var $phoneInput = $('#registration-phone');
    var countrySelectName = $countrySelect.data('name');

    $countrySelect.countrySelect();
    $countrySelect.on('change', function(){
        var country = $countrySelect.countrySelect('getSelectedCountryData');
        $phoneInput.intlTelInput('setCountry', country.iso2.toUpperCase());
    });
    //$('#registration-phone').mask('999-99-99');
    $phoneInput.intlTelInput({
        customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
            return selectedCountryPlaceholder;
        },
        separateDialCode:true,
        autoHideDialCode:false,
        defaultCountry: $countrySelect.countrySelect('getSelectedCountryData').iso2.toUpperCase()
        //utilsScript:'build/js/jquery/utils.js'
    });
    var $dateBirthday = $('#registration-dateBirthday');
    $dateBirthday.datepicker({
        uiLibrary:'bootstrap4'
    });
});