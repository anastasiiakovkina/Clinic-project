// burger menu
$(document).ready(function() {
    $('.burger_button').click(function(){
        $('.burger_button').toggleClass('open-menu');
        $('.mobile_menu_list').toggleClass('open-menu');
    });
});