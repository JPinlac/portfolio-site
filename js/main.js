// shrink navbar back to auto. JQuery solution necessary because of height transition limitations in CSS
var curHeight = $('#navbar').height();
var autoHeight = $('#navbar').css('height', 'auto').height();
console.log(autoHeight)
$('#navbar').delay(3000).height(curHeight).animate({height: autoHeight}, 1000, function(){
  $(this).removeAttr('style');
  $(this).css('height', 'auto')
});
