// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
(function($) {  /**   * Copyright 2012, Digital Fusion   * Licensed under the MIT license.   * http://teamdf.com/jquery-plugins/license/   *   * @author Sam Sehnert   * @desc A small plugin that checks whether elements are within   *     the user visible viewport of a web browser.   *     only accounts for vertical position, not horizontal.   */  $.fn.visible = function(partial) {          var $t            = $(this),          $w            = $(window),          viewTop       = $w.scrollTop(),          viewBottom    = viewTop + $w.height(),          _top          = $t.offset().top,          _bottom       = _top + $t.height(),          compareTop    = partial === true ? _bottom : _top,          compareBottom = partial === true ? _top : _bottom;        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));  };    })(jQuery);var win = $(window);var allMods = $(".module");allMods.each(function(i, el) {  var el = $(el);  if (el.visible(true)) {    el.addClass("already-visible");   } });win.scroll(function(event) {    allMods.each(function(i, el) {    var el = $(el);    if (el.visible(true)) {      el.addClass("come-in");     }   });  });