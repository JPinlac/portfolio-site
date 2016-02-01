var $navbar = $('#navbar')
// after intro, changes to regular values
$navbar.delay(3000).queue(function(next){
  $(this).addClass('normal');
  $('#type-helper').addClass('normal');
  $('#title').addClass('show');
  $(this).removeAttr('style');
  if ($navbar.css('flex-flow') == 'column wrap'){
    $('nav ul').addClass('show');
  }
  next();
});

// animated shrink navbar back to height: auto.
// JQuery solution necessary because of transition property limitations in CSS with height auto
var curHeight = $navbar.height();
var autoHeight = $navbar.css('height', 'auto').height();
$navbar.height(curHeight).animate({height: autoHeight}, 1000, function(){
  $(this).removeAttr('style');
  if ($navbar.css('flex-flow') == 'row wrap'){
    $(this).css('align-items', 'flex-end');
  }
  $(this).css('height', 'auto');
  $('nav ul').addClass('show');
});

// fix for full screen navbar intro breaking normal responsive design
$(window).on('resize', function(){
  if ($navbar.css('flex-flow') == 'column wrap'){
    $navbar.css('align-items', 'center');
  }
  else {
    $navbar.css('align-items', 'flex-end');
  }
});

var $intro = $('intro')
// sticky navbar
$(window).scroll(function(){
  if($(this).scrollTop() > 0) {
    if($navbar.css('flex-flow') == 'row wrap'){
      $intro.css('margin-top', $navbar.height());
    }
    $navbar.addClass('sticky');
  } else {
    if($navbar.css('flex-flow') == 'column wrap'){
      $intro.css('margin-top', 0);
    }
    $navbar.removeClass('sticky');
  }
});

