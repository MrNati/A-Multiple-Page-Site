"strict";

// make apply now blink continuosly
$(document).scroll(function(){
    $("#textBlink").fadeOut().fadeIn("1000");
});

// Reset form field after clicking Submit Button
function myFunction() {
    setTimeout(function(){
        document.getElementById("resetFormField").reset();
    }, 0);
}