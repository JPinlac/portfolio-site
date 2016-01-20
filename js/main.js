// shrink navbar back to auto.
// JQuery solution necessary because of transition property limitations in CSS with height auto
var curHeight = $('#navbar').height();
var autoHeight = $('#navbar').css('height', 'auto').height();
$('#navbar').delay(3000).height(curHeight).animate({height: autoHeight}, 1000, function(){
  $(this).removeAttr('style');
  $(this).css('height', 'auto');
  if ($(window).width() / parseFloat($('body').css('font-size')) >= 33){
    $(this).css('align-items', 'flex-end');
  }
});
$('#title, #navbar a').delay(4000).queue(function(next){
  $(this).addClass('show');
  next();
});

$('#navbar li + li').delay(4000).queue(function(next){
  $(this).attr('data-content', ' | ');
  next();
});