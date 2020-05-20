
$(document).ready(function() {
    
    $('.parallax').parallax();

    
    $('.show_sidebar').on('click', function() {
        $('.sidebar').toggleClass('sidebar_mobile');
    });

    /*$('.close_sidebar').on('click', function() {
        $('.sidebar').removeClass('.sidebar_mobile')
    })*/
  

});