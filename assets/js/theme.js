/*
================================================================
* Template:  	 Oxyy - Login and Register Form Html Templates
* Written by: 	 Harnish Design - (http://www.harnishdesign.net)
* Description:   Main Custom Script File
================================================================
*/


(function ($) {
	"use strict";

// Preloader
$(window).on('load', function () {
	$('.lds-ellipsis').fadeOut(); // will first fade out the loading animation
	$('.preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(333);
});


// OTP Form (Focusing on next input)
$("#otp-screen .form-control").keyup(function() {  
if (this.value.length == 0) {
   $(this).blur().parent().prev().children('.form-control').focus();
}
else if (this.value.length == this.maxLength) {
   $(this).blur().parent().next().children('.form-control').focus();
}
});



/*------------------------
   tooltips
-------------------------- */
$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

})(jQuery)

$('#radioBtn a').on('click', function(){
    var sel = $(this).data('title');
    var tog = $(this).data('toggle');
    $('#'+tog).prop('value', sel);
    
    $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
    $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
})