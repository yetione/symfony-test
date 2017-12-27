require('jquery');
require('../css/app.scss');
require('popper.js');
require('bootstrap');
require('bootstrap-sass');
require('bootstrap-show-password');
require('intl-tel-input');
require('jquery.maskedinput');

$(document).ready(function () {
    var $countrySelect = $('#registration-country');
    var countrySelectName = $countrySelect.data('name');
    console.log(countrySelectName, 'input[name="' + countrySelectName + '"]')
    var hidden = $countrySelect.find('input[name="' + countrySelectName + '"]');
    console.log(hidden);
    hidden.change(function(){
        console.log('change');
    });
    $countrySelect.find('ul[role="option"] > li > a').click(function(){
        console.log('Country is '+$(this).data('option'));
    });

    hidden.on('propertychange.bfhselectbox.data-api', function(){
        console.log('hidden change.bfhselectbox');
    });

    $countrySelect.on('change', function(){
        console.log('div change.bfhselectbox');
    })
    $countrySelect.on('shown.bfhselectbox', function(){
        console.log('open')
    });
    //$('#registration-phone').mask('999-99-99');
    $('#registration-phone').intlTelInput({
        customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
            return selectedCountryPlaceholder;
        },
        separateDialCode:true,
        autoHideDialCode:false,
        //utilsScript:'build/js/jquery/utils.js'
    });
});