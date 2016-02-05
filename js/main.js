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

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  }; 
})(jQuery);


// scroll jacking
var $intro = $('intro');
var $win = $(window);
var $projects = $('.project');

$projects.each(function(i,el){
    var el = $(el);
    if (el.visible(true)) {
      el.addClass('already-visible')
    }
  });

$win.scroll(function(){
  // sticky navbar
  if($win.scrollTop() > 0) {
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

  // slide in
  $projects.each(function(i,el){
    var el = $(el);
    if(el.visible(true)){
      el.addClass('come-in');
    }
  });

});

