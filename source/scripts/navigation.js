$(function(){
  var $NAVIGATION = ('.Navigation');
  var $NAVIGATION_TRIGGER = ('.Preheader-menuMobile');
  var $NAVIGATION_CLOSE = ('.Navigation-mobileClose');

  $($NAVIGATION_TRIGGER).on('click', function(){
      $($NAVIGATION).toggleClass('Navigation--hidden');
  });

  $($NAVIGATION_CLOSE).on('click', function(){
      $($NAVIGATION).toggleClass('Navigation--hidden');
  })


})