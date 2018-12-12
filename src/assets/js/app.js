import $ from 'jquery';
import 'what-input';
// import 'svg-injector-2';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');
// require('./svg-injector');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

// app wrapper toggle
// -------------------------
$('[data-app-wrapper-toggle-shrink]').on('click', function(e) {
  e.preventDefault();
  $(this).parents('.app-wrapper').toggleClass('shrink-medium').toggleClass('shrink-large');
});
