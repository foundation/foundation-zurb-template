$(document).foundation();

var sucked = localStorage.getItem('sucked');

$(document).ready(function(){
  if( sucked == "yep" ) {
    $('.the-hole').addClass('still-sucked');
    $('body').addClass('bye-bye');
  }
});

$(document).ready(function(){
  $('.the-hole').mouseenter(function(){
    if( !$('.the-hole').hasClass('sucked') ) {
      $('.the-hole').addClass('sucked');
      $('body').addClass('bye-bye');
      localStorage.setItem("sucked", "yep");
    }
  });
});