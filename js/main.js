// after intro changes regular values
$('#navbar').delay(3000).queue(function(next){
  $(this).addClass('normal');
  $('#type-helper').addClass('normal');
  $('#title').addClass('show');
  $(this).removeAttr('style');
  if ($(window).width() / parseFloat($('body').css('font-size')) <= 32){
    $('nav ul').addClass('show');
  }
  next();
});

// shrink navbar back to auto.
// JQuery solution necessary because of transition property limitations in CSS with height auto
var curHeight = $('#navbar').height();
var autoHeight = $('#navbar').css('height', 'auto').height();
$('#navbar').height(curHeight).animate({height: autoHeight}, 1000, function(){
  $(this).removeAttr('style');
  if ($(window).width() / parseFloat($('body').css('font-size')) > 32){
    $(this).css('align-items', 'flex-end');
    console.log('first')
  }
  $(this).css('height', 'auto');
  $('nav ul').addClass('show');
});

// fix for full screen navbar intro breaking normal responsive design
$(window).on('resize', function(){
  console.log($(this).width() / parseFloat($('body').css('font-size')))
  if($(this).width() / parseFloat($('body').css('font-size')) <= 32){
    $('#navbar').css('align-items', 'center');
  }
  else {
    $('#navbar').css('align-items', 'flex-end');
    console.log("second")
  }
});
