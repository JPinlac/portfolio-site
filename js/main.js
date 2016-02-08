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


// scroll events
var $intro = $('intro');
var $win = $(window);
var $projects = $('.project');

$win.scroll(function(){
  // sticky navbar
  if($win.scrollTop() > 0) {
    $navbar.addClass('sticky');
  } else {
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

// smooth scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      var adjustHeight = 0; //adjustment for sticky navbar document flow
      if($win.scrollTop() == 0 && $('.brand').css('align-items') == 'baseline') {
        adjustHeight = $navbar.height() + 30;
      }
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - adjustHeight)
        }, 1000);
        return false;
      }
    }
  });
});