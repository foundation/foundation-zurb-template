import $ from 'jquery';
import jQuery from 'jquery';
import whatInput from 'what-input';


window.$ = $;
window.jQuery = jQuery;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

// Custom media queries
Foundation.Interchange.SPECIAL_QUERIES['smallRetina'] = 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['mediumRetina'] = 'only screen and (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)';

$(document).foundation();

// Experience carousels
$(document).ready(function ($) {
  $('.owl-carousel').owlCarousel({
    center: true,
    nav: true,
    navText: ['<button class="show-for-sr" aria-label="Previous">Previous</button>','<button class="show-for-sr" aria-label="Next">Next</button>'],
    items: 1.5,
    smartSpeed: 500,
    URLhashListener: true,
    startPosition: 'URLHash',
    autoHeight:true,
    responsive : {
      0 : {
        margin: 20
      },
      1024 : {
        margin: 40
      }
    }
  });
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
      var newTop = ((thisOffset.top / document.documentElement.clientHeight) * 50 - 13).toFixed(2) + 'px';
      $background.css('top', newTop);
    }
  });
});

