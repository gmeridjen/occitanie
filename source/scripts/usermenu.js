$(function(){

    var $USER_MENU_TRIGGER = '.Preheader-userMenuTrigger';
    var $USER_SUB_MENU = '.Preheader-userSubMenu';

    $($USER_MENU_TRIGGER).on('click', function(){
        $($USER_SUB_MENU).toggleClass('Preheader-userSubMenu--hidden')
    });

})