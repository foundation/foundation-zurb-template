import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();
<<<<<<< HEAD

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


=======
>>>>>>> e6650e6f06acbc3f9bb3456e5db817dffbcd4b75
