$('.navbar-start').delay(3000).queue(function(next){
  $(this).addClass('navbar-normal');
  $(this).removeClass('navbar-start');
  $(this).offset();
});