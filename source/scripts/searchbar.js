$(function(){
  var $NAVIGATION_TRIGGER = '.Navigation-item--search';
  var $NAVIGATION_TRIGGER_MOBILE = '.Preheader-searchMobileTrigger';
  var $SEARCHBAR = '.SearchBar';
  var $SEARCHBAR_CLOSE = '.SearchBar-close';

  $($NAVIGATION_TRIGGER).on('click', function(){
    $($SEARCHBAR).toggleClass('SearchBar--hidden');
  });

  $($NAVIGATION_TRIGGER_MOBILE).on('click', function(){
    $($SEARCHBAR).toggleClass('SearchBar--hidden');
  });

  $($SEARCHBAR_CLOSE).on('click', function(){
    $($SEARCHBAR).toggleClass('SearchBar--hidden');
  });

})