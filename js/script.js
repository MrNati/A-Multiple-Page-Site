"strict";

// make apply now blink continuosly
$(document).scroll(function(){
    $("#textBlink").fadeOut().fadeIn("1000");
});

// // display hidden footer element
// $(document).ready(function() {
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
//         /* Check the location of each desired element */
//         $('#myFooter').each( function(i){
//             let bottom_of_object = $(this).position().top + $(this).outerHeight();
//             let bottom_of_window = $(window).scrollTop() + $(window).height();
//             /* If the object is completely visible in the window, fade it */
//             if( bottom_of_window > bottom_of_object ){
//                 $(this).animate({'opacity':'1'},1000);   
//             }
//         }); 
//     });
// });