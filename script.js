

  function init() {

  $('.nav-right span').hover(function(){
    // prendo tutti elementi dropdown active
    // rimuovo active

    $(this).next().addClass('active')
    // $('.dropdown').addClass('active')
  }, function(){

    $('.dropdown').removeClass('active')})
}

$(document).ready(init)
