// A $( document ).ready() block.
$( document ).ready(function() {
  
    $('.hamburger-button').click(function(){
        $('.mobile-menu').fadeToggle(100);
        $(this).toggleClass('active');
      });
    // Animate on scroll - activate 
    
      AOS.init({
        duration: 500 // values from 0 to 3000, with step 50ms
      });
     

});