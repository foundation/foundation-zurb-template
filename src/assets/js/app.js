import $ from 'jquery';
import jQuery from 'jquery';
import whatInput from 'what-input';


window.$ = $;
window.jQuery = jQuery;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

$(document).ready(function ($) {
  $('.owl-carousel').owlCarousel();
});

var $window = $(window);

$window.one('scroll', function() {
  var $primaryNav = $('.nav-primary');
  $primaryNav.addClass('visible');
});

var $parallaxSection = $('[data-parallax-bg]');

$window.on('scroll', function() {
  
  $parallaxSection.each(function() {
    var thisOffset = this.getBoundingClientRect()

    if(thisOffset.top < document.documentElement.clientHeight && thisOffset.bottom > 0) {
      // If in view
      var $background = $(this).find('.background');
      //var currentTop = $background.css('top');
      var newTop = ((thisOffset.top / document.documentElement.clientHeight) * 50 - 30).toFixed(2) + 'px';
      $background.css('top', newTop);
    }
  });
});

