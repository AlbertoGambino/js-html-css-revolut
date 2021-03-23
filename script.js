function init() {

  function init() {

  $('.nav-right span').hover(function(){

    $(this).find('.dropdown').addClass('active')
    // $('.dropdown').addClass('active')
  }, function(){
    
    $('.dropdown').removeClass('active')})
}
$(document).ready(init)
