// shrink navbar back to auto.
// JQuery solution necessary because of transition property limitations in CSS with height auto
var curHeight = $('#navbar').height();
var autoHeight = $('#navbar').css('height', 'auto').height();
$('#navbar').delay(3000).height(curHeight).animate({height: autoHeight}, 1000, function(){
  $(this).removeAttr('style');
  $(this).css('height', 'auto');
});
$('#title, .navbar ul').delay(3000).queue(function(next){
  $(this).addClass('show');
  next();
});