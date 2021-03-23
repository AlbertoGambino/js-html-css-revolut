

  function init() {

  $('.nav-right span').hover(function(){

    $(this).next().addClass('active')

  }, function(){

    $('.dropdown').removeClass('active')})
}

$(document).ready(init)
